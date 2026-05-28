const columns = [
  {
    title: 'Protocol',
    links: ['Smart Vaults', 'Staking', 'Tokenomics', 'Security'],
  },
  {
    title: 'Developers',
    links: ['Documentation', 'SDK', 'API Reference', 'GitHub'],
  },
  {
    title: 'Community',
    links: ['Discord', 'Twitter', 'Governance', 'Blog'],
  },
]

export default function Footer() {
  return (
    <footer className="w-full max-w-[1536px] mx-auto px-6 md:px-10 py-12 md:py-16 border-t border-[rgba(30,50,90,0.1)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left column */}
        <div className="max-w-sm">
          <span className="text-[#1b2a4e] text-2xl font-semibold tracking-tight">
            RIVR
          </span>
          <p className="mt-4 text-[#5E6470] text-sm leading-relaxed">
            Fluid asset streams for high-performance DeFi. Stake, earn, and move
            value in real time across every chain.
          </p>
        </div>

        {/* Right grid */}
        <div className="grid grid-cols-3 gap-6">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[#1b2a4e] text-sm font-semibold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#5E6470]/70 hover:text-[#1b2a4e] text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[rgba(30,50,90,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#5E6470]/60 text-xs">
          © 2026 RIVR Protocol. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[#5E6470]/60 hover:text-[#1b2a4e] text-xs transition-colors">
            Privacy
          </a>
          <a href="#" className="text-[#5E6470]/60 hover:text-[#1b2a4e] text-xs transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
