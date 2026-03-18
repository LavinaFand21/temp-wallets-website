import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import rohitPhoto from "@/assets/team-rohit.png";
import karshPhoto from "@/assets/team-karsh.png";
import lavinaPhoto from "@/assets/team-lavina.png";

const TelegramIcon = () =>
<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>;


const XIcon = () =>
<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>;


const members = [
{
  name: "Rohit",
  role: "Founder",
  photo: rohitPhoto as string | null,
  telegram: "https://t.me/rohit",
  twitter: "https://x.com/rohit",
  placeholderBg: "linear-gradient(160deg, #6b2c78 0%, #a04c96 60%, #c9a0c8 100%)"
},
{
  name: "Karsh",
  role: "Founding Developer",
  photo: karshPhoto as string | null,
  telegram: "https://t.me/karsh",
  twitter: "https://x.com/karsh",
  placeholderBg: "linear-gradient(160deg, #4a3060 0%, #8b6aa0 60%, #c9bed1 100%)"
},
{
  name: "Lavina",
  role: "PR & Communications",
  photo: lavinaPhoto as string | null,
  telegram: "https://t.me/lavina",
  twitter: "https://x.com/lavina",
  placeholderBg: "linear-gradient(160deg, #41163a 0%, #7a3870 60%, #ab86aa 100%)"
},
{
  name: "Chinmey",
  role: "Developer",
  photo: null as string | null,
  telegram: "https://t.me/chinmey",
  twitter: "https://x.com/chinmey",
  placeholderBg: "linear-gradient(160deg, #1e3a5f 0%, #2d6a9f 60%, #7ab3d4 100%)"
}];


const SocialBtn = ({ href, label, children }: {href: string;label: string;children: React.ReactNode;}) =>
<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={label}
  onClick={(e) => e.stopPropagation()}
  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-125 flex-shrink-0"
  style={{
    background: "rgba(28, 14, 38, 0.72)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "rgba(255,255,255,0.9)"
  }}>
  
    {children}
  </a>;


const TeamCard = ({ member, index }: {member: typeof members[0];index: number;}) =>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="group w-full"
  style={{ aspectRatio: "4/5" }}>
  
    {/* Card: full photo fill, overlaid elements */}
    <div
    className="relative w-full h-full rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.03]"
    style={{
      boxShadow: "0 8px 40px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)",
      border: "1px solid rgba(171,134,170,0.3)"
    }}>
    
      {/* Photo / Placeholder fills entire card */}
      {member.photo ?
    <img
      src={member.photo}
      alt={member.name}
      className="absolute inset-0 w-full h-full object-cover object-top"
      loading="lazy" /> :


    <div
      className="absolute inset-0 w-full h-full flex items-center justify-center"
      style={{ background: member.placeholderBg }}>
      
          <span
        className="text-7xl font-bold select-none"
        style={{ color: "rgba(255,255,255,0.25)" }}>
        
            {member.name[0]}
          </span>
        </div>
    }

      {/* Dark gradient overlay at bottom for legibility */}
      <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "linear-gradient(to top, rgba(10,5,18,0.82) 0%, rgba(10,5,18,0.18) 45%, transparent 65%)"
      }} />
    

      {/* Top: social icons pinned to corners */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <SocialBtn href={member.telegram} label={`${member.name} on Telegram`}>
          <TelegramIcon />
        </SocialBtn>
        <SocialBtn href={member.twitter} label={`${member.name} on X`}>
          <XIcon />
        </SocialBtn>
      </div>

      {/* Bottom: name + role badges */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-2 flex-wrap">
        <span
        className="px-3 py-1.5 rounded-full text-sm font-bold leading-none"
        style={{
          background: "rgba(28,14,38,0.75)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.95)"
        }}>
        
          {member.name}
        </span>
        <span
        className="px-3 py-1.5 rounded-full text-sm font-medium leading-none"
        style={{
          background: "rgba(28,14,38,0.68)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.78)"
        }}>
        
          {member.role}
        </span>
      </div>
    </div>
  </motion.div>;


const TeamSection = () => {
  return (
    <section
      id="team"
      className="bg-background border-t border-border/40 py-12 sm:py-20 lg:py-[100px] px-4">
      
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-14 text-center">
          
          <h2 className="sm:text-[2.5rem] md:text-[3.5rem] font-bold text-foreground leading-[1.05] tracking-tight font-sans text-4xl">
            Our Team
          </h2>
          <p className="mt-3 text-base md:text-xl max-w-2xl leading-relaxed mx-auto text-secondary-foreground">
            The people building the future of Temporary Wallets
          </p>
        </motion.div>

        {/* Mobile: swipeable carousel */}
        <div className="block md:hidden">
          <Carousel
            opts={{ align: "start", loop: false, dragFree: true, watchDrag: true }}
            className="w-full select-none">
            
            <CarouselContent className="-ml-3 touch-pan-y py-2">
              {members.map((member, i) =>
              <CarouselItem key={member.name} className="pl-3 basis-[85%]">
                  <TeamCard member={member} index={i} />
                </CarouselItem>
              )}
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
          {members.map((member, i) =>
          <TeamCard key={member.name} member={member} index={i} />
          )}
        </div>
      </div>
    </section>);

};

export default TeamSection;