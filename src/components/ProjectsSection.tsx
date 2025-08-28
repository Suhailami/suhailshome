import React from 'react';
import { Github, ExternalLink, Download } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Image Restoration in Automotive Systems",
      description: "Developed a Real-Time Image Restoration Dashboard capable of processing deteriorated images, restoring them with improved clarity, and displaying live results with SSIM and PSNR metrics for quality evaluation. Achieved real-time performance enhancing automotive safety in adverse conditions.",
      technologies: ["Deep Learning", "CNN", "JavaScript", "HTML/CSS", "Jetson Nano", "Computer Vision"],
      githubUrl: "https://github.com/Suhailami/Real-Time-Image-Restoration",
      liveUrl: "#",
      downloadUrl: "#",
      category: "AI/ML",
      featured: true
    },
    {
      title: "Car Price Prediction using AI/ML (Patent Filed)",
      description: "Designed and implemented an AI/ML-based predictive model leveraging regression and feature engineering to estimate vehicle prices. Improved prediction accuracy by 15–20% compared to baseline methods and successfully filed for patent.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
      githubUrl: "https://github.com/Suhailami/Car-Price-Prediction",
      liveUrl: "#",
      downloadUrl: "#",
      category: "AI/ML",
      patent: true
    },
    {
      title: "Smart Irrigation System for Precision Farming",
      description: "Designed an IoT-based Smart Irrigation System that monitors soil moisture, weather data, and automates water delivery using embedded control. Enabled 20–30% water savings and improved crop health monitoring.",
      technologies: ["Arduino", "IoT Sensors", "Embedded Systems", "Figma", "Automation"],
      githubUrl: "https://github.com/Suhailami/Smart-Irrigation-System",
      liveUrl: "#",
      downloadUrl: "#",
      category: "IoT"
    },
    {
      title: "Medical Image Analysis using CNN (X-ray Defect Detection)",
      description: "Built a CNN-based deep learning model for automatic defect detection in X-ray images. Achieved high diagnostic accuracy, reducing manual analysis time by 40% and demonstrating potential for faster clinical decision support.",
      technologies: ["Deep Learning", "CNN", "Python", "TensorFlow", "Keras", "OpenCV"],
      githubUrl: "https://github.com/Suhailami/Medical-image-analysis-using-CNN",
      liveUrl: "#",
      downloadUrl: "#",
      category: "AI/ML"
    },
    {
      title: "Drone Automation for Waste Collection & Management",
      description: "Designed a drone-based system with automated waste detection, collection, and communication modules. Implemented image processing algorithms for waste identification and circuit design in KiCad for embedded drone automation.",
      technologies: ["Computer Vision", "OpenCV", "Drones", "Jetson Nano", "KiCad", "Embedded Systems"],
      githubUrl: "https://github.com/Suhailami/Drone-Waste-Management",
      liveUrl: "#",
      downloadUrl: "#",
      category: "IoT"
    },
    {
      title: "Stacked Autoencoder with L21-norm Regularization",
      description: "Implemented a robust stacked autoencoder with L21-norm loss and structural sparsity regularization for efficient feature extraction. Reduced computational complexity while improving robustness to noisy/outlier data.",
      technologies: ["Python", "Deep Learning", "TensorFlow", "Optimization", "Neural Networks"],
      githubUrl: "https://github.com/Suhailami/Stacked-Autoencoder-L21",
      liveUrl: "#",
      downloadUrl: "#",
      category: "AI/ML"
    },
    {
      title: "Antenna Design for 7.7 GHz Applications",
      description: "Designed a microstrip antenna on FR4 substrate using CST Microwave Studio with step-by-step IEEE-standard calculations. Achieved precise resonance at 7.7 GHz with strong potential for radar and communication systems.",
      technologies: ["CST Microwave Studio", "AutoCAD", "Electromagnetics", "VLSI", "RF Design"],
      githubUrl: "https://github.com/Suhailami/Antenna-Design-7.7GHz",
      liveUrl: "#",
      downloadUrl: "#",
      category: "VLSI"
    }
  ];

  const categories = ["All", "AI/ML", "IoT", "VLSI"];
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
            Innovative projects spanning AI/ML, IoT, and VLSI design with real-world impact and patent recognition
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
                  <div className="flex gap-2">
                    {project.patent && (
                      <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium">
                        Patent Filed
                      </span>
                    )}
                    {project.featured && (
                      <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
                        Featured
                      </span>
                    )}
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
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