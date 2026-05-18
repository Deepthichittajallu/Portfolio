import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('coding');

  const skillsData = {
    coding: [
      { title: "Leetcode", image: "/assets/leetcode.png", description: ["Solved 600+ problems", "Rating: 1666"], link: "https://leetcode.com/u/Deepthi_Chittajallu/", btnText: "View Profile" },
      { title: "Codechef", image: "/assets/codechef.png", description: ["Solved 1100+ problems", "Max Rating: 1449"], link: "https://www.codechef.com/users/deepthi2403", btnText: "View Profile" },
      { title: "HackerRank", image: "/assets/Hackerrank.png", description: ["Solved 300+ problems", "7 Badges"], link: "https://www.hackerrank.com/profile/chlakshmideepth1", btnText: "View Profile" },
      { title: "Geeks for Geeks", image: "/assets/gfg.png", description: ["Solved 300+ problems", "Rating: 1724"], link: "https://www.geeksforgeeks.org/user/chlakshmidzjpq/", btnText: "View Profile" }
    ],
    technical: [
      { title: "HTML5", image: "/assets/HTML.png", description: ["Semantic markup", "Accessibility"], link: "#", btnText: "View" },
      { title: "CSS3", image: "/assets/css.png", description: ["Flexbox, Grid", "Animations"], link: "#", btnText: "View" },
      { title: "JavaScript", image: "/assets/js.png", description: ["ES6+", "DOM Manipulation"], link: "#", btnText: "View" },
      { title: "React", image: "/assets/react.png", description: ["Hooks, Context", "State Management"], link: "#", btnText: "View" },
      { title: "Bootstrap", image: "/assets/bootstarp.png", description: ["Responsive Design", "Component Library"], link: "#", btnText: "View" },
      { title: "MySQL", image: "/assets/mysql.png", description: ["Experienced in joins", "Indexing, procedures"], link: "#", btnText: "View" },
      { title: "Git & GitHub", image: "/assets/git.png", description: ["Version control", "Collaboration workflows"], link: "#", btnText: "View Profile" },
      { title: "Linux & Redhat", image: "/assets/linux.png", description: ["OS fundamentals", "Command line proficiency"], link: "#", btnText: "View" }
    ]
  };

  const tabs = [
    { id: 'coding', label: 'Coding Platforms' },
    { id: 'technical', label: 'Technical Skills' }
  ];

  return (
    <section className="section-container" id="skills" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <h2 className="section-title" data-aos="fade-down">My <span className="text-gradient">Skills</span></h2>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '15px', 
        margin: '40px 0 60px' 
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

      {/* Skill Cards Grid with Hover Overlays */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {skillsData[activeTab].map((skill, index) => (
          <div key={`${activeTab}-${index}`} className="skill-card glass-panel" data-aos="fade-up" data-aos-delay={index * 100} style={{
            height: '250px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.02)'
          }}>
            
            {/* Base Image Container (Visible before hover) */}
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0D1117' // Solid background for clarity
            }}>
                <img src={skill.image} alt={skill.title} style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  marginBottom: '20px',
                  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))'
                }} />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', textAlign: 'center' }}>{skill.title}</h3>
            </div>

            {/* Hover Overlay Animation */}
            <div className="skill-overlay">
              <h3 style={{ fontSize: '1.6rem', marginBottom: '15px', textAlign: 'center', color: 'var(--accent-cyan)' }}>{skill.title}</h3>
              
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                {skill.description.map((desc, i) => (
                    <p key={i} style={{ margin: '5px 0', fontSize: '1.05rem', color: 'var(--text-main)' }}>{desc}</p>
                ))}
              </div>

              {skill.link !== "#" && (
                <a href={skill.link} target="_blank" rel="noreferrer" className="btn-primary" style={{
                  background: 'rgba(0, 247, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  padding: '10px 25px',
                  borderRadius: '30px',
                  textDecoration: 'none'
                }}>
                  {skill.btnText} <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '8px' }}></i>
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
      
      <style>{`
        .skill-card .skill-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(13, 17, 23, 0.9); /* Dark overlay */
          backdrop-filter: blur(8px);
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

        .skill-card:hover .skill-overlay {
          opacity: 1;
          transform: translateY(0); /* Slide up to center */
        }
      `}</style>
    </section>
  );
};

export default Skills;
