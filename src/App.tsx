import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ToolsSection } from './components/tools/ToolsSection';
import { Process } from './components/Process';
import { AdditionalDetails } from './components/AdditionalDetails';
import { FinalCTA, Footer } from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <ToolsSection />
        <Process />
        <AdditionalDetails />
        <FinalCTA />
      </main>
    </div>
  );
}
