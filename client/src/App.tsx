import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Research from "@/pages/Research";
import Advocacy from "@/pages/Advocacy";
import Life from "@/pages/Life";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  return (
    <motion.div
      key={location}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex-grow"
    >
      {children}
    </motion.div>
  );
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Switch>
            <Route path="/" component={() => <PageTransition><Home /></PageTransition>} />
            <Route path="/about" component={() => <PageTransition><About /></PageTransition>} />
            <Route path="/research" component={() => <PageTransition><Research /></PageTransition>} />
            <Route path="/advocacy" component={() => <PageTransition><Advocacy /></PageTransition>} />
            <Route path="/life" component={() => <PageTransition><Life /></PageTransition>} />
            <Route path="/gallery" component={() => <PageTransition><Gallery /></PageTransition>} />
            <Route path="/contact" component={() => <PageTransition><Contact /></PageTransition>} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
