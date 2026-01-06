import { Link } from "wouter";
import { Linkedin, Twitter, GraduationCap, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-24">
      <div className="container max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Aishat Alatishe<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Protein Scientist, PhD Candidate, and Advocate dedicated to bridging the gap between rigorous scientific inquiry and social impact.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="/research" className="hover:text-primary transition-colors">Research</Link></li>
              <li><Link href="/advocacy" className="hover:text-primary transition-colors">Advocacy</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                <GraduationCap className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aishat Alatishe. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
