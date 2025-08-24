import React from 'react';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera (Stanford University)",
      date: "2023",
      description: "Comprehensive course covering supervised learning, unsupervised learning, and best practices in machine learning.",
      certificateUrl: "https://coursera.org/verify/specialization/ABC123",
      skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
      credentialId: "ABC123XYZ"
    },
    {
      title: "Digital VLSI Design",
      issuer: "NPTEL (IIT)",
      date: "2023",
      description: "Advanced course on VLSI design methodologies, covering digital circuit design, verification, and implementation.",
      certificateUrl: "https://nptel.ac.in/verify/certificate/DEF456",
      skills: ["VLSI Design", "Verilog", "Digital Circuits", "FPGA"],
      credentialId: "DEF456XYZ"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera (deeplearning.ai)",
      date: "2023",
      description: "In-depth study of deep learning techniques including CNNs, RNNs, and advanced neural network architectures.",
      certificateUrl: "https://coursera.org/verify/specialization/GHI789",
      skills: ["Deep Learning", "CNN", "RNN", "TensorFlow", "Keras"],
      credentialId: "GHI789XYZ"
    },
    {
      title: "Embedded Systems Programming",
      issuer: "IEEE Certification",
      date: "2022",
      description: "Certification in embedded systems programming, microcontroller interfacing, and real-time system design.",
      certificateUrl: "https://ieee.org/verify/JKL012",
      skills: ["Embedded Systems", "C/C++", "Microcontrollers", "Real-time Systems"],
      credentialId: "JKL012XYZ"
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