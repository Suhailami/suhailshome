import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate engineer with expertise in VLSI design and artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Professional Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a dedicated VLSI Design Engineer with a strong foundation in digital circuit design, 
                artificial intelligence, and machine learning. Currently pursuing my B.Tech in Electronics 
                and Communication Engineering at Integral University, Lucknow.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Interests & Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in bridging the gap between hardware and software, particularly in developing 
                efficient AI accelerators and implementing machine learning algorithms on custom silicon. 
                I enjoy working on projects that combine theoretical knowledge with practical applications.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• VLSI Design & Verification</li>
                <li>• Machine Learning & AI</li>
                <li>• Digital Signal Processing</li>
                <li>• Embedded Systems</li>
                <li>• Hardware-Software Co-design</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Personal Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and innovation. Every project is an opportunity to push 
                boundaries and create solutions that make a meaningful impact in the world of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;