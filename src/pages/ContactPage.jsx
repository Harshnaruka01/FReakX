import React from 'react';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  return (
    <div className="app-root">
      <Navbar />
      
      <main className="container" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--accent)' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
            Get in touch with us for any questions or feedback
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Email Us</h3>
            <p style={{ color: '#e6eef8', marginBottom: '10px' }}>For general inquiries:</p>
            <a href="mailto:info@freakx.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              info@freakx.com
            </a>
          </div>

          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Follow Us</h3>
            <p style={{ color: '#e6eef8', marginBottom: '15px' }}>Stay connected on social media</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Instagram</a>
              <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Twitter</a>
              <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Facebook</a>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '30px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '20px', textAlign: 'center' }}>
            Send us a Message
          </h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#e6eef8' }}>Name</label>
              <input 
                type="text" 
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#e6eef8',
                  fontSize: '16px'
                }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#e6eef8' }}>Email</label>
              <input 
                type="email" 
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#e6eef8',
                  fontSize: '16px'
                }}
                placeholder="Your email"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#e6eef8' }}>Message</label>
              <textarea 
                rows="5"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#e6eef8',
                  fontSize: '16px',
                  resize: 'vertical'
                }}
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit"
              style={{
                padding: '12px 24px',
                backgroundColor: 'var(--accent)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'opacity 0.3s'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
