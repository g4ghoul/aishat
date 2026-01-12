import { Section, SectionHeader } from "@/components/ui/section";
import { CardHover } from "@/components/ui/card-hover";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "Dr. Aishat | About";
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionHeader 
          title="About Me" 
          subtitle="My journey from curious student to Protein Scientist."
        />
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="prose prose-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3">
              My academic journey has been defined by a relentless curiosity about the molecular machinery of life. 
              Growing up with strong Nigerian roots, I learned early on the value of resilience and community—values 
              that have anchored me as I navigate the rigorous world of protein science.
            </p>
            <p className="mb-6">
              As a PhD candidate, I specialize in biochemistry, where I spend my days (and often nights) in the lab, 
              deciphering protein structures. But science doesn't happen in a vacuum. I am an unapologetic feminist 
              who believes that the liberation and empowerment of women are central to progress—both in the lab 
              and in the world. My identity as a Muslim woman in STEM profoundly shapes my perspective, driving 
              me to advocate for more inclusive and ethical scientific spaces where women's rights are never up for debate.
            </p>
            <p>
              I believe that true growth happens at the intersection of discipline and joy. While I am deeply committed 
              to my research, I am equally passionate about mentorship, advocacy, and finding beauty in the everyday—whether 
              that's through music, culture, or connecting with others.
            </p>
          </motion.div>

          <div className="grid gap-6">
            <CardHover>
              <h3 className="font-serif text-xl font-bold mb-2">Education</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-1 h-full min-h-[40px] bg-primary/20 rounded-full" />
                  <div>
                    <p className="font-bold text-foreground">Ph.D. Candidate in Biochemistry</p>
                    <p className="text-sm text-muted-foreground">New Mexico State University • Expected 2025</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-full min-h-[40px] bg-primary/20 rounded-full" />
                  <div>
                    <p className="font-bold text-foreground">B.S. in Biological Sciences</p>
                    <p className="text-sm text-muted-foreground">Previous University • 2020</p>
                  </div>
                </li>
              </ul>
            </CardHover>

            <CardHover>
              <h3 className="font-serif text-xl font-bold mb-2">Core Values</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Resilience", "Curiosity", "Integrity", "Community", "Equity"].map((val) => (
                  <span key={val} className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground font-medium">
                    {val}
                  </span>
                ))}
              </div>
            </CardHover>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              {/* Unsplash image: Abstract DNA or Protein structure */}
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80" 
                alt="Lab work" 
                className="rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-3xl font-bold mb-6">Balancing the Equation</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Science demands precision, but life demands flexibility. My growth story is one of finding confidence 
                not just in my data, but in my voice. Whether I'm presenting at a conference or mentoring a junior 
                student, I bring my whole self to the table.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
