const ExperienceSection = () => {
  const experiences = [
    {
      position: "Tech Lead",
      company: "Distance Connect",
      duration: "Oct'24-April'25",
      achievements: [
        "Spearheaded development of an AI-powered ed-tech platform from the ground up using the T3 Stack (Next.js, TypeScript, tRPC, Prisma).",
        "Scaled platform to support 500+ monthly active users, improving build speed by 30% and maintaining 99.9% uptime on GCP.",
        "Integrated Google Calendar API for session scheduling and real-time WebSocket-based chat, improving session attendance by 40%",
        "Led a cross-functional team to implement CI/CD pipelines, automated deployments, and feature delivery."
      ]
    },
    {
      position: "AI Engineer Intern", 
      company: "NeoCfo",
      duration: "May'25-July'25",
      achievements: [
        "Built AI agents to automate bank and GST reconciliation, reducing manual effort by over 60%.",
        "Engineered real-time dashboard with data visualizations from accounting platforms (Zoho, Tally), using React + FastAPI.",
        "Developed an intelligent chatbot using CrewAI, LangGraph, and Langchain that queries financial books and generates graphs based on user prompts.",
        "Integrated backend services using NestJS, enabling seamless data flow between AI engine and React frontend."
      ]
    }
  ];

  return (
    <section className="mb-6">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item bg-card border border-border rounded-lg p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div className="flex-1">
                <h3 className="position-title text-base font-semibold text-primary mb-1">{exp.position}</h3>
                <p className="company-title font-medium text-foreground">{exp.company}</p>
              </div>
              <p className="date-range bg-secondary px-3 py-1 rounded-md text-sm font-medium self-start">{exp.duration}</p>
            </div>
            <ul className="space-y-2 pl-2">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="achievement-bullet flex items-start gap-3">
                  <span className="text-primary font-bold mt-1 text-sm">•</span>
                  <span className="text-sm leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;