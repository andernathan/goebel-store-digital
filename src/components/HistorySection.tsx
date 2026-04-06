import { MapPin, Clock, Building } from "lucide-react";

const HistorySection = () => {
  return (
    <section id="history" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary font-sans text-sm tracking-[0.25em] uppercase mb-3">
            The Story
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            A Living Landmark
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Nestled in the quiet countryside of Winchester, Texas, the Goebel Store stands as a
              remarkable testament to the region's frontier heritage. Once the heart of a small
              community, this general store served as a gathering place where neighbors traded
              goods, shared news, and built the bonds that defined rural Texas life.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Today, the store has been carefully preserved — its wooden shelves still lined with
              period goods, vintage signage, and artifacts that transport visitors back to a
              simpler time. Every corner tells a story.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { icon: Building, title: "Historic General Store", desc: "Original fixtures and period merchandise preserved in place." },
              { icon: MapPin, title: "Winchester, Texas", desc: "Located in the scenic countryside of Fayette County." },
              { icon: Clock, title: "Frozen in Time", desc: "Step inside and experience Texas history firsthand." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
