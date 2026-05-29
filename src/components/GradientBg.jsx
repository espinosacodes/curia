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
    </>
  )
}
