import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import RewindsSection from "@/components/sections/RewindsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: About (Credibility Badges, Bio, Skills, Education, Experience Timeline, Motto Marquee) */}
      <AboutSection />

      {/* Section 3: Projects (Filter Tabs, Project Grid, Detail Modals) */}
      <ProjectsSection />

      {/* Section 4: Certifications */}
      <CertificationsSection />

      {/* Section 5: Rewinds (Year in Review Timeline) */}
      <RewindsSection />

      {/* Section 6: Contact */}
      <ContactSection />
    </div>
  );
}
