import { Section, SectionHeader } from "@/components/ui/section";
import { Music, MapPin, Coffee } from "lucide-react";

export default function Life() {
  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionHeader 
          title="Life Beyond the Lab" 
          subtitle="Because I am more than just my data."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-pink-50 dark:bg-pink-950/20 p-8 rounded-2xl h-full border border-pink-100 dark:border-pink-900/50">
              <Music className="w-10 h-10 text-pink-500 mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Music & Dance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rhythm is my release. Whether it's Afrobeat playlists that keep me going during long experiments 
                or dance classes on the weekend, movement is how I recharge my spirit.
              </p>
            </div>
          </div>

          <div className="space-y-6">
             <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl h-full border border-orange-100 dark:border-orange-900/50">
              <MapPin className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Culture & Identity</h3>
              <p className="text-muted-foreground leading-relaxed">
                My Nigerian heritage is a vibrant tapestry that I wear proudly. From the food to the fashion, 
                staying connected to my roots gives me a sense of grounding no matter where science takes me.
              </p>
            </div>
          </div>

          <div className="space-y-6">
             <div className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-2xl h-full border border-blue-100 dark:border-blue-900/50">
              <Coffee className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Community & Joy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in aggressive joy. Finding laughter with friends, exploring new cafes, and building 
                a community where we can all be our authentic selves without apology.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Break */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80">
          {/* Unsplash: Joyful moments */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" alt="Friends" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
          <div className="rounded-2xl overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800&q=80" alt="Music" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-2xl overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" alt="Celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80" alt="Community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </Section>
    </div>
  );
}
