import { motion } from "framer-motion";
import MarqueeTestimonials from "@/components/ui/marquee-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const TESTIMONIALS = [
  {
    image: "https://pbs.twimg.com/profile_images/1981994725545590785/kBVyJpz_.png",
    name: "TempWallets.com",
    handle: "@tempwallets",
    quote: "TempWallets spotted!💛 Special mention at @Yellow Hackathon by @BizthonOfficial, the grind pays off! 🚀",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1981994725545590785/kBVyJpz_.png",
    name: "TempWallets.com",
    handle: "@tempwallets",
    quote: "What a ride at @BizthonOfficial x @Yellow! ⚡ Still buzzing from the surreal experience → intense builds to unforgettable moments.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/2011322711121993728/u4zqvP8f.jpg",
    name: "BizThon | Global Business Hackathon",
    handle: "@BizthonOfficial",
    quote: "🏅Special Prize ($500) – Tempwallet. And many more brilliant innovators making their mark in the Web3 space! 🌟",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1740263370681622528/lm6bRqlw.jpg",
    name: "Yellow",
    handle: "@Yellow",
    quote: "Hackathon Spotlight 🏆 @tempwallets is redefining onchain privacy with disposable, gasless wallets for high risk or anonymous transactions.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/2011322711121993728/u4zqvP8f.jpg",
    name: "BizThon | Global Business Hackathon",
    handle: "@BizthonOfficial",
    quote: "We loved hosting you! 💛 Thanks for being part of the BizThon x @Yellow journey, builders like you make this community so special.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1542037707936870402/EppnJxLE.jpg",
    name: "Techy",
    handle: "@Techy_Being",
    quote: "Big congrats on the win at the #Yellow Hackathon 2025! 🏆 Love seeing builders like you pushing the limits of innovation.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1957023734549598209/5NvRhKlR.jpg",
    name: "India Blockchain Month",
    handle: "@INBMOfficial",
    quote: "Big shoutout to you and the @tempwallets team. Glad to have you part of the #INBM25 journey.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1958094259258904577/-UoTbUmo.jpg",
    name: "tenz",
    handle: "@tenzshuraa",
    quote: "That's actually genius 🔥",
  },
  {
    image: "https://pbs.twimg.com/profile_images/2026211368643563520/qxNwSnXv.jpg",
    name: "Apple",
    handle: "@Applepennywise",
    quote: "Temp wallets are the future",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1958093183495323648/AtcMe0s_.jpg",
    name: "Andi",
    handle: "@Andilinh96",
    quote: "LOVE THIS CONCEPT FR!!",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1935256827299581952/TwGsLJJj.jpg",
    name: "HENRYSCOTT 🐢",
    handle: "@AjisafeEstherI1",
    quote: "This is a great disposable wallet for greater security in the way you interact with dapps, only possible thanks to the Yellow Network infrastructure.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1258542033922396160/TUXuzdQ7.jpg",
    name: "Loveanimal",
    handle: "@AmorAnimal2005",
    quote: "This is a great disposable wallet for greater security in the way you interact with dapps, only possible thanks to the Yellow Network infrastructure.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1983525341625982977/jqRsG44E.jpg",
    name: "M🔺𐤊",
    handle: "@0xMaragung",
    quote: "Privacy and simplicity combined in such an elegant solution.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/2011322711121993728/u4zqvP8f.jpg",
    name: "BizThon Hackathon Win",
    handle: "@BizthonOfficial",
    quote: "Special Prize $500 at Yellow Hackathon 2025 – Team celebrating with prizes at IIT Delhi event.",
  },
];

const headingWords = [
  { text: "Loved" },
  { text: "by" },
  { text: "the" },
  { text: "Community", className: "text-[hsl(309,36%,55%)]" },
];

const SocialProof = () => {
  return (
    <section
      className="section-padding section-divider overflow-hidden"
      style={{ background: "hsl(var(--hero))" }}
      aria-labelledby="social-proof-heading"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Typewriter heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-6"
        >
          <div id="social-proof-heading">
            <TypewriterEffect
              words={headingWords}
              className="font-display font-bold leading-tight tracking-[-0.02em]"
              cursorClassName="bg-[hsl(309,36%,55%)]"
            />
          </div>
        </motion.div>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-sans mb-16 max-w-2xl mx-auto"
          style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "hsl(var(--hero-muted))" }}
        >
          See what our early builders, hackathon partners, and community are saying.
        </motion.p>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MarqueeTestimonials
            row1={TESTIMONIALS.slice(0, 7)}
            row2={TESTIMONIALS.slice(7)}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://x.com/tempwallets"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the conversation about TempWallets on X (Twitter)"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full font-sans text-base transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{
              background: "hsl(var(--hero-foreground))",
              color: "hsl(var(--hero))",
            }}
          >
            Join the Conversation on X
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
