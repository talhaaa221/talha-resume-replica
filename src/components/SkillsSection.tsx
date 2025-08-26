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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-secondary/40 p-4 rounded-lg border border-border/30">
            <h3 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wide">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, idx) => (
                <span 
                  key={idx} 
                  className="bg-background text-foreground px-2 py-1 rounded-md text-xs border border-border/50 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;