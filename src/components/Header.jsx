import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '15px 0' : '25px 0',
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(10, 15, 24, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '20px',
            boxShadow: '0 0 15px rgba(0, 247, 255, 0.3)'
          }}>
            D
          </div>
          <span style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            letterSpacing: '1px',
            color: 'var(--text-main)'
          }}>
            Deepthi
          </span>
        </Link>

        <nav className="header-nav" style={{
          display: 'flex',
          gap: '30px',
          background: 'rgba(255,255,255,0.03)',
          padding: '10px 30px',
          borderRadius: '50px',
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              style={{
                fontSize: '15px',
                fontWeight: '500',
                color: location.pathname === link.path ? 'var(--accent-cyan)' : 'var(--text-muted)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== link.path) e.target.style.color = 'var(--text-main)';
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.path) e.target.style.color = 'var(--text-muted)';
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>
          Let's Talk
        </Link>
      </div>
    </header>
  );
};

export default Header;
