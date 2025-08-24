import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "VLSI & Hardware Design",
      skills: [
        { name: "Verilog/SystemVerilog", level: 90 },
        { name: "VHDL", level: 85 },
        { name: "Cadence Tools", level: 80 },
        { name: "Xilinx Vivado", level: 85 },
        { name: "ModelSim", level: 80 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "MATLAB", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "TensorFlow/Keras", level: 75 },
        { name: "Computer Vision", level: 70 },
        { name: "Data Analysis", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Linux", level: 80 },
        { name: "Docker", level: 70 },
        { name: "PCB Design", level: 75 },
        { name: "Embedded Systems", level: 80 }
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