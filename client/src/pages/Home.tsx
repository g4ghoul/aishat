import { Link } from "wouter";
import { ArrowRight, Microscope, Heart, Globe, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
              PhD Candidate & Researcher
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Aishat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                Alatishe
              </span>
              <span className="text-primary">.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg leading-relaxed font-light">
              Protein Scientist. PhD Candidate. <br className="hidden md:block" />
              Highlighting science, advocacy, and identity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button size="lg" className="rounded-full px-8 text-base">
                  About Me <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/research">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-base bg-background/50 backdrop-blur">
                  Research & Publications
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-white/50">
              {/* Placeholder for professional headshot */}
              <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center text-muted-foreground/30">
                {/* 
                  Unsplash image: Professional woman scientist or headshot 
                  Using a generic professional placeholder 
                */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                  alt="Aishat Alatishe" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Quote className="w-8 h-8 text-primary/40 mb-2" />
                <p className="font-serif italic text-foreground/80 text-lg">
                  "Science is not just about discovery, but about the people who discover it."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="bg-secondary/30">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Scientific Research</h3>
            <p className="text-muted-foreground leading-relaxed">
              Exploring protein structures and biochemistry to unlock new understandings in biological systems.
            </p>
          </div>

          <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Advocacy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Championing women in STEM, mental health awareness, and ethical leadership in academia.
            </p>
          </div>

          <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Identity & Culture</h3>
            <p className="text-muted-foreground leading-relaxed">
              Embracing my Nigerian roots and Muslim identity as integral parts of my professional journey.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether for research collaboration, speaking engagements, or just to say hello.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all">
              Get in Touch
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
