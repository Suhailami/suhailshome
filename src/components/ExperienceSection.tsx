import React from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "VLSI Design Intern",
      company: "Bharat Electronics Limited (BEL)",
      location: "Bangalore, India",
      duration: "June 2024 - July 2024",
      description: [
        "Designed and verified digital circuits using Verilog HDL",
        "Worked on FPGA implementation of digital signal processing algorithms",
        "Collaborated with senior engineers on ASIC design flow",
        "Gained hands-on experience with industry-standard EDA tools"
      ],
      companyUrl: "https://www.bel-india.in/",
      technologies: ["Verilog", "FPGA", "Xilinx Vivado", "Digital Design"]
    },
    {
      title: "Machine Learning Intern",
      company: "TechnoHacks EduTech",
      location: "Remote",
      duration: "July 2023 - August 2023",
      description: [
        "Developed machine learning models for predictive analytics",
        "Implemented computer vision algorithms for image classification",
        "Created data visualization dashboards using Python libraries",
        "Participated in team projects on AI-based solutions"
      ],
      companyUrl: "https://technohacks.co.in/",
      technologies: ["Python", "TensorFlow", "OpenCV", "Pandas", "Scikit-learn"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional internships and work experience in VLSI design and machine learning
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card p-6 hover-lift">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
                    >
                      {exp.company}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-2 mt-2 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;