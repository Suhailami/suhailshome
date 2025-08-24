import React from 'react';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const handleResumeView = () => {
    window.open('https://drive.google.com/file/d/13DLTzPZ4mnDX0GVRooKe11lD9atsMcDY/view?usp=sharing', '_blank', 'noopener,noreferrer');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/13DLTzPZ4mnDX0GVRooKe11lD9atsMcDY/view?usp=sharing';
    link.download = 'Suhail_Ahammad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background to-muted/30">
      <div className="container text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Suhail Ahammad
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            AI/ML Engineer with specilized at Embedded system and IOT.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about digital circuit design, artificial intelligence, and creating innovative solutions
            at the intersection of hardware and software.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleResumeView}
            className="btn-primary flex items-center gap-2"
            aria-label="View resume"
          >
            <ExternalLink size={20} />
            View Resume
          </button>
          <button
            onClick={handleResumeDownload}
            className="btn-secondary flex items-center gap-2"
            aria-label="Download resume"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <div className="flex justify-center space-x-6 pt-8">
          <a
            href="https://github.com/suhailami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="GitHub profile"
          >
            <Github size={24} className="text-foreground" />
          </a>
          <a
            href="https://linkedin.com/in/suhailahammad"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={24} className="text-foreground" />
          </a>
          <a
            href="mailto:suhailahammad_shaik@srmap.edu.in"
            className="p-3 bg-card rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Send email"
          >
            <Mail size={24} className="text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
