import { ExternalLink, Github, Code, Database, Cloud, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Spider",
      description: "Building UI prototypes and small tools was time-consuming and repetitive. Spider makes it fast, fun, and interactive to spin up apps without friction.",
      implementation: "Built with Next.js, TailwindCSS, and AI integrations, Spider lets users generate, edit, and iterate on projects instantly. It focuses on a smooth developer experience, allowing rapid prototyping and sharing.",
      techStack: ["Next.js", "TailwindCSS", "AI Integration", "TypeScript"],
      links: { demo: "#", github: "#" },
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Repo Lens",
      description: "Understanding codebases is hard, and 60% of repos lack proper docs. Built Repo Lens to simplify navigation and automate documentation.",
      implementation: "Built with the T3 stack (Next.js, tRPC, TypeScript) using RAG for accurate answers with the relevant line of codes and automated README generation (80% less effort).",
      techStack: ["Next.js", "tRPC", "TypeScript", "RAG", "AI"],
      links: { demo: "#", github: "#" },
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Seven Burgers", 
      description: "Managing blog content and restaurant details manually was inefficient. Built Seven Burgers to simplify content management and improve user engagement.",
      implementation: "Built with React.js, Cloudflare Workers (serverless), and PostgreSQL. Only admin (test@gmail.com, pass: test) can perform CRUD on blogs via the navbar.",
      techStack: ["React.js", "Cloudflare Workers", "PostgreSQL", "Serverless"],
      links: { demo: "#", github: "#" },
      icon: <Database className="w-5 h-5" />
    }
  ];

  return (
    <section className="mb-6">
      <h2 className="section-title">Academic Projects</h2>
      <div className="space-y-5">
        {projects.map((project, index) => (
          <div key={index} className="project-item border border-border rounded-lg p-4 bg-card">
            {/* Project Header */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <span className="text-primary">{project.icon}</span>
                <h3 className="project-title text-lg">{project.title}</h3>
              </div>
              <div className="flex gap-3">
                <a 
                  href={project.links.demo} 
                  className="flex items-center gap-1 text-accent hover:text-primary transition-colors text-sm font-medium"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live</span>
                </a>
                <a 
                  href={project.links.github} 
                  className="flex items-center gap-1 text-accent hover:text-primary transition-colors text-sm font-medium"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded border"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <div>
                <span className="font-medium text-primary text-sm">Problem: </span>
                <span className="achievement-bullet">{project.description}</span>
              </div>
              <div>
                <span className="font-medium text-primary text-sm">Solution: </span>
                <span className="achievement-bullet">{project.implementation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;