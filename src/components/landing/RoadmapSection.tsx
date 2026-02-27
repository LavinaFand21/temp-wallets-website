import { motion } from "framer-motion";

const columns = [
{
  label: "NOW",
  items: ["Yellow integration", "Lightning Node Module", "Multi-chain expansion"]
},
{
  label: "NEXT",
  items: ["User profiles & settings", "Address book", "Android app"]
},
{
  label: "LATER",
  items: ["Telegram Mini App", "Tip Gas Tank feature", "Analytics & dashboard upgrades"]
}];


const RoadmapSection = () => {
  return (
    <section id="roadmap" className="section-padding bg-background section-divider">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">

          <h2 className="font-bold text-foreground font-sans text-7xl">
            Roadmap
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, i) =>
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-border/60 bg-card p-8">

              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-foreground text-background mb-5">
                {col.label}
              </div>
              <ul className="space-y-3">
                {col.items.map((item) =>
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground">

                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {item}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default RoadmapSection;