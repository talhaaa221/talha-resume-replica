import ResumeHeader from "@/components/ResumeHeader";
import EducationSection from "@/components/EducationSection"; 
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-muted py-8">
        <div className="resume-container">
          <ResumeHeader />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
        </div>
      </div>
    </>
  );
};

export default Index;
