import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px'
      }}>
        <div style={{ 
          fontSize: '24px', 
          fontWeight: '700',
          letterSpacing: '1px',
          color: 'var(--text-main)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '16px',
            boxShadow: '0 0 10px rgba(0, 247, 255, 0.3)'
          }}>
            D
          </div>
          Deepthi
        </div>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          &copy; {new Date().getFullYear()} Deepthi Chittajallu. All rights reserved.
        </p>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Made with ❤️ by Deepthi Chittajallu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
