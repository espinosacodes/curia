import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

// Shared animated shader-gradient background for the CTA bands (home + subpages).
// Navy palette only (single hue) so the shader never blends toward green;
// grain is off for the same reason. Sits behind `relative z-10` content.
export default function GradientBg() {
  return (
    <>
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        pixelDensity={1}
        fov={40}
      >
        <ShaderGradient
          control="props"
          type="waterPlane"
          animate="on"
          color1="#0a1838"
          color2="#243a6b"
          color3="#eef3fb"
          uSpeed={0.22}
          uStrength={1.9}
          uDensity={1.7}
          uFrequency={5.5}
          grain="off"
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          cAzimuthAngle={180}
          cPolarAngle={80}
          cDistance={2.8}
          cameraZoom={9.1}
          lightType="3d"
          brightness={1.3}
          reflection={0.1}
        />
      </ShaderGradientCanvas>
      <div className="absolute inset-0 bg-black/20" />
      {/* Film-grain dots — desaturated grey (R=G=B) so it can never tint green,
          the way shadergradient's own grain does on a dark navy palette. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.30]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '120px 120px',
          backgroundRepeat: 'repeat',
        }}
      />
    </>
  )
}
