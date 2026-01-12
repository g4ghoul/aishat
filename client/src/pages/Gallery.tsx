import { Section, SectionHeader } from "@/components/ui/section";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const IMAGES = [
  { src: "/gallery/lab-1.jpg", category: "Professional", caption: "Lab work in progress" },
  { src: "/gallery/lab-2.jpg", category: "Professional", caption: "Biochemical analysis" },
  { src: "/gallery/lab-3.jpg", category: "Professional", caption: "Research facility" },
  { src: "/gallery/lab-4.jpg", category: "Professional", caption: "Protein experimentation" },
  { src: "/gallery/personal-1.jpg", category: "Personal", caption: "Personal moments" },
  { src: "/gallery/personal-2.jpg", category: "Personal", caption: "Exploring nature" },
  { src: "/gallery/personal-3.jpg", category: "Personal", caption: "Memorable experiences" },
  { src: "/gallery/events-1.jpg", category: "Events", caption: "Speaking engagements" },
  { src: "/gallery/events-2.jpg", category: "Events", caption: "Professional gatherings" },
];

const CATEGORIES = ["All", "Professional", "Personal", "Events"];

export default function Gallery() {
  useEffect(() => {
    document.title = "Dr. Aishat | Gallery";
  }, []);

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
