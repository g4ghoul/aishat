import { Section, SectionHeader } from "@/components/ui/section";
import { useState } from "react";
import { cn } from "@/lib/utils";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80", category: "Professional", caption: "Lab work in progress" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", category: "Personal", caption: "Friends gathering" },
  { src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80", category: "Events", caption: "Speaking at Symposium" },
  { src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80", category: "Professional", caption: "Research Presentation" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80", category: "Personal", caption: "Weekend vibes" },
  { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80", category: "Events", caption: "Travel Diaries" },
];

const CATEGORIES = ["All", "Professional", "Personal", "Events"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" 
    ? IMAGES 
    : IMAGES.filter(img => img.category === filter);

  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionHeader 
          title="Gallery" 
          subtitle="Snapshots of my world—inside and outside the lab."
        />

        <div className="flex justify-center space-x-2 mb-12 flex-wrap gap-y-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                filter === cat
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={img.src} 
                alt={img.caption}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
