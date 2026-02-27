import { cn } from "@/lib/utils";

export interface TestimonialCard {
  image: string;
  name: string;
  handle: string;
  quote: string;
}

const Card = ({ card }: { card: TestimonialCard }) => (
  <div
    className={cn(
      "flex-shrink-0 w-72 md:w-80 rounded-2xl p-6",
      "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_-8px_hsla(309,36%,44%,0.2)]",
      "mx-3"
    )}
    style={{
      background: "hsla(0, 0%, 100%, 0.05)",
      backdropFilter: "blur(16px)",
      border: "1px solid hsla(0, 0%, 100%, 0.1)",
    }}
  >
    <div className="flex items-center gap-3 mb-4">
      <img
        src={card.image}
        alt={`${card.name}'s testimonial avatar`}
        loading="lazy"
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        style={{ border: "1px solid hsla(0, 0%, 100%, 0.15)" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            `https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=000000&color=fff&size=40`;
        }}
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold font-display truncate leading-tight" style={{ color: "hsl(220, 20%, 90%)" }}>
          {card.name}
        </p>
        <p className="text-xs truncate" style={{ color: "hsl(220, 15%, 55%)" }}>{card.handle}</p>
      </div>
    </div>
    <p className="text-sm leading-relaxed font-sans line-clamp-3" style={{ color: "hsl(220, 15%, 70%)" }}>
      {card.quote}
    </p>
  </div>
);

function MarqueeRow({
  data,
  reverse = false,
  speed = 35,
}: {
  data: TestimonialCard[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = [...data, ...data];
  return (
    <div className="overflow-hidden relative w-full">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{ background: "linear-gradient(to right, hsl(225, 50%, 6%), transparent)" }} />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{ background: "linear-gradient(to left, hsl(225, 50%, 6%), transparent)" }} />

      <div
        className="flex"
        style={{
          animation: `marqueeScroll${reverse ? "Rev" : ""} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeTestimonials({
  row1 = [],
  row2 = [],
}: {
  row1?: TestimonialCard[];
  row2?: TestimonialCard[];
}) {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeScrollRev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <div className="flex flex-col gap-5 w-full">
        <MarqueeRow data={row1} speed={35} />
        <MarqueeRow data={row2} reverse speed={42} />
      </div>
    </>
  );
}
