import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import all placeholder pages
import AboutPage from "./pages/AboutPage";
import StoryMission from "./pages/StoryMission";
import Leadership from "./pages/Leadership"; 
import Values from "./pages/Values";
import Services from "./pages/Services";
import FireproofingSolutions from "./pages/FireproofingSolutions";
import TaioTiPage from "./pages/TaioTiPage";
import TekIndexPage from "./pages/TekIndexPage";
import AviationDefense from "./pages/AviationDefense";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/story-mission" element={<StoryMission />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/values" element={<Values />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/fireproofing" element={<FireproofingSolutions />} />
          <Route path="/taioti" element={<TaioTiPage />} />
          <Route path="/tekindex" element={<TekIndexPage />} />
          <Route path="/aviation-defense" element={<AviationDefense />} />
          
          {/* Other Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
