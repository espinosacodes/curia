/* DISABLED for production. Dev-only liquid-logo preview (route /liquid).
   Re-enable by deleting this wrapper and uncommenting the route + import in App.jsx. */
/*
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, RefreshCw } from 'lucide-react'
import { parseLogoImage } from '../lib/parseLogoImage.js'
import LiquidLogo from '../components/LiquidLogo.jsx'

const LOGO_SRC = '/liquid-source.png'

// Slider ranges for the liquid shader.
const CONTROLS = [
  { key: 'refraction', label: 'Refraction', min: 0, max: 0.06, step: 0.001 },
  { key: 'edge', label: 'Edge', min: 0, max: 1, step: 0.01 },
  { key: 'patternBlur', label: 'Pattern blur', min: 0, max: 0.05, step: 0.001 },
  { key: 'liquid', label: 'Liquid', min: 0, max: 1, step: 0.01 },
  { key: 'speed', label: 'Speed', min: 0, max: 1, step: 0.01 },
  { key: 'patternScale', label: 'Pattern scale', min: 1, max: 10, step: 0.1 },
]

const DEFAULT_PARAMS = {
  refraction: 0.015,
  edge: 0.4,
  patternBlur: 0.005,
  liquid: 0.07,
  speed: 0.3,
  patternScale: 2,
}

export default function Liquid() {
  const [imageData, setImageData] = useState(null)
  const [processing, setProcessing] = useState(true)
  const [error, setError] = useState(null)
  const [params, setParams] = useState(DEFAULT_PARAMS)

  useEffect(() => {
    let cancelled = false
    setProcessing(true)
    parseLogoImage(LOGO_SRC)
      .then((result) => {
        if (cancelled) return
        setImageData(result.imageData)
        setProcessing(false)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err.message || String(err))
        setProcessing(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const setParam = (key, value) => setParams((p) => ({ ...p, [key]: value }))
  const reset = () => setParams(DEFAULT_PARAMS)

  const valueLabel = useMemo(
    () => (key) => {
      const v = params[key]
      return key === 'patternScale' ? v.toFixed(1) : v.toFixed(3)
    },
    [params]
  )

  return (
    <div className="min-h-screen bg-[#081a24] text-white font-helvetica">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to site
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">Liquid logo preview</span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b2433] to-[#02080c] ring-1 ring-white/10">
            {processing && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/60">
                <RefreshCw size={22} className="animate-spin" />
                <span className="text-sm">Processing logo…</span>
              </div>
            )}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center px-8 text-center text-sm text-red-300">
                {error}
              </div>
            )}
            {imageData && !error && (
              <div className="h-[78%] w-[78%]">
                <LiquidLogo imageData={imageData} params={params} onError={setError} />
              </div>
            )}
          </div>

          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Controls</h2>
              <button
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 transition-colors hover:bg-white/20"
              >
                <RefreshCw size={12} />
                Reset
              </button>
            </div>

            <div className="mt-6 space-y-5">
              {CONTROLS.map((c) => (
                <div key={c.key}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <label htmlFor={c.key} className="text-white/80">
                      {c.label}
                    </label>
                    <span className="tabular-nums text-white/50">{valueLabel(c.key)}</span>
                  </div>
                  <input
                    id={c.key}
                    type="range"
                    min={c.min}
                    max={c.max}
                    step={c.step}
                    value={params[c.key]}
                    onChange={(e) => setParam(c.key, parseFloat(e.target.value))}
                    className="w-full accent-cyan-300"
                  />
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-white/40">
              Tune the sliders, then we can drop the configured logo into the navbar or hero.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

*/
