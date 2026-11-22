import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import EducationProcessBand from './components/EducationProcessBand';
import AboutSkillsSection from './components/AboutSkillsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ResumeSection from './components/ResumeSection';
import ThankYouFinale from './components/ThankYouFinale';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060606] text-[#F5F5F7]">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <EducationProcessBand />
        <AboutSkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ResumeSection />
      </main>
      <ThankYouFinale />
    </div>
  );
}
