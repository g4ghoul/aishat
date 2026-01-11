import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";

export default App;
