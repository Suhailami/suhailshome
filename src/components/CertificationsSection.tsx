import React from 'react';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "TATA Forage",
      date: "July 2025",
      description: "Completed practical tasks in exploratory data analysis, risk profiling, predicting delinquency with AI, business report and data storytelling for collections strategy, and implementing AI-driven collections strategy.",
      certificateUrl: "#",
      skills: ["Data Analytics", "GenAI", "Risk Profiling", "Business Intelligence", "Collections Strategy"],
      credentialId: "AP22110020064",
      featured: true
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "July 2025",
      description: "Completed practical tasks in data analysis and forensic technology, demonstrating proficiency in analytical thinking and problem-solving methodologies.",
      certificateUrl: "#",
      skills: ["Data Analysis", "Forensic Technology", "Problem Solving", "Analytics"],
      credentialId: "AP22110020064",
      featured: true
    },
    {
      title: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "2024",
      description: "Professional certification in MongoDB database development, covering document modeling, aggregation framework, and performance optimization.",
      certificateUrl: "#",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation", "Performance Tuning"],
      credentialId: "MONGO_DEV_2024",
      featured: true
    },
    {
      title: "Oracle Database Certification",
      issuer: "Oracle Corporation",
      date: "2024",
      description: "Oracle Certified Associate certification demonstrating expertise in database fundamentals, SQL, and PL/SQL programming.",
      certificateUrl: "#",
      skills: ["Oracle Database", "SQL", "PL/SQL", "Database Administration", "Performance Optimization"],
      credentialId: "OCA_DB_2024",
      featured: true
    },
    {
      title: "Deep Learning Onramp",
      issuer: "MathWorks Training Services",
      date: "April 2025",
      description: "Successfully completed 100% of the self-paced training course on deep learning fundamentals and neural network implementation.",
      certificateUrl: "#",
      skills: ["Deep Learning", "Neural Networks", "MATLAB", "Machine Learning"],
      credentialId: "MATHWORKS_DL_2025"
    },
    {
      title: "Control Design Onramp with Simulink",
      issuer: "MathWorks Training Services",
      date: "February 2024",
      description: "Successfully completed 100% of the self-paced training course on control system design using Simulink.",
      certificateUrl: "#",
      skills: ["Control Systems", "Simulink", "MATLAB", "System Design"],
      credentialId: "MATHWORKS_CTRL_2024"
    },
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks Training Services",
      date: "January 2024",
      description: "Successfully completed 100% of the self-paced training course covering MATLAB fundamentals and programming concepts.",
      certificateUrl: "#",
      skills: ["MATLAB", "Programming", "Data Analysis", "Scientific Computing"],
      credentialId: "MATHWORKS_MATLAB_2024"
    },
    {
      title: "Simulink Onramp",
      issuer: "MathWorks Training Services",
      date: "January 2024",
      description: "Successfully completed 100% of the self-paced training course on Simulink modeling and simulation fundamentals.",
      certificateUrl: "#",
      skills: ["Simulink", "Modeling", "Simulation", "MATLAB"],
      credentialId: "MATHWORKS_SIM_2024"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="card p-6 hover-lift group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="text-primary" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Calendar size={16} />
                  {cert.date}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </div>
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 text-sm"
                  aria-label="View certificate"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;