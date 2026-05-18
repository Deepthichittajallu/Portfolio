import React, { useState } from 'react';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('global');

  const certData = {
    global: [
      { title: 'Oracle Database Foundations', image: '/assets/Certifications/global_Certifications/Oracle_database(ss).png', link: '/assets/Certifications/global_Certifications/Oracle_database.pdf' },
      { title: 'Java Foundations', image: '/assets/Certifications/global_Certifications/Java_Oracle.png', link: '/assets/Certifications/global_Certifications/Java_Oracle.pdf' },
      { title: 'Redhat', image: '/assets/Certifications/global_Certifications/redhat(ss).png', link: '/assets/Certifications/global_Certifications/Redhat(RH134).pdf' },
      { title: 'MongoDB', image: '/assets/Certifications/global_Certifications/Mongodb_ss.png', link: '/assets/Certifications/global_Certifications/Mongodb.pdf' },
      { title: 'GitHub', image: '/assets/Certifications/global_Certifications/Github_ss.png', link: '/assets/Certifications/global_Certifications/github.pdf' }
    ],
    badges: [
      { title: 'HTML', image: '/assets/Certifications/Digital_Badges/html(cs).png', link: 'https://www.credly.com/badges/8edb0a9e-9e7d-46fb-9b64-9b6da809919f/public_url' },
      { title: 'CSS', image: '/assets/Certifications/Digital_Badges/css(cs).png', link: 'https://www.credly.com/badges/c770a91d-2b74-4a0a-b089-2ba3b70c0ed9/public_url' },
      { title: 'Javascript', image: '/assets/Certifications/Digital_Badges/javas.png', link: 'https://www.credly.com/badges/15996165-2d95-45f5-82f8-8eceba81f508/public_url' },
      { title: 'Python', image: '/assets/Certifications/Digital_Badges/python.png', link: 'https://www.credly.com/badges/9b7ff53f-42bd-4c36-8b2e-b95a44bff569/public_url' },
      { title: 'OS', image: '/assets/Certifications/Digital_Badges/os.png', link: 'https://www.credly.com/badges/11cc48df-1230-44b6-be61-58d8e2ca2798/public_url' }
    ],
    certificates: [
      { title: 'HackerRank SQL Basic', image: '/assets/Certifications/Certificates/sql_basic.png', link: '/assets/Certifications/Certificates/Hackerrank_sql_basic.pdf' },
      { title: 'Java Basic', image: '/assets/Certifications/Certificates/java_basic.png', link: '/assets/Certifications/Certificates/java_basic certificate (1) (1).pdf' },
      { title: 'Oracle Course Completion', image: '/assets/Certifications/Certificates/Oracle_Course_Completion.png', link: '/assets/Certifications/Certificates/oraclecoursecompletion.pdf' },
      { title: 'SQL Intermediate', image: '/assets/Certifications/Certificates/Sql_Intermediate.png', link: '/assets/Certifications/Certificates/sql_intermediate certificate.pdf' }
    ],
    achievements: [
      { title: 'Trainee of the Month', image: '/assets/Certifications/Achievements/Trainee_of_the_month.png', link: '/assets/Certifications/Achievements/Trainee_of_the_month.png' },
      { title: 'LeetCode 100+ Days', image: '/assets/Certifications/Achievements/leetcode100.png', link: '/assets/Certifications/Achievements/leetcode100.png' },
      { title: 'LeetCode 200+ Days', image: '/assets/Certifications/Achievements/leetcode200.png', link: '/assets/Certifications/Achievements/leetcode200.png' },
      { title: 'LeetCode Badge', image: '/assets/Certifications/Achievements/leetcodebadge.png', link: '/assets/Certifications/Achievements/leetcodebadge.png' }
    ]
  };

  const tabs = [
    { id: 'global', label: 'Global Certifications' },
    { id: 'badges', label: 'Digital Badges' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'achievements', label: 'Achievements' }
  ];

  return (
    <section className="section-container" id="certifications" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <h2 className="section-title" data-aos="fade-down" style={{ fontSize: '2.5rem' }}>My <span className="text-gradient">Certifications & Achievements</span></h2>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '15px', 
        margin: '20px 0 60px' 
      }} data-aos="fade-up">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{ 
              padding: '12px 24px',
              borderRadius: '30px',
              background: activeTab === tab.id ? 'rgba(0, 247, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              border: `1px solid ${activeTab === tab.id ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.08)'}`,
              color: activeTab === tab.id ? 'var(--accent-cyan)' : 'var(--text-main)',
              fontWeight: activeTab === tab.id ? '600' : '400',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === tab.id ? '0 0 15px rgba(0, 247, 255, 0.15)' : 'none'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {certData[activeTab].map((cert, index) => (
          <div key={`${activeTab}-${index}`} className="cert-card glass-panel" data-aos="fade-up" data-aos-delay={index * 100} style={{
            height: '300px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.02)'
          }}>
            
            {/* Full Card Image */}
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0D1117' // Solid dark background so PNGs look good
            }}>
              {/* If image is a PDF link, we use a placeholder icon or just text, else we use img tag */}
              {cert.image.endsWith('.pdf') ? (
                <div style={{ textAlign: 'center', color: 'var(--accent-cyan)' }}>
                   <i className="fa-solid fa-file-pdf" style={{ fontSize: '4rem', marginBottom: '15px' }}></i>
                   <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{cert.title}</h3>
                </div>
              ) : (
                <img src={cert.image} alt={cert.title} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} />
              )}
            </div>

            {/* Hover Overlay Animation */}
            <div className="cert-overlay">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', textAlign: 'center' }}>{cert.title}</h3>
              <a href={cert.link} target="_blank" rel="noreferrer" className="btn-primary" style={{
                background: 'rgba(0, 247, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                padding: '10px 25px'
              }}>
                {activeTab === 'achievements' ? 'View Full Image' : 'View Certificate'} <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '8px' }}></i>
              </a>
            </div>

          </div>
        ))}
      </div>

      <style>{`
        .cert-card .cert-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(13, 17, 23, 0.85); /* Dark overlay */
          backdrop-filter: blur(4px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          transform: translateY(100%); /* Start from bottom */
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
        }

        .cert-card:hover .cert-overlay {
          opacity: 1;
          transform: translateY(0); /* Slide up to center */
        }
      `}</style>
    </section>
  );
};

export default Certifications;
