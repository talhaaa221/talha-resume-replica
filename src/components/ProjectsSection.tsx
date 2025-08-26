import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Spider",
      description: "Why? Building UI prototypes and small tools was time-consuming and repetitive. Spider makes it fast, fun, and interactive to spin up apps without friction.",
      implementation: "How? Built with Next.js, TailwindCSS, and AI integrations, Spider lets users generate, edit, and iterate on projects instantly. It focuses on a smooth developer experience, allowing rapid prototyping and sharing.",
      links: { demo: "#", github: "#" }
    },
    {
      title: "Repo Lens",
      description: "Why? Understanding codebases is hard, and 60% of repos lack proper docs. Built Repo Lens to simplify navigation and automate documentation.",
      implementation: "How? Built with the T3 stack (Nextjs, tRPC, Typescript) using RAG for accurate answers with the relevant line of codes and automated README generation (80% less effort).",
      links: { demo: "#", github: "#" }
    },
    {
      title: "Seven Burgers", 
      description: "Why? Managing blog content and restaurant details manually was inefficient. Built Seven Burgers to simplify content management and improve user engagement.",
      implementation: "How? Built with React.js, Cloudflare Workers (serverless), and PostgreSQL. Only admin (test@gmail.com, pass: test) can perform CRUD on blogs via the navbar.",
      links: { demo: "#", github: "#" }
    }
  ];

  return (
    <section className="mb-6">
      <h2 className="section-title">Academic Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="flex justify-between items-start mb-2">
              <h3 className="project-title">{project.title}</h3>
              <div className="flex gap-2">
                <a href={project.links.demo} className="text-accent hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href={project.links.github} className="text-accent hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="achievement-bullet mb-1">{project.description}</p>
            <p className="achievement-bullet">{project.implementation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;