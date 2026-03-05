import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import logo from "@/assets/logo.png";
import mobileIcon from "@/assets/icon-mobile.png";

const navItems = [
  { name: "Features", link: "#features" },
  { name: "Roadmap", link: "#roadmap" },
  { name: "Partners", link: "#partners" },
  { name: "Contribute", link: "#contribute" },
];

const NavbarSection = () => {
  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo src={logo} alt="TempWallets logo" label="TempWallets" />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton
            href="https://app.tempwallets.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
          >
            Launch App
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile – single row: icon + nav links + CTA */}
      <MobileNav>
        <div className="flex w-full items-center justify-between gap-1 px-3">
          {/* Icon only (no text) */}
          <a href="#" className="flex-shrink-0">
            <img src={mobileIcon} alt="TempWallets" className="h-8 w-8 object-contain" />
          </a>
          {/* Nav links */}
          <nav className="flex items-center gap-0.5 overflow-hidden">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-foreground/70 hover:text-foreground transition-colors text-[11px] font-medium whitespace-nowrap px-2 py-1.5 rounded-full hover:bg-foreground/5"
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* CTA */}
          <NavbarButton
            href="https://app.tempwallets.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            className="text-[10px] px-3 py-1.5 flex-shrink-0"
          >
            Launch App
          </NavbarButton>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarSection;
