import { Section, SectionHeader } from "@/components/ui/section";
import { CardHover } from "@/components/ui/card-hover";
import { ScrollText, Award, FlaskConical } from "lucide-react";

const PUBLICATIONS = [
  {
    title: "Nitric-oxide Independent Signaling Through Bacterial Heme-Nitric Oxide or Oxygen Binding Proteins (H-NOX) in Caulobacter crescentus",
    journal: "Journal of Biological Chemistry",
    year: "2025",
    authors: "A Alatishe, C Lee-Lopez, MS Islam, MR Hasan, E Vukl",
    isFirstAuthor: true,
  },
  {
    title: "Oxidative Activation of the Heme Nitric Oxide/Oxygen-Binding Protein (H-NOX) from Caulobacter crescentus",
    journal: "Biochemistry",
    year: "2025",
    authors: "A Alatishe, T Albert, CC Lee-Lopez, R Hasan, P Moënne-Loccoz, ...",
    isFirstAuthor: true,
  },
  {
    title: "Unraveling Metabolic Reprogramming in Dhnox Paracoccus denitrificans: A Time-Resolved Metabolomics and AI-Powered Proteome Modeling Approach",
    journal: "Frontiers in Molecular Biosciences",
    year: "2025",
    authors: "MS Islam, A Alatishe, W Bahureksa, ET Yukl",
    isFirstAuthor: false,
  },
  {
    title: "H-NOX Influences Biofilm Formation, Central Metabolism, and Quorum Sensing in Paracoccus denitrificans",
    journal: "Journal of Proteome Research",
    year: "2024",
    authors: "MS Islam, A Alatishe, CC Lee-Lopez, F Serrano, ET Yukl",
    isFirstAuthor: false,
  },
  {
    title: "Abstract 1658 Proteome study unveils the regulation of metabolic pathways during the biofilm formation process in the Δhnox Paracoccus denitrificans",
    journal: "Journal of Biological Chemistry",
    year: "2024",
    authors: "A Alatishe, MS Islam, E Yukl",
    isFirstAuthor: true,
  },
  {
    title: "Kinetic Assay of cyclic di-GMP signaling in Paracoccus denitrificans",
    journal: "Journal of Biological Chemistry",
    year: "2023",
    authors: "A Alatishe, E Yukl",
    isFirstAuthor: true,
  },
  {
    title: "Cyclic di‐GMP Signaling in Paracoccus denitrificans",
    journal: "The FASEB Journal",
    year: "2022",
    authors: "A Alatishe, F Serrano, MS Islam, E Yukl",
    isFirstAuthor: true,
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
