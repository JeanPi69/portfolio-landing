import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExplorationSection from "./components/ExplorationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExplorationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
