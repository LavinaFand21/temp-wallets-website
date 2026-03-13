import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Telegram icon SVG
const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

// X (Twitter) icon SVG
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const members = [
  {
    name: "Rohit",
    role: "Founder",
    photo: null,
    telegram: "https://t.me/rohit",
    twitter: "https://x.com/rohit",
    glassBg: "rgba(160, 76, 150, 0.13)",
    glassBorder: "rgba(160, 76, 150, 0.28)",
    hoverGlow: "rgba(160, 76, 150, 0.22)",
    accentColor: "#a04c96",
  },
  {
    name: "Karsh",
    role: "Founding Developer",
    photo: null,
    telegram: "https://t.me/karsh",
    twitter: "https://x.com/karsh",
    glassBg: "rgba(201, 190, 209, 0.13)",
    glassBorder: "rgba(171, 134, 170, 0.28)",
    hoverGlow: "rgba(201, 190, 209, 0.22)",
    accentColor: "#ab86aa",
  },
  {
    name: "Rahul",
    role: "Business Development",
    photo: null,
    telegram: "https://t.me/rahul",
    twitter: "https://x.com/rahul",
    glassBg: "rgba(104, 99, 121, 0.13)",
    glassBorder: "rgba(104, 99, 121, 0.28)",
    hoverGlow: "rgba(104, 99, 121, 0.22)",
    accentColor: "#686379",
  },
  {
    name: "Lavina",
    role: "PR & Communications",
    photo: null,
    telegram: "https://t.me/lavina",
    twitter: "https://x.com/lavina",
    glassBg: "rgba(65, 22, 58, 0.13)",
    glassBorder: "rgba(65, 22, 58, 0.32)",
    hoverGlow: "rgba(65, 22, 58, 0.22)",
    accentColor: "#c9bed1",
  },
];

const SocialButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
    style={{
      background: "rgba(30, 15, 40, 0.55)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.13)",
      color: "rgba(255,255,255,0.85)",
    }}
    onClick={(e) => e.stopPropagation()}
  >
    {children}
  </a>
);

const TeamCard = ({
  member,
  index,
}: {
  member: (typeof members)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group h-full p-2"
  >
    <CardContainer containerClassName="w-full h-full">
      <CardBody
        className="relative w-full rounded-3xl flex flex-col overflow-hidden transition-all duration-500 ease-out group-hover:scale-[1.03] h-full min-h-[320px] md:h-[380px]"
        style={{
          background: member.glassBg,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `1px solid ${member.glassBorder}`,
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${member.hoverGlow}, transparent 70%)`,
          }}
        />

        {/* Social icons row */}
        <CardItem translateZ={30} className="relative z-10 w-full">
          <div className="flex items-center justify-between px-4 pt-4">
            <SocialButton href={member.telegram} label={`${member.name} on Telegram`}>
              <TelegramIcon />
            </SocialButton>
            <SocialButton href={member.twitter} label={`${member.name} on X`}>
              <XIcon />
            </SocialButton>
          </div>
        </CardItem>

        {/* Photo area */}
        <CardItem translateZ={20} className="relative z-10 flex-1 w-full px-4 pt-2">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover object-top rounded-2xl"
              style={{ minHeight: 200, maxHeight: 240 }}
              loading="lazy"
            />
          ) : (
            <div
              className="w-full rounded-2xl flex items-center justify-center"
              style={{
                minHeight: 200,
                maxHeight: 240,
                height: 220,
                background: `linear-gradient(135deg, ${member.glassBorder}, ${member.hoverGlow} 80%)`,
                border: `1px solid ${member.glassBorder}`,
              }}
            >
              {/* Placeholder avatar */}
              <div className="flex flex-col items-center gap-2 opacity-40">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {member.name[0]}
                </div>
              </div>
            </div>
          )}
        </CardItem>

        {/* Name + Role badges */}
        <CardItem translateZ={25} className="relative z-10 w-full px-4 pb-5 pt-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="px-3 py-1.5 rounded-full text-sm font-bold"
              style={{
                background: "rgba(30,15,40,0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.13)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {member.name}
            </span>
            <span
              className="px-3 py-1.5 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(30,15,40,0.55)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {member.role}
            </span>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  </motion.div>
);

const TeamSection = () => {
  return (
    <section
      id="team"
      className="bg-background border-t border-border/40 py-12 sm:py-20 lg:py-[100px] px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-14 text-center"
        >
          <h2 className="sm:text-[2.5rem] md:text-[3.5rem] font-bold text-foreground leading-[1.05] tracking-tight font-sans text-4xl">
            Our Team
          </h2>
          <p className="mt-3 text-base md:text-xl max-w-2xl leading-relaxed mx-auto text-secondary-foreground">
            The people building the future of temporary wallets
          </p>
        </motion.div>

        {/* Mobile: swipeable carousel */}
        <div className="block md:hidden">
          <Carousel
            opts={{ align: "start", loop: false, dragFree: true, watchDrag: true }}
            className="w-full select-none"
          >
            <CarouselContent className="-ml-3 touch-pan-y py-2">
              {members.map((member, i) => (
                <CarouselItem key={member.name} className="pl-3 basis-[85%]">
                  <TeamCard member={member} index={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-3 mt-4">
              <CarouselPrevious className="relative static translate-y-0 left-auto top-auto w-9 h-9 rounded-full border border-border/60 bg-background/80 shadow-sm hover:bg-background">
                <ChevronLeft size={16} />
              </CarouselPrevious>
              <span className="text-xs text-muted-foreground opacity-60">Swipe to explore</span>
              <CarouselNext className="relative static translate-y-0 right-auto top-auto w-9 h-9 rounded-full border border-border/60 bg-background/80 shadow-sm hover:bg-background">
                <ChevronRight size={16} />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 py-2 px-1">
          {members.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
