import { Mail, Phone, Globe, Github, Linkedin, MapPin } from "lucide-react";

const ResumeHeader = () => {
  return (
    <header className="text-center mb-8 pb-6 border-b border-border">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4">TALHA ANSARI</h1>
      
      {/* Contact Information - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>Delhi, India</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span className="break-all">+91 9891541826</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span className="break-all text-xs sm:text-sm">talhaansari1606@gmail.com</span>
        </div>
      </div>
      
      {/* Social Links - Responsive */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
        <a href="#" className="flex items-center gap-2 text-accent hover:text-primary transition-colors px-2 py-1">
          <Globe className="w-4 h-4" />
          <span>Portfolio</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-accent hover:text-primary transition-colors px-2 py-1">
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-accent hover:text-primary transition-colors px-2 py-1">
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default ResumeHeader;