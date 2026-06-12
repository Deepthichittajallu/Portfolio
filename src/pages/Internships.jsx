import React from 'react';

const Internships = () => {
  const internships = [
    {
      title: "C/C++ Developer Intern @ LG",
      date: "Upcoming (June 2026)",
      desc: "Selected for an upcoming internship role as a C/C++ Developer at LG. Looking forward to contributing to enterprise-level software and expanding my systems engineering expertise.",
      certLink: "",
      logo: "assets/internships/LG.png"
    },
    {
      title: "Full Stack Development Intern @ Technical Hub",
      date: "May 2026 - June 2026",
      desc: "Worked as a Full Stack Development Intern at Technical Hub. Gained hands-on experience in building scalable web applications and collaborating effectively with development teams.",
      certLink: "",
      logo: "assets/internships/Technicalhub.png"
    },
    {
      title: "Full Stack Development Intern",
      date: "May 2025 - July 2025",
      desc: "Built responsive UI Webpages and HTML Layouts with CSS Designs. Delivered multiple features ahead of schedule.",
      certLink: "assets/react.png",
      logo: "assets/internships/Technicalhub.png"
    }
  ];

  return (
    <section className="section-container" id="internships" style={{ paddingTop: '80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="section-title" data-aos="fade-up" style={{ marginBottom: '15px' }}>
          Internships & <span className="text-gradient">Experience</span>
        </h2>
        <p data-aos="fade-up" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', fontStyle: 'italic' }}>
          "Gaining practical work experience by assisting with real projects, learning new technical skills, and networking with industry professionals."
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px', 
        maxWidth: '1000px', 
        margin: '0 auto' 
      }}>
        {internships.map((intern, index) => {
          const CardContent = (
            <>
              {/* Top Row: Title and Logo */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', flex: 1, paddingRight: '15px' }}>
                  {intern.title}
                </h3>
                {intern.logo && (
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    overflow: 'hidden'
                  }}>
                    <img src={intern.logo} alt="Company Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                )}
              </div>
              
              <div style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', marginBottom: '15px', fontWeight: '500' }}>
                <i className="fa-regular fa-calendar" style={{ marginRight: '8px' }}></i>
                {intern.date}
              </div>
              
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', fontSize: '1rem', margin: 0 }}>
                {intern.desc}
              </p>

              {/* Hover overlay hint */}
              {intern.certLink && (
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: intern.logo ? '75px' : '20px',
                  color: 'var(--accent-cyan)',
                  opacity: 0,
                  fontSize: '1.5rem',
                  transition: 'opacity 0.3s'
                }} className="cert-icon">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              )}
            </>
          );

          return intern.certLink ? (
            <a 
              href={intern.certLink} 
              target="_blank" 
              rel="noreferrer" 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="glass-panel internship-card" 
              style={{ 
                display: 'block', 
                padding: '25px', 
                textDecoration: 'none', 
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {CardContent}
            </a>
          ) : (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="glass-panel" 
              style={{ 
                display: 'block', 
                padding: '25px', 
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {CardContent}
            </div>
          );
        })}
      </div>
      
      <style>{`
        .internship-card:hover .cert-icon {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Internships;
