import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  channel: 'chrome',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'],
})
const url = process.argv[2] || 'http://localhost:8080/'
const out = process.argv[3] || '/tmp/cta.png'
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
await page.goto(url, { waitUntil: 'networkidle' })

const cta = page.locator('section').filter({ hasText: 'Give every team AI that knows its role' }).first()
await cta.scrollIntoViewIfNeeded()
await page.waitForTimeout(4000) // let the shader render/animate a frame
await cta.screenshot({ path: out })
console.log('saved', out)
await browser.close()
