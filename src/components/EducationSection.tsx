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
      <div className="space-y-3">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="degree-title">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </div>
              <div className="text-right">
                <p className="date-range">{edu.duration}</p>
                <p className="text-sm font-medium text-primary">{edu.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;