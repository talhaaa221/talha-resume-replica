import { Mail, Phone, Globe, Github, Linkedin, MapPin } from "lucide-react";

const ResumeHeader = () => {
  return (
    <header className="text-center mb-8 pb-6 border-b border-border">
      <h1 className="text-3xl font-bold text-primary mb-2">TALHA ANSARI</h1>
      
      <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground mb-3">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>Delhi, India</span>
        </div>
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          <span>+91 9891541826</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail className="w-4 h-4" />
          <span>talhaansari1606@gmail.com</span>
        </div>
      </div>
      
      <div className="flex justify-center gap-6 text-sm">
        <a href="#" className="flex items-center gap-1 text-accent hover:text-primary transition-colors">
          <Globe className="w-4 h-4" />
          <span>Portfolio</span>
        </a>
        <a href="#" className="flex items-center gap-1 text-accent hover:text-primary transition-colors">
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <a href="#" className="flex items-center gap-1 text-accent hover:text-primary transition-colors">
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default ResumeHeader;