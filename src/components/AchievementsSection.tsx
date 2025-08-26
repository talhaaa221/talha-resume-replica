const AchievementsSection = () => {
  const achievements = [
    "Was in the top 3 percentile in JEE Main 2023 (out of 1.4 million+ students)",
    "Hackathon Award: \"Best Freshers Team\" award at Vihaan007, North India's Largest Student-Run Hackathon by IEEE DTU."
  ];

  return (
    <section className="mb-4">
      <h2 className="section-title">Achievements and Awards</h2>
      <div className="space-y-3">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-accent/10 border-l-4 border-l-primary p-4 rounded-r-lg">
            <p className="achievement-bullet text-sm leading-relaxed text-foreground">{achievement}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;