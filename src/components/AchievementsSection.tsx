const AchievementsSection = () => {
  const achievements = [
    "Was in the top 3 percentile in JEE Main 2023 (out of 1.4 million+ students)",
    "Hackathon Award: \"Best Freshers Team\" award at Vihaan007, North India's Largest Student-Run Hackathon by IEEE DTU."
  ];

  return (
    <section className="mb-4">
      <h2 className="section-title">Achievements and Awards</h2>
      <ul className="space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-bullet flex">
            <span className="text-primary mr-2">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AchievementsSection;