import React from 'react';
import { ExternalLink, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electronics and Communication Engineering",
      institution: "Integral University",
      location: "Lucknow, India",
      duration: "2021 - 2025",
      cgpa: "8.5/10",
      description: "Specialized in VLSI design, digital signal processing, and communication systems. Active member of technical societies and participated in various competitions.",
      institutionUrl: "https://www.iul.ac.in/",
      highlights: [
        "Specialized in VLSI Design and Digital Systems",
        "Member of IEEE Student Branch",
        "Participated in multiple technical competitions",
        "Completed industry-relevant projects"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      field: "Science (PCM)",
      institution: "NARAYANA Junior college",
      location: "India",
      duration: "2019 - 2021",
      cgpa: "85%",
      description: "Completed intermediate education with focus on Physics, Chemistry, and Mathematics, laying strong foundation for engineering studies.",
      institutionUrl: "https://kvs.nic.in/",
      highlights: [
        "Strong foundation in Mathematics and Physics",
        "Active participation in science exhibitions",
        "Merit certificate in academics",
        "Leadership roles in student activities"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="card p-6 hover-lift">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-primary font-medium mb-2">
                    {edu.field}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
                    >
                      {edu.institution}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={16} />
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {edu.description}
              </p>

              <div className="space-y-2">
                <h5 className="font-medium text-foreground">Key Highlights:</h5>
                <ul className="grid md:grid-cols-2 gap-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2 mt-2 text-xs">●</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
