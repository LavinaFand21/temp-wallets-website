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
      "transition-all duration-300 hover:shadow-[0_8px_32px_-8px_rgba(160,76,150,0.18)] hover:-translate-y-1",
      "mx-3"
    )}
    style={{
      background: "hsla(0, 0%, 100%, 0.7)",
      backdropFilter: "blur(16px)",
      border: "1px solid hsla(296, 30%, 82%, 0.5)",
    }}
  >
    <div className="flex items-center gap-3 mb-4">
      <img
        src={card.image}
        alt={`${card.name}'s testimonial avatar`}
        loading="lazy"
        className="w-10 h-10 rounded-full object-cover border border-neutral-200 flex-shrink-0"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            `https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=000000&color=fff&size=40`;
        }}
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#000000] font-display truncate leading-tight">
          {card.name}
        </p>
        <p className="text-xs text-neutral-500 truncate">{card.handle}</p>
      </div>
    </div>
    <p className="text-sm text-neutral-700 leading-relaxed font-sans line-clamp-3">
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
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{ background: "linear-gradient(to right, #f3eef5, transparent)" }} />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{ background: "linear-gradient(to left, #f3eef5, transparent)" }} />

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
