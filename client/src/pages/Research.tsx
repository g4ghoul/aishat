import { Section, SectionHeader } from "@/components/ui/section";
import { CardHover } from "@/components/ui/card-hover";
import { ScrollText, Award, FlaskConical } from "lucide-react";

const PUBLICATIONS = [
  {
    title: "Structural insights into novel protein folding mechanisms in extreme environments",
    journal: "Journal of Biological Chemistry",
    year: "2025",
    authors: "Alatishe, A., et al.",
    isFirstAuthor: true,
  },
  {
    title: "Comparative analysis of enzymatic activity under stress conditions",
    journal: "Biochemistry Reports",
    year: "2025",
    authors: "Smith, J., Alatishe, A., et al.",
    isFirstAuthor: false,
  },
  {
    title: "Review of emerging techniques in protein crystallography",
    journal: "Annual Review of Biochemistry",
    year: "2023",
    authors: "Doe, R., Alatishe, A.",
    isFirstAuthor: false,
  }
];

export default function Research() {
  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionHeader 
          title="Research & Publications" 
          subtitle="Exploring the building blocks of life through biochemistry."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="prose prose-lg text-muted-foreground">
              <p className="lead text-2xl text-foreground font-serif">
                As a Protein Scientist, my work focuses on understanding the relationship between structure and function.
              </p>
              <p>
                My current research investigates specific protein pathways that have implications for drug discovery 
                and therapeutic interventions. Using advanced techniques in crystallography and spectroscopy, 
                I aim to map out these molecular interactions with high precision.
              </p>
            </div>
          </div>
          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-lg">Interests</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Protein Crystallography</li>
              <li>• Structural Biochemistry</li>
              <li>• Drug Discovery Targets</li>
              <li>• Enzymatic Kinetics</li>
            </ul>
          </div>
        </div>

        <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3">
          <ScrollText className="w-6 h-6 text-primary" />
          Selected Publications
        </h3>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub, index) => (
            <CardHover key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-bold text-primary">{pub.year}</span>
                  <span className="text-sm text-muted-foreground px-2 py-0.5 bg-secondary rounded-md font-medium">{pub.journal}</span>
                  {pub.isFirstAuthor && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">First Author</span>
                  )}
                </div>
                <h4 className="text-xl font-bold mb-2">{pub.title}</h4>
                <p className="text-muted-foreground italic">{pub.authors}</p>
              </div>
            </CardHover>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <CardHover>
              <h4 className="font-bold text-lg mb-2">Graduate Student Senator</h4>
              <p className="text-muted-foreground">Re-elected for a second term representing the Biochemistry department.</p>
            </CardHover>
            <CardHover>
              <h4 className="font-bold text-lg mb-2">Research Excellence Award</h4>
              <p className="text-muted-foreground">Awarded for outstanding contribution to the department's annual symposium.</p>
            </CardHover>
          </div>
        </div>
      </Section>
    </div>
  );
}
