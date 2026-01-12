import { Section, SectionHeader } from "@/components/ui/section";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { type ContactMessageInput } from "@shared/routes";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";
import { CardHover } from "@/components/ui/card-hover";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Dr. Aishat | Contact";
  }, []);

  const { mutate, isPending } = useCreateContactMessage();
  
  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactMessageInput) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionHeader 
          title="Get in Touch" 
          subtitle="I'm always open to discussing new research ideas, speaking opportunities, or advocacy initiatives."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <CardHover className="border-t-4 border-t-primary">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="h-12 bg-secondary/30" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="h-12 bg-secondary/30" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Collaboration Inquiry" {...field} className="h-12 bg-secondary/30" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we work together?" 
                          className="min-h-[150px] resize-none bg-secondary/30" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardHover>

          <div className="space-y-8 lg:pl-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Other ways to connect</h3>
              <p className="text-muted-foreground mb-6">
                Prefer social media? You can find me sharing my research journey and advocacy work on these platforms.
              </p>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary transition-colors group">
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center mr-4 group-hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">X (Twitter)</h4>
                    <span className="text-sm text-muted-foreground">@AishatAlatishe</span>
                  </div>
                </a>

                <a href="#" className="flex items-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary transition-colors group">
                   <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center mr-4 group-hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">LinkedIn</h4>
                    <span className="text-sm text-muted-foreground">/in/aishat-alatishe</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-bold mb-2">Office Hours</h4>
              <p className="text-sm text-muted-foreground">
                For current students, please check the department calendar for my office hours or email me to schedule an appointment.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
