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
    <footer className="border-t border-border/20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        {/* Row 1: Full-width logo */}
        <div className="mb-3">
          <img
            src={logo}
            alt="TempWallets logo"
            className="w-full h-auto object-contain object-left" />
        </div>

        {/* Row 2: Left desc + Right links */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 mb-4">
          {/* Left: Brand + Description */}
          <div className="lg:max-w-sm flex-shrink-0">
            <h3 className="font-bold text-foreground text-lg tracking-tight mb-2 font-sans">
              Built by TempWallets
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Instant, disposable wallets for Web3 exploration. No setup, no risk – explore freely.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex-1 flex flex-col items-start lg:items-end gap-4">
            {/* Row 1: Outline button links */}
            <nav className="flex flex-wrap gap-2" aria-label="Product links">
              {productLinks.map((l) =>
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-sm hover:border-foreground/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                  {l.label}
                </a>
              )}
            </nav>

            {/* Row 2: Text links – right aligned */}
            <nav className="flex flex-wrap gap-5" aria-label="Resource links">
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
        <div className="mb-4">
          <FooterSocialDock />
        </div>

        {/* Bottom copyright */}
        <div className="pt-3 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TempWallets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;