const EducationSection = () => {
  const education = [
    {
      degree: "B.TECH (Computer Science)",
      institution: "Delhi Technological University, New Delhi",
      duration: "2023-2027",
      grade: "7.93 CGPA"
    },
    {
      degree: "CBSE (Class XII)",
      institution: "St. Columba's School, New Delhi", 
      duration: "2023",
      grade: "93.4 %"
    },
    {
      degree: "CBSE (Class X)",
      institution: "St. Columba's School, New Delhi",
      duration: "2021", 
      grade: "95.6 %"
    }
  ];

  return (
    <section className="mb-6">
      <h2 className="section-title">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="education-item bg-secondary/30 p-4 rounded-lg border border-border/50">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div className="flex-1">
                <h3 className="degree-title text-base font-semibold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </div>
              <div className="flex flex-row sm:flex-col sm:text-right gap-4 sm:gap-0">
                <p className="date-range text-sm font-medium">{edu.duration}</p>
                <p className="text-sm font-semibold text-primary">{edu.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;