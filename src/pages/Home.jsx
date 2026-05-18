import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bookJson from '../assets/Book.json';
import careernestJson from '../assets/Careernest.json';
import dogwalkingJson from '../assets/Dogwalking.json';
import liveChatbotJson from '../assets/LiveChatbot.json';

import Internships from './Internships';
import Skills from './Skills';
import Certifications from './Certifications';

const projects = [
  {
    title: "CogniVerse",
    desc: "An advanced AI-powered educational pipeline featuring automated generation of transcripts, flashcards, and study summaries from file uploads or live audio. Includes a secure, authenticated PDF and media delivery system with role-based access.",
    link: "https://cogniverse.live",
    lottieData: liveChatbotJson,
    tags: ["React", "AI Pipeline", "Node.js", "Authentication"]
  },
  {
    title: "Multi-Tenant SaaS Platform",
    desc: "A production-ready Multi-Tenant SaaS platform with robust PostgreSQL database architecture. Features comprehensive Role-Based Access Control (RBAC), subscription plan management, and isolated environments.",
    link: "#",
    lottieData: careernestJson,
    tags: ["SaaS", "PostgreSQL", "Express", "RBAC"]
  }
];

const Home = () => {
  const typedRef = useRef(null);
  const LottieAnim = typeof Lottie === 'object' && Lottie.default ? Lottie.default : Lottie;

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });

    const sentences = [
      "Frontend Developer",
      "Full Stack Developer",
      "Competitive Coder",
      "AI Enthusiast",
      "Tech Enthusiast"
    ];

    let sentenceIndex = 0;
    let charIndex = 0;
    let typing = true;
    let timeoutId;

    const typeEffect = () => {
      if (!typedRef.current) return;
      
      if (typing) {
        if (charIndex < sentences[sentenceIndex].length) {
          typedRef.current.textContent += sentences[sentenceIndex].charAt(charIndex);
          charIndex++;
          timeoutId = setTimeout(typeEffect, 100);
        } else {
          typing = false;
          timeoutId = setTimeout(typeEffect, 2000);
        }
      } else {
        if (charIndex > 0) {
          typedRef.current.textContent = sentences[sentenceIndex].substring(0, charIndex - 1);
          charIndex--;
          timeoutId = setTimeout(typeEffect, 50);
        } else {
          typing = true;
          sentenceIndex = (sentenceIndex + 1) % sentences.length;
          timeoutId = setTimeout(typeEffect, 500);
        }
      }
    };
    
    if (typedRef.current) typedRef.current.textContent = "";
    typeEffect();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="section-container" style={{ 
        height: '100vh',
        minHeight: '600px',
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '0'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          width: '100%',
          flexWrap: 'wrap'
        }}>
          {/* Left Content */}
          <div data-aos="fade-right" style={{ flex: '1 1 300px', zIndex: 2 }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '10px' }}>
              Hello, I'm
            </h2>
            <h1 style={{ 
              fontSize: '4.5rem', 
              lineHeight: '1.1', 
              marginBottom: '20px',
              textShadow: '0 0 20px rgba(255,255,255,0.1)'
            }}>
              Deepthi<br/>
              <span className="text-gradient">Chittajallu</span>
            </h1>
            
            <div style={{ 
              fontSize: '1.8rem', 
              fontWeight: '500', 
              marginBottom: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>I am a </span>
              <span ref={typedRef} style={{ color: '#fff' }}></span>
              <span style={{ 
                width: '3px', 
                height: '30px', 
                background: 'var(--accent-cyan)',
                animation: 'blink 1s step-end infinite'
              }}></span>
            </div>
            
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1.1rem', 
              maxWidth: '550px',
              marginBottom: '40px',
              lineHeight: '1.8'
            }}>
              I craft responsive, dynamic, and visually stunning web experiences. With a strong foundation in modern full stack technologies and competitive programming, I build solutions that are both beautiful and efficient.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a href="/assets/Deepthi_resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">
                View Resume
              </a>
              <div style={{ display: 'flex', gap: '15px', marginLeft: '10px' }}>
                <a href="https://github.com/Deepthichittajallu" target="_blank" rel="noreferrer" 
                   style={{ fontSize: '24px', color: 'var(--text-muted)', transition: 'color 0.3s' }}
                   onMouseOver={(e) => e.target.style.color = 'var(--text-main)'}
                   onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/deepthichittajallu" target="_blank" rel="noreferrer"
                   style={{ fontSize: '24px', color: 'var(--text-muted)', transition: 'color 0.3s' }}
                   onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'}
                   onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:chlakshmideepthi06@gmail.com"
                   style={{ fontSize: '24px', color: 'var(--text-muted)', transition: 'color 0.3s' }}
                   onMouseOver={(e) => e.target.style.color = '#ef4444'}
                   onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Photo */}
          <div data-aos="fade-left" style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '3/4',
              borderRadius: '30px',
              background: 'url(/assets/Professionalphoto1.png) center/cover',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{
                position: 'absolute',
                inset: '-2px',
                borderRadius: '32px',
                background: 'rgba(0, 247, 255, 0.2)',
                zIndex: '-1',
                filter: 'blur(20px)',
                opacity: 0.3
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-container" id="projects" style={{ paddingTop: '80px' }}>
        <h2 className="section-title" data-aos="fade-up">Featured <span className="text-gradient">Projects</span></h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginTop: '60px' }}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: '50px',
                flexWrap: 'wrap'
              }}>
                <div data-aos={isEven ? "fade-right" : "fade-left"} style={{ flex: '1 1 400px', maxWidth: '500px' }}>
                  <div className="glass-panel" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)' }}>
                    <LottieAnim animationData={project.lottieData} loop={true} style={{ width: '100%', height: 'auto' }} />
                  </div>
                </div>
                
                <div data-aos={isEven ? "fade-left" : "fade-right"} className="glass-panel" style={{ flex: '1 1 400px', padding: '40px' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>{project.title}</h3>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{
                        background: 'rgba(0, 247, 255, 0.1)',
                        color: 'var(--accent-cyan)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        border: '1px solid rgba(0, 247, 255, 0.2)'
                      }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '30px' }}>
                    {project.desc}
                  </p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-block' }}>
                    View Live Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Render Sub-components */}
      <Internships />
      <Skills />
      <Certifications />
      
      {/* Minimal CTA Block */}
      <section className="section-container" style={{ textAlign: 'center', padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 data-aos="fade-up" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to build something <span className="text-gradient">amazing?</span></h2>
        <p data-aos="fade-up" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
          I am currently open for new roles, projects, and exciting opportunities.
        </p>
        <div data-aos="fade-up">
          <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
            Let's Connect
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
