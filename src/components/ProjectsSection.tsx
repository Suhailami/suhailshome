import React from 'react';
import { Github, ExternalLink, Download } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sign Language Recognition System",
      description: "Developed a real-time sign language recognition system using computer vision and machine learning techniques. The system can accurately identify and translate sign language gestures into text.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Machine Learning", "Computer Vision"],
      githubUrl: "https://github.com/suhail3535/sign-language-recognition",
      liveUrl: "#",
      downloadUrl: "#",
      category: "AI/ML"
    },
    {
      title: "VLSI Processor Design",
      description: "Designed and implemented a 32-bit RISC processor using Verilog HDL. The design includes complete instruction set architecture, pipeline implementation, and comprehensive verification.",
      technologies: ["Verilog", "VLSI Design", "Digital Logic", "FPGA", "SystemVerilog"],
      githubUrl: "https://github.com/suhail3535/risc-processor",
      liveUrl: "#",
      downloadUrl: "#",
      category: "VLSI"
    },
    {
      title: "Smart Traffic Management System",
      description: "IoT-based traffic management system using machine learning algorithms to optimize traffic flow. Includes real-time monitoring and adaptive signal control.",
      technologies: ["IoT", "Python", "Machine Learning", "Arduino", "Sensors"],
      githubUrl: "https://github.com/suhail3535/smart-traffic",
      liveUrl: "#",
      downloadUrl: "#",
      category: "IoT"
    },
    {
      title: "Digital Signal Processing Filter",
      description: "Implementation of various digital filters (FIR, IIR) in both software (MATLAB/Python) and hardware (Verilog). Includes performance analysis and optimization.",
      technologies: ["MATLAB", "Python", "Verilog", "DSP", "Signal Processing"],
      githubUrl: "https://github.com/suhail3535/dsp-filters",
      liveUrl: "#",
      downloadUrl: "#",
      category: "DSP"
    }
  ];

  const categories = ["All", "VLSI", "AI/ML", "IoT", "DSP"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning VLSI design, AI/ML, IoT, and digital signal processing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card p-6 hover-lift group">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  aria-label="View source code"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
                {project.downloadUrl !== "#" && (
                  <a
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/80 transition-colors"
                    aria-label="Download project files"
                  >
                    <Download size={16} />
                    Files
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;