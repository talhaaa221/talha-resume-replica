const SkillsSection = () => {
  const skills = {
    "Languages": ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    "Frameworks": ["TailwindCSS", "React.js", "Recoil.js", "Redux Toolkit", "Next.js", "Node.js", "Express.js", "Prisma", "RESTapi"],
    "Databases": ["MongoDB", "MySQL", "PostgreSQL"],
    "Cloud Services": ["AWS", "Vercel", "Netlify"],
    "Animations": ["GSAP"],
    "Tools": ["Git", "GitHub"]
  };

  return (
    <section className="mb-6">
      <h2 className="section-title">Technical Skills</h2>
      <div className="space-y-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-wrap">
            <span className="font-medium text-primary w-32 flex-shrink-0">{category}:</span>
            <span className="text-sm text-foreground">{items.join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;