import { useEffect, useRef } from 'react'

export default function BackgroundVideo({ src, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // Setting the property (not just the attribute) is required for muted
    // autoplay to be honored by Safari/iOS and Chrome's autoplay policy.
    video.muted = true
    video.defaultMuted = true
    const attempt = video.play()
    if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  )
}
