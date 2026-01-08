import { Section, SectionHeader } from "@/components/ui/section";
import { Users, Scale, HeartHandshake, Mic } from "lucide-react";

export default function Advocacy() {
  const topics = [
    {
      icon: Users,
      title: "Graduate Student Advocacy",
      desc: "Fighting for better stipends, clearer mentorship guidelines, and a supportive research environment for all grad students."
    },
    {
      icon: Scale,
      title: "Unapologetic Feminism",
      desc: "An unwavering advocate for women's rights and liberation. I believe in standing for women at any given place or time, working to dismantle systemic barriers and creating mentorship pipelines for young women entering scientific fields."
    },
    {
      icon: HeartHandshake,
      title: "Mental Health Awareness",
      desc: "Destigmatizing mental health conversations in academia and promoting a culture where well-being is prioritized alongside productivity."
    },
    {
      icon: Mic,
      title: "Ethical Leadership",
      desc: "Promoting integrity and transparency in scientific research and academic governance."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionHeader 
          title="Advocacy & Leadership" 
          subtitle="Science doesn't exist in a vacuum. I believe in using my voice to create a more equitable academic world."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {topics.map((topic, idx) => (
            <div key={idx} className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 group">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-foreground mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <topic.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{topic.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">"Feminism is the radical notion that women are human beings."</h3>
            <p className="text-muted-foreground text-lg mb-8">
              My advocacy is rooted in the belief that equality is not a request—it is a requirement. 
              Whether serving on the student senate or mentoring undergraduates, I prioritize the 
              advancement and protection of women's rights in every space I occupy.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
