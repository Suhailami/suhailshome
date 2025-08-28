import React from 'react';
import { Code, Brain, Cpu, Cog, Palette, Star } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", expertise: "Expert", description: "NumPy, Pandas, Scikit-learn, TensorFlow, Keras, OpenCV, Matplotlib" },
        { name: "C/C++", expertise: "Advanced", description: "System programming, embedded development, performance optimization" },
        { name: "Java", expertise: "Advanced", description: "Object-oriented programming, enterprise applications" },
        { name: "JavaScript", expertise: "Intermediate", description: "Web development, React, modern ES6+ features" },
        { name: "MATLAB", expertise: "Expert", description: "Control systems, signal processing, mathematical modeling" },
        { name: "HTML/CSS", expertise: "Advanced", description: "Modern web standards, responsive design, Tailwind CSS" }
      ]
    },
    {
      title: "AI/ML & Deep Learning",
      icon: Brain,
      skills: [
        { name: "CNNs & Autoencoders", expertise: "Expert", description: "Image restoration, feature extraction, computer vision" },
        { name: "TensorFlow/Keras", expertise: "Expert", description: "Deep learning model development and deployment" },
        { name: "OpenCV", expertise: "Expert", description: "Computer vision, image processing, real-time applications" },
        { name: "Scikit-learn", expertise: "Advanced", description: "Machine learning algorithms, data preprocessing" },
        { name: "Transfer Learning", expertise: "Advanced", description: "Pre-trained models, domain adaptation" },
        { name: "Optimization", expertise: "Advanced", description: "L21-norm, structural sparsity, regularization techniques" }
      ]
    },
    {
      title: "Embedded Systems & IoT",
      icon: Cpu,
      skills: [
        { name: "ARM Cortex-M", expertise: "Advanced", description: "Microcontroller programming, real-time systems" },
        { name: "Arduino", expertise: "Expert", description: "IoT prototyping, sensor integration, automation" },
        { name: "Jetson Nano", expertise: "Advanced", description: "Edge AI, computer vision, embedded deep learning" },
        { name: "IoT Automation", expertise: "Expert", description: "Smart systems, precision farming, drone control" },
        { name: "GPIO/PWM/ADC", expertise: "Advanced", description: "Hardware interfacing, signal processing" },
        { name: "Serial Communication", expertise: "Intermediate", description: "UART, SPI, I2C protocols" }
      ]
    },
    {
      title: "VLSI & Hardware Design",
      icon: Cog,
      skills: [
        { name: "CMOS/VLSI Design", expertise: "Advanced", description: "Digital circuit design, RTL development" },
        { name: "Cadence Tools", expertise: "Intermediate", description: "Layout design, verification, simulation" },
        { name: "Xilinx Vivado", expertise: "Advanced", description: "FPGA development, synthesis, implementation" },
        { name: "CST Microwave Studio", expertise: "Advanced", description: "Antenna design, electromagnetic simulation" },
        { name: "RTL/FPGA/ASIC", expertise: "Intermediate", description: "Hardware description languages, design flow" },
        { name: "Antenna Design", expertise: "Advanced", description: "Microstrip antennas, high-frequency applications" }
      ]
    },
    {
      title: "Design & Development Tools",
      icon: Palette,
      skills: [
        { name: "Figma", expertise: "Advanced", description: "UI/UX design, prototyping, collaborative design" },
        { name: "KiCad", expertise: "Intermediate", description: "PCB design, schematic capture, circuit layout" },
        { name: "AutoCAD", expertise: "Intermediate", description: "Technical drawing, engineering documentation" },
        { name: "GitHub", expertise: "Expert", description: "Version control, collaboration, CI/CD workflows" },
        { name: "MongoDB", expertise: "Intermediate", description: "NoSQL databases, document storage" },
        { name: "React/Tailwind", expertise: "Intermediate", description: "Modern web development, responsive design" }
      ]
    },
    {
      title: "Specialized Skills",
      icon: Star,
      skills: [
        { name: "Patent Filing", expertise: "Expert", description: "Innovation documentation, intellectual property" },
        { name: "Japanese Language", expertise: "Intermediate", description: "Business communication, technical translation" },
        { name: "Research Writing", expertise: "Expert", description: "Technical documentation, academic publications" },
        { name: "Technical Presentation", expertise: "Advanced", description: "Complex concept communication, stakeholder engagement" },
        { name: "Cross-disciplinary AI", expertise: "Expert", description: "AI applications in hardware, automotive, medical domains" },
        { name: "Problem Solving", expertise: "Expert", description: "Complex system analysis, innovative solution development" }
      ]
    }
  ];

  const getExpertiseColor = (expertise) => {
    switch (expertise) {
      case 'Expert': return 'bg-primary text-primary-foreground';
      case 'Advanced': return 'bg-accent text-accent-foreground';
      case 'Intermediate': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills spanning AI/ML, embedded systems, VLSI design, and cross-disciplinary innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="card p-6 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getExpertiseColor(skill.expertise)}`}>
                          {skill.expertise}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;