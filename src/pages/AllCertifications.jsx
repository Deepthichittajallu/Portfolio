import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllCertifications = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  const globalCertifications = [
    { title: 'Oracle Database Foundations', image: '/assets/oracle.png', description: ['Issued by Oracle Academy', 'Completed in 2025'], link: '/assets/oracle.pdf', btnText: 'View Certificate' },
    { title: 'Java Foundations', image: '/assets/javas.png', description: ['Issued by Oracle Academy', 'Completed in 2025'], link: '/assets/23A91A0585.pdf', btnText: 'View Certificate' },
    { title: 'Redhat', image: '/assets/redhat(ss).png', description: ['Issued by Oracle Academy', 'Completed in 2025'], link: '/assets/Redhat.pdf', btnText: 'View Certificate' },
    { title: 'MongoDB', image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', description: ['Issued by MongoDB University', 'Completed in 2025'], link: '/assets/Mongodb.pdf', btnText: 'View Certificate' }
  ];

  const digitalBadges = [
    { title: 'HTML', image: '/assets/html(cs).png', description: ['Issued by Cisco', 'Completed in 2025'], link: 'https://www.credly.com/badges/8edb0a9e-9e7d-46fb-9b64-9b6da809919f/public_url', btnText: 'View Badge' },
    { title: 'CSS', image: '/assets/css(cs).png', description: ['Issued by Cisco', 'Completed in 2025'], link: 'https://www.credly.com/badges/c770a91d-2b74-4a0a-b089-2ba3b70c0ed9/public_url', btnText: 'View Badge' },
    { title: 'Javascript', image: '/assets/javas.png', description: ['Issued by Cisco', 'Completed in 2025'], link: 'https://www.credly.com/badges/15996165-2d95-45f5-82f8-8eceba81f508/public_url', btnText: 'View Badge' },
    { title: 'Python', image: '/assets/python.png', description: ['Issued by Cisco', 'Completed in 2024'], link: 'https://www.credly.com/badges/9b7ff53f-42bd-4c36-8b2e-b95a44bff569/public_url', btnText: 'View Badge' },
    { title: 'OS', image: '/assets/os.png', description: ['Issued by Cisco', 'Completed in 2024'], link: 'https://www.credly.com/badges/11cc48df-1230-44b6-be61-58d8e2ca2798/public_url', btnText: 'View Badge' }
  ];

  const renderGrid = (items) => {
    if (items.length === 0) {
      return <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', textAlign: 'center', marginTop: '30px' }}>More coming soon...</p>;
    }
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '30px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {items.map((cert, index) => (
          <div className="glass-panel" key={index} data-aos="fade-up" data-aos-delay={index * 50} style={{
            padding: '30px 25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '25px',
              padding: '15px'
            }}>
              <img src={cert.image} alt={cert.title} style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(0,247,255,0.15))'
              }} />
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{cert.title}</h3>
            
            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '25px', flexGrow: 1 }}>
              {cert.description.map((desc, i) => <p key={i} style={{ margin: '5px 0' }}>{desc}</p>)}
            </div>
            
            {cert.link && cert.link !== "#" && (
              <a href={cert.link} target="_blank" rel="noreferrer" style={{
                color: 'var(--text-main)',
                border: '1px solid rgba(0, 247, 255, 0.4)',
                background: 'rgba(0, 247, 255, 0.05)',
                padding: '8px 20px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => { e.target.style.background = 'var(--accent-cyan)'; e.target.style.color = '#000'; }}
              onMouseOut={(e) => { e.target.style.background = 'rgba(0, 247, 255, 0.05)'; e.target.style.color = 'var(--text-main)'; }}
              >
                {cert.btnText}
              </a>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '100px', paddingTop: '150px' }} className="section-container">
      
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 data-aos="fade-down" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
          All <span className="text-gradient">Credentials</span>
        </h1>
        <p data-aos="fade-up" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
          "A comprehensive list of my globally recognized certifications and digital badges."
        </p>
      </div>

      {/* Global Certifications Section */}
      <div style={{ marginBottom: '100px', width: '100%' }}>
        <h2 data-aos="fade-right" style={{ 
          fontSize: '2rem', 
          marginBottom: '40px', 
          paddingLeft: '20px',
          borderLeft: '4px solid var(--accent-cyan)'
        }}>
          Global Certifications
        </h2>
        {renderGrid(globalCertifications)}
      </div>

      {/* Digital Badges Section */}
      <div style={{ marginBottom: '100px', width: '100%' }}>
        <h2 data-aos="fade-right" style={{ 
          fontSize: '2rem', 
          marginBottom: '40px', 
          paddingLeft: '20px',
          borderLeft: '4px solid var(--text-main)'
        }}>
          Digital Badges
        </h2>
        {renderGrid(digitalBadges)}
      </div>
      
    </div>
  );
};

export default AllCertifications;
