import React, { useState } from 'react';
import Lottie from 'lottie-react';
import CommunicationAnim from '../assets/Communication.json';

const Contact = () => {
  const LottieAnimComponent = typeof Lottie === 'object' && Lottie.default ? Lottie.default : Lottie;
  
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error', ''
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Convert FormData to JSON object required by Web3Forms
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        });
        
        const result = await response.json();
        
        if (result.success) {
            setStatus('success');
            form.reset();
        } else {
            setStatus('error');
            setErrorMessage(result.message || 'Failed to send message.');
        }
    } catch (error) {
        console.error("Fetch error details:", error);
        setStatus('error');
        setErrorMessage(`Network Error: ${error.message || String(error)}. (Check if an Adblocker is blocking the request)`);
    }
  };

  return (
    <section className="section-container" id="contact" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingTop: '120px'
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="section-title" data-aos="fade-down" style={{ marginBottom: '15px' }}>
          Let's <span className="text-gradient">Connect!</span>
        </h2>
        <p data-aos="fade-up" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontStyle: 'italic' }}>
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's create something crazy together!
        </p>
      </div>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '60px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        width: '100%' 
      }}>
        
        {/* Left Side: Lottie Animation */}
        <div style={{ flex: '1 1 300px', maxWidth: '450px' }} data-aos="fade-right">
          <LottieAnimComponent animationData={CommunicationAnim} loop={true} style={{ width: '100%', filter: 'drop-shadow(0 0 20px rgba(0,247,255,0.1))' }} />
        </div>

        {/* Right Side: Contact Form */}
        <div className="glass-panel" data-aos="fade-left" style={{ 
          flex: '1 1 400px', 
          maxWidth: '550px', 
          padding: '40px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Send me a message</h3>
          
          {status === 'success' ? (
            <div style={{ 
              background: 'rgba(16, 185, 129, 0.1)', 
              border: '1px solid #10b981', 
              padding: '30px', 
              borderRadius: '12px',
              textAlign: 'center',
              color: '#10b981'
            }}>
              <i className="fa-solid fa-circle-check" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
              <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Message Sent!</h4>
              <p style={{ color: 'var(--text-muted)' }}>
                Thank you for reaching out. Your message has been sent directly to my inbox. 
              </p>
              <button onClick={() => setStatus('')} className="btn-primary" style={{ marginTop: '20px' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
              
              {status === 'error' && (
                <div style={{ padding: '15px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px' }}>
                  {errorMessage}
                </div>
              )}

              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="80ed4ee8-caa7-4e6a-acc5-18f4c9ee9183" />
              
              {/* Optional: Add a subject to the email */}
              <input type="hidden" name="subject" value="New Submission from Portfolio" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>Name</label>
                <input type="text" name="name" required placeholder="Your Name" style={{ 
                  width: '100%', 
                  padding: '15px', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'var(--text-main)', 
                  outline: 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  fontFamily: 'inherit'
                }} 
                onFocus={(e) => { e.target.style.borderColor = 'var(--accent-cyan)'; e.target.style.boxShadow = '0 0 10px rgba(0,247,255,0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>Email</label>
                <input type="email" name="email" required placeholder="your.email@example.com" style={{ 
                  width: '100%', 
                  padding: '15px', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'var(--text-main)', 
                  outline: 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  fontFamily: 'inherit'
                }} 
                onFocus={(e) => { e.target.style.borderColor = 'var(--accent-cyan)'; e.target.style.boxShadow = '0 0 10px rgba(0,247,255,0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>Message</label>
                <textarea name="message" required placeholder="Your message here..." style={{ 
                  width: '100%', 
                  padding: '15px', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'var(--text-main)', 
                  minHeight: '120px', 
                  resize: 'vertical', 
                  outline: 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--accent-cyan)'; e.target.style.boxShadow = '0 0 10px rgba(0,247,255,0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                ></textarea>
              </div>

              <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ 
                marginTop: '10px', 
                padding: '15px', 
                fontSize: '1.1rem',
                width: '100%',
                opacity: status === 'loading' ? 0.7 : 1,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer'
              }}>
                {status === 'loading' ? 'Sending...' : (
                  <>Send Message <i className="fa-solid fa-paper-plane" style={{ marginLeft: '8px' }}></i></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
