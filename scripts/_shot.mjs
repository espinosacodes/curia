import { chromium } from 'playwright-core'

const SW = process.env.SW === '1'
const browser = await chromium.launch({
  channel: 'chrome',
  args: SW
    ? ['--use-gl=angle', '--use-angle=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist']
    : ['--use-angle=metal', '--enable-gpu', '--enable-webgl', '--ignore-gpu-blocklist'],
})
const url = process.argv[2] || 'http://localhost:8080/'
const out = process.argv[3] || '/tmp/cta.png'
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
await page.goto(url, { waitUntil: 'networkidle' })

const renderer = await page.evaluate(() => {
  const gl = document.createElement('canvas').getContext('webgl')
  const ext = gl && gl.getExtension('WEBGL_debug_renderer_info')
  return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'unknown'
})
console.log('WebGL renderer:', renderer)

const cta = page.locator('section').filter({ hasText: 'Give every team AI that knows its role' }).first()
await cta.scrollIntoViewIfNeeded()
await page.waitForTimeout(4000) // let the shader render/animate a frame
await cta.screenshot({ path: out })
console.log('saved', out)
await browser.close()
