import { ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contribute", href: "#contribute" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

const socialLinks = [
  { label: "Website", href: "https://tempwallets.com" },
  { label: "X", href: "https://x.com/tempwallets" },
  { label: "Telegram", href: "https://t.me/tempwallets" },
  { label: "Medium", href: "https://medium.com/@tempwallets" },
];

const extraLinks = [
  { label: "Pitch Deck", href: "#" },
  { label: "Whitepaper", href: "#" },
  { label: "Brand Assets", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-glow-blue to-glow-cyan flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">T</span>
              </div>
              <span className="font-display font-bold text-foreground">TempWallets</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Instant, disposable wallets for Web3 exploration.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Community</h4>
            <ul className="space-y-2">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {l.label}
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Resources</h4>
            <ul className="space-y-2">
              {extraLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TempWallets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
