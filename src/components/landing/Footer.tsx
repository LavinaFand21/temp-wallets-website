import logo from "@/assets/logo.png";
import FooterSocialDock from "./FooterSocialDock";

const productLinks = [
{ label: "Features", href: "#features" },
{ label: "Roadmap", href: "#roadmap" },
{ label: "Contribute", href: "#contribute" },
{ label: "Privacy Policy", href: "#" },
{ label: "Terms", href: "#" }];


const resourceLinks = [
{ label: "Pitch Deck", href: "#" },
{ label: "Whitepaper", href: "#" },
{ label: "Brand Assets", href: "#" }];


const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-background" style={{ minHeight: 440 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        {/* Row 1: Full-width logo */}
        <div className="mb-14 sm:mb-16">
          <img
            src={logo}
            alt="TempWallets logo"
            className="w-full h-auto object-contain object-left" />
        </div>

        {/* Row 2: Left desc + Right links */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16 sm:mb-20">
          {/* Left: Brand + Description */}
          <div className="lg:max-w-md flex-shrink-0">
            <h3 className="font-bold text-foreground text-xl tracking-tight mb-3 sm:text-3xl font-sans">
              Built by TempWallets
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Instant, disposable wallets for Web3 exploration. No setup, no risk
              – explore freely.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex-1 flex flex-col items-start lg:items-end gap-6">
            {/* Row 1: Outline button links (matches hero "Launch Wallet" style) */}
            <nav className="flex flex-wrap gap-3" aria-label="Product links">
              {productLinks.map((l) =>
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-sm hover:border-foreground/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                  {l.label}
                </a>
              )}
            </nav>

            {/* Row 2: Text links – right aligned */}
            <nav className="flex flex-wrap gap-6" aria-label="Resource links">
              {resourceLinks.map((l) =>
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-foreground hover:underline underline-offset-4 transition-colors">
                  {l.label}
                </a>
              )}
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
    </footer>);

};

export default Footer;