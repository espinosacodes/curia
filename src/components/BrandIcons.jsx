// Brand logos for cloud providers, used on the Deployment page.
// Raw SVG markup from the Devicon project (devicons/devicon, MIT), injected via
// dangerouslySetInnerHTML so the original brand colors and gradients are kept.
// Each accepts the same props as a Lucide icon (className, aria-hidden, ...).

const VIEWBOX = "0 0 128 128"

const AWS_SVG = `<path fill="#F7A80D" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679 7.345V90.089l-16.297-6.503zm34.276 0l-15.073 5.739V110.9l15.073-6.121V83.586zm17.979-68.551L61.73 19.931l10.635 4.515 12.241-4.515-11.4-4.896zm-15.914 6.503v22.034l14.231 4.132.459-20.046-14.69-6.12zm31.828 1.224L75.654 28.5v21.652l13.466-6.121V22.762zM19.306 46.047L7.907 50.944l10.558 4.514 12.241-4.514-11.4-4.897zM2.168 52.168l-.382 22.034 16.679 7.345V58.671L2.168 52.168zm34.275 0l-15.071 5.738V79.48l15.071-6.12V52.168zm19.587-6.937l-11.4 4.897 10.558 4.514 12.241-4.514-11.399-4.897zm-17.137 6.121l-.383 22.035 16.679 7.345V57.855l-16.296-6.503zm34.275 0L58.096 57.09v21.576l15.072-6.121V51.352zm35.908-36.317l-11.399 4.896 10.559 4.515 12.241-4.515-11.401-4.896zm-17.137 6.121l-.382 22.034 16.679 7.344V27.658l-16.297-6.502zm34.275 0l-15.071 5.738v21.575l15.071-6.12V21.156z"/>`
const AZURE_SVG = `<defs><linearGradient id="azure-original-a" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse"><stop stop-color="#114A8B"/><stop offset="1" stop-color="#0669BC"/></linearGradient><linearGradient id="azure-original-b" x1="74.117" y1="67.772" x2="64.344" y2="71.076" gradientUnits="userSpaceOnUse"><stop stop-opacity=".3"/><stop offset=".071" stop-opacity=".2"/><stop offset=".321" stop-opacity=".1"/><stop offset=".623" stop-opacity=".05"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="azure-original-c" x1="68.742" y1="5.961" x2="115.122" y2="129.525" gradientUnits="userSpaceOnUse"><stop stop-color="#3CCBF4"/><stop offset="1" stop-color="#2892DF"/></linearGradient></defs><path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#azure-original-a)" transform="translate(.587 4.468) scale(.91904)"/><path d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z" fill="#0078d4"/><path d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z" fill="url(#azure-original-b)" transform="translate(.587 4.468) scale(.91904)"/><path d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z" fill="url(#azure-original-c)" transform="translate(.587 4.468) scale(.91904)"/>`
const GCP_SVG = `<path fill="#ea4535" d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2 5.2-3.4 11.4-5.4 17.9-5.4 2.2 0 4.3.2 6.4.6.1-.1.2-.1.3-.1 9-9.9 24.2-11.1 34.6-2.6h-.1z"/><path fill="#557ebf" d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1 4.3-13.8-1-28.8-13-36.9z"/><path fill="#36a852" d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"/><path fill="#f9bc15" d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8 6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"/>`

function BrandIcon({ svg, title, className, ...props }) {
  return (
    <svg
      viewBox={VIEWBOX}
      className={className}
      role="img"
      aria-label={title}
      {...props}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export function AwsLogo(props) {
  return <BrandIcon svg={AWS_SVG} title="Amazon Web Services" {...props} />
}
export function AzureLogo(props) {
  return <BrandIcon svg={AZURE_SVG} title="Microsoft Azure" {...props} />
}
export function GcpLogo(props) {
  return <BrandIcon svg={GCP_SVG} title="Google Cloud" {...props} />
}
