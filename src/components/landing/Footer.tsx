import logo from "@/assets/logo.png";
import FooterSocialDock from "./FooterSocialDock";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contribute", href: "#contribute" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

const resourceLinks = [
  { label: "Pitch Deck", href: "#" },
  { label: "Whitepaper", href: "#" },
  { label: "Brand Assets", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background" style={{ minHeight: 400 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Top: Logo + Brand */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="TempWallets logo" className="h-10 w-auto object-contain" />
          </div>
          <h3 className="font-display font-bold text-foreground text-2xl sm:text-3xl tracking-tight">
            Built by TempWallets
          </h3>
        </div>

        {/* Main content: Description left, Links right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16 sm:mb-20">
          {/* Left: Description */}
          <div className="lg:max-w-md flex-shrink-0">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Instant, disposable wallets for Web3 exploration. No setup, no risk
              – explore freely.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex-1 space-y-8">
            {/* Row 1: Button links */}
            <nav className="flex flex-wrap gap-3" aria-label="Product links">
              {productLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="inline-flex items-center justify-center rounded-xl bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-background hover:text-foreground hover:ring-1 hover:ring-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Row 2: Text links */}
            <nav className="flex flex-wrap gap-6" aria-label="Resource links">
              {resourceLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-foreground hover:underline underline-offset-4 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Social Dock */}
        <div className="mb-12">
          <FooterSocialDock />
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TempWallets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
