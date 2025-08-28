import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C/C++", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "MATLAB", level: 90 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "AI/ML & Deep Learning",
      skills: [
        { name: "CNNs & Autoencoders", level: 95 },
        { name: "TensorFlow/Keras", level: 90 },
        { name: "OpenCV", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "Transfer Learning", level: 85 },
        { name: "Computer Vision", level: 90 }
      ]
    },
    {
      title: "Embedded Systems & IoT",
      skills: [
        { name: "ARM Cortex-M", level: 85 },
        { name: "Arduino", level: 90 },
        { name: "Jetson Nano", level: 85 },
        { name: "IoT Automation", level: 90 },
        { name: "GPIO/PWM/ADC", level: 85 },
        { name: "Serial Communication", level: 80 }
      ]
    },
    {
      title: "VLSI & Hardware Design",
      skills: [
        { name: "CMOS/VLSI Design", level: 85 },
        { name: "Cadence Tools", level: 80 },
        { name: "Xilinx Vivado", level: 85 },
        { name: "CST Microwave Studio", level: 85 },
        { name: "RTL/FPGA/ASIC", level: 80 },
        { name: "Antenna Design", level: 85 }
      ]
    },
    {
      title: "Design & Simulation Tools",
      skills: [
        { name: "Figma", level: 85 },
        { name: "KiCad", level: 80 },
        { name: "AutoCAD", level: 75 },
        { name: "GitHub", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "React/Tailwind", level: 80 }
      ]
    },
    {
      title: "Specialized Skills",
      skills: [
        { name: "Patent Filing", level: 95 },
        { name: "Japanese Language", level: 70 },
        { name: "Research Writing", level: 90 },
        { name: "Technical Presentation", level: 85 },
        { name: "Cross-disciplinary AI", level: 90 },
        { name: "Problem Solving", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;