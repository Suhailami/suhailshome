import React from 'react';
import { Brain, Cpu, Globe, Target, Code, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dynamic Electronics & Communication Engineering student bridging the gap between 
            <span className="text-primary font-semibold"> hardware innovation</span> and 
            <span className="text-accent font-semibold"> intelligent software</span>
          </p>
        </div>

        {/* Hero Statement */}
        <div className="mb-16">
          <div className="card p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40 transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Professional Background</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Dynamic Electronics and Communication Engineering student with expertise in <span className="text-primary font-semibold">AI/ML</span>, 
                  <span className="text-accent font-semibold"> Embedded Systems</span>, <span className="text-primary font-semibold">VLSI Design</span>, 
                  and <span className="text-accent font-semibold">Web Development</span>. Skilled in Python, C++, JavaScript, MATLAB, and ARM-based 
                  microcontrollers, with hands-on experience in hardware–software integration. Adept at designing intelligent systems, 
                  optimizing algorithms, and developing scalable applications. Currently enhancing global outlook by learning 
                  <span className="text-primary font-semibold"> Japanese (N5–N3 level)</span>, with a strong focus on innovation and 
                  cross-disciplinary engineering solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Expertise Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="card p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">AI & Machine Learning</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Deep Learning & CNNs
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Autoencoders & Transfer Learning
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Predictive Modeling & Optimization
              </li>
            </ul>
          </div>

          <div className="card p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">VLSI & Digital Systems</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                RTL Design & FPGA/ASIC Flow
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                Verification & Cadence Tools
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                Xilinx Vivado & Digital Design
              </li>
            </ul>
          </div>

          <div className="card p-6 bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20 hover:border-secondary/40 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Embedded & IoT</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                ARM Cortex & Arduino
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                Jetson Nano & Real-time Systems
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                IoT Integration & Automation
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Interests & Goals</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Passionate about bridging the gap between hardware and software to create efficient, intelligent systems. 
              Enthusiastic about <span className="text-primary font-semibold">AI accelerators</span>, 
              <span className="text-accent font-semibold"> embedded ML</span>, and 
              <span className="text-secondary font-semibold"> IoT-driven automation</span>, with the goal of driving 
              innovations in smart systems, precision engineering, and next-generation computing architectures.
            </p>
          </div>

          <div className="card p-8 bg-gradient-to-br from-accent/5 to-secondary/5 border-accent/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Globe className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Personal Philosophy</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I believe in <span className="text-primary font-semibold">continuous learning</span>, 
              <span className="text-accent font-semibold"> innovation</span>, and 
              <span className="text-secondary font-semibold"> collaboration</span>. For me, every challenge is an 
              opportunity to engineer impactful solutions, pushing technological boundaries while delivering practical value. 
              My philosophy blends technical depth, creativity, and global perspective to contribute meaningfully to the world of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
