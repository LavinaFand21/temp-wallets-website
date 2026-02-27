import { motion } from "framer-motion";
import hacktourLogo from "@/assets/partner-hacktour.png";
import polkadotLogo from "@/assets/partner-polkadot.png";
import web3AligarhLogo from "@/assets/partner-web3aligarh.png";
import inbmLogo from "@/assets/partner-inbm.png";
import yellowLogo from "@/assets/partner-yellow.png";

const partners = [
  { name: "Yellow Network", logo: yellowLogo },
  { name: "Hack Tour India", logo: hacktourLogo },
  { name: "Polkadot", logo: polkadotLogo },
  { name: "Web3 Aligarh", logo: web3AligarhLogo },
  { name: "India Blockchain Month", logo: inbmLogo },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-secondary/20 section-divider">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-bold text-foreground text-5xl font-sans">
            Built with Leading Web3 Ecosystems
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-border/60 bg-card flex items-center justify-center py-8 px-8 hover:shadow-md transition-shadow cursor-default w-[180px] h-[100px]"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-14 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
