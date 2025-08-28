import React from 'react';
import { ExternalLink, MapPin, Calendar, Award, Users, Target, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Japanese Language Training Intern",
      company: "SRM University AP",
      location: "Amaravati, Andhra Pradesh",
      duration: "June 2024 - August 2024",
      type: "Remote Role",
      description: [
        "Completed intensive internship with a focus on Japanese grammar, Kanji, and conversation",
        "Underwent structured modules including reading, writing, listening, and speaking skills",
        "Developed cross-cultural communication abilities for Japanese industrial environments",
        "Achieved proficiency in technical Japanese terminology for engineering applications"
      ],
      achievements: [
        "Successfully completed structured Japanese language curriculum",
        "Gained cultural understanding for international collaboration",
        "Prepared for potential Japanese industrial partnerships"
      ],
      companyUrl: "https://srmap.edu.in/",
      technologies: ["Japanese Language", "Cross-cultural Communication", "Technical Translation"],
      impact: "Enhanced international collaboration capabilities for future engineering projects"
    },
    {
      title: "AI/ML Development Intern",
      company: "AI Innovations Pvt. Ltd.",
      location: "Amaravati, Andhra Pradesh",  
      duration: "May 2024 - July 2024",
      type: "Industry Internship",
      description: [
        "Developed and optimized machine learning models for predictive analytics",
        "Collaborated with cross-functional teams to implement AI solutions in real-world applications",
        "Gained hands-on experience with advanced ML algorithms and deployment strategies",
        "Contributed to research and development of innovative AI-driven products"
      ],
      achievements: [
        "Successfully deployed ML models achieving 15-20% improved accuracy",
        "Contributed to patent-worthy innovations in predictive modeling",
        "Enhanced team productivity through efficient algorithm implementations"
      ],
      companyUrl: "#",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Deep Learning", "Data Analytics"],
      impact: "Contributed to cutting-edge AI solutions with measurable performance improvements"
    }
  ];

  const hackathons = [
    {
      title: "Industry Ignite Hackathon Participant",
      organization: "SRM University in Collaboration with Electroni",
      location: "Amaravati, Andhra Pradesh",
      duration: "November 2024",
      type: "Competition",
      description: [
        "Developed a waste management solution using drone automation",
        "Received recognition for innovative approach to urban sustainability challenges",
        "Collaborated in interdisciplinary team environment under time constraints",
        "Demonstrated practical application of IoT and computer vision technologies"
      ],
      achievements: [
        "Successfully prototyped drone-based waste detection system",
        "Received recognition for innovation in sustainable urban solutions",
        "Demonstrated effective teamwork and rapid prototyping skills"
      ],
      technologies: ["Drone Technology", "Computer Vision", "IoT", "Waste Management", "OpenCV"],
      impact: "Showcased innovative approach to environmental challenges through technology"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry internships, academic collaborations, and competitive achievements demonstrating technical excellence and innovation
          </p>
        </div>

        {/* Professional Internships */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">Professional Internships</h3>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card p-6 hover-lift border-l-4 border-l-primary">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
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
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm mb-3">
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

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Key Responsibilities
                    </h5>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-primary mr-2 mt-2 text-xs">●</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="text-accent mr-2 mt-2 text-xs">★</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Impact & Outcome
                  </h5>
                  <p className="text-muted-foreground italic">{exp.impact}</p>
                </div>

                <div>
                  <h5 className="font-medium text-foreground mb-3">Technologies Used</h5>
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
              </div>
            ))}
          </div>
        </div>

        {/* Competitions & Hackathons */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">Competitions & Hackathons</h3>
          </div>
          <div className="space-y-8">
            {hackathons.map((hackathon, index) => (
              <div key={index} className="card p-6 hover-lift border-l-4 border-l-accent">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-foreground">{hackathon.title}</h4>
                      <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
                        {hackathon.type}
                      </span>
                    </div>
                    <div className="text-primary font-medium mb-2">{hackathon.organization}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {hackathon.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {hackathon.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Challenge & Approach
                    </h5>
                    <ul className="space-y-2 text-muted-foreground">
                      {hackathon.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-primary mr-2 mt-2 text-xs">●</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Results & Recognition
                    </h5>
                    <ul className="space-y-2 text-muted-foreground">
                      {hackathon.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="text-accent mr-2 mt-2 text-xs">★</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Impact & Learning
                  </h5>
                  <p className="text-muted-foreground italic">{hackathon.impact}</p>
                </div>

                <div>
                  <h5 className="font-medium text-foreground mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;