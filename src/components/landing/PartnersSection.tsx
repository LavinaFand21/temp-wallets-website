import { motion } from "framer-motion";
import hacktourLogo from "@/assets/partner-hacktour.png";
import polkadotLogo from "@/assets/partner-polkadot.png";
import web3AligarhLogo from "@/assets/partner-web3aligarh.png";
import inbmLogo from "@/assets/partner-inbm.png";
import yellowLogo from "@/assets/partner-yellow.png";
import shefiLogo from "@/assets/partner-shefi.png";
import bitcoinIndiaConferenceLogo from "@/assets/partner-bitcoin-india-conference.png";
import upskillAfricaLogo from "@/assets/partner-upskill-africa.png";

type Partner = {
  name: string;
  logo: string;
  scale: number;
  translateX: number;
  translateY: number;
  bgSize?: string;
  bgPosition?: string;
};

const partners: Partner[] = [
{ name: "Yellow Network", logo: yellowLogo, scale: 1, translateX: 0, translateY: 0 },
{ name: "Hack Tour India", logo: hacktourLogo, scale: 2.4, translateX: 0, translateY: 0 },
{ name: "Polkadot", logo: polkadotLogo, scale: 1, translateX: 0, translateY: 0 },
{ name: "Web3 Aligarh", logo: web3AligarhLogo, scale: 2.2, translateX: 0, translateY: 0 },
{ name: "India Blockchain Month", logo: inbmLogo, scale: 1, translateX: 0, translateY: 0 },
{ name: "SheFi", logo: shefiLogo, scale: 1, translateX: 0, translateY: 0, bgSize: "170%", bgPosition: "18% 32%" },
{ name: "Bitcoin India Conference", logo: bitcoinIndiaConferenceLogo, scale: 1, translateX: 0, translateY: 0, bgSize: "130%", bgPosition: "45% 40%" },
{ name: "Upskill Africa", logo: upskillAfricaLogo, scale: 2.5, translateX: 0, translateY: 0 }];


const PartnerCard = ({ partner }: {partner: Partner;}) => {
  if (partner.bgSize) {
    return (
      <div
        className="rounded-2xl border border-border/60 bg-card flex items-center justify-center transition-shadow cursor-default w-full h-[64px] overflow-hidden shadow-none [box-shadow:none]"
        style={{
          backgroundImage: `url(${partner.logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: partner.bgPosition ?? "center center",
          backgroundSize: partner.bgSize,
          boxShadow: "none"
        }}
        aria-label={`${partner.name} logo`} />);


  }
  return (
    <div className="rounded-2xl border border-border/60 bg-card flex items-center justify-center py-4 px-5 hover:shadow-md transition-shadow cursor-default w-full h-[64px] overflow-hidden">
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="max-h-8 w-full object-contain"
        style={{
          transform: `translate(${partner.translateX}%, ${partner.translateY}%) scale(${partner.scale})`,
          transformOrigin: "center center"
        }}
        loading="lazy" />
      
    </div>);

};

const DesktopPartnerCard = ({ partner }: {partner: Partner;}) => {
  if (partner.bgSize) {
    return (
      <div
        className="rounded-2xl border border-border/60 bg-card flex items-center justify-center hover:shadow-md transition-shadow cursor-default w-[148px] h-[80px] overflow-hidden"
        style={{
          backgroundImage: `url(${partner.logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: partner.bgPosition ?? "center center",
          backgroundSize: partner.bgSize
        }}
        aria-label={`${partner.name} logo`} />);


  }
  return (
    <div className="rounded-2xl border border-border/60 bg-card flex items-center justify-center py-5 px-7 hover:shadow-md transition-shadow cursor-default w-[148px] h-[80px] overflow-hidden">
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="max-h-10 w-full object-contain"
        style={{
          transform: `translate(${partner.translateX}%, ${partner.translateY}%) scale(${partner.scale})`,
          transformOrigin: "center center"
        }}
        loading="lazy" />
      
    </div>);

};

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-secondary/20 section-divider shadow-none">
      <div className="max-w-5xl mx-auto w-full shadow-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10">
          
          <h2 className="font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight text-black font-sans py-[25px]">
            Built with Leading Web3 Ecosystems
          </h2>
        </motion.div>

        {/* Mobile: 2-col grid with last item centered if odd */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="block sm:hidden py-0">
          
          <div className="grid grid-cols-2 gap-2.5 shadow-none">
            {partners.slice(0, partners.length % 2 === 0 ? partners.length : partners.length - 1).map((partner) =>
            <PartnerCard key={partner.name} partner={partner} />
            )}
          </div>
          {partners.length % 2 !== 0 &&
          <div className="mt-2.5 flex justify-center shadow-none">
              <div className="w-[calc(50%-5px)]">
                <PartnerCard partner={partners[partners.length - 1]} />
              </div>
            </div>
          }
        </motion.div>

        {/* Desktop: flex wrap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden sm:flex flex-wrap justify-center items-center gap-4 rounded-sm">
          
          {partners.map((partner) =>
          <DesktopPartnerCard key={partner.name} partner={partner} />
          )}
        </motion.div>
      </div>
    </section>);

};

export default PartnersSection;