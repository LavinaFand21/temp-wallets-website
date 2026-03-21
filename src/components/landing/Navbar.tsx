import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton } from
"@/components/ui/resizable-navbar";
import logo from "@/assets/logo.png";
import mobileIcon from "@/assets/icon-mobile.png";
import { toast } from "sonner";

const navItems = [
{ name: "Features", link: "#features" },
{ name: "Roadmap", link: "#roadmap" },
{ name: "Partners", link: "#partners" },
{ name: "Contribute", link: "#contribute" }];

const handleLaunchClick = (e: React.MouseEvent) => {
  e.preventDefault();
  toast("Coming Soon!", { description: "The app is under development. Stay tuned!" });
};

const NavbarSection = () => {
  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo src={logo} alt="TempWallets logo" label="TempWallets" />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton
            as="button"
            onClick={handleLaunchClick}
            variant="gradient">
            Launch App
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile – single row: icon + nav links + CTA */}
      <MobileNav>
        <div className="flex w-full items-center justify-between gap-1 px-2">
          <a href="#" className="flex-shrink-0">
            <img src={mobileIcon} alt="TempWallets" className="h-7 w-7 object-contain" />
          </a>
          <nav className="flex items-center flex-1 justify-center gap-0 overflow-hidden mx-1">
            {navItems.map((item, idx) =>
            <a
              key={idx}
              href={item.link}
              className="text-foreground/70 hover:text-foreground transition-colors text-[10px] whitespace-nowrap px-1.5 py-1 rounded-full hover:bg-foreground/5 font-semibold">
                {item.name}
              </a>
            )}
          </nav>
          <NavbarButton
            as="button"
            onClick={handleLaunchClick}
            variant="gradient"
            className="text-[9px] px-2.5 py-1.5 flex-shrink-0 leading-tight">
            Launch
          </NavbarButton>
        </div>
      </MobileNav>
    </Navbar>);
};

export default NavbarSection;
