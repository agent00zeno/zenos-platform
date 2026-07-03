import './styles/global.css';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import WaitlistForm from './components/WaitlistForm.jsx';

export default function App() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <Hero />

        {/* Waitlist Section */}
        <section
          id="build"
          style={{
            padding: '6rem 2rem',
            background: '#fff',
            borderTop: '1px solid #D8D2C8',
          }}
        >
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ maxWidth: '560px', marginBottom: '3rem' }}>
              <p style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#B8976A',
                marginBottom: '1rem',
              }}>
                ZenOS Alpha
              </p>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: '#1E1E1E',
                marginBottom: '1rem',
              }}>
                Join the first US-China Business Operating Platform.
              </h2>
              <div style={{
                width: '48px', height: '2px',
                background: '#B8976A', marginBottom: '1rem'
              }} />
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7 }}>
                Tell ZenOS what you're building. We'll be in touch
                when Alpha access opens.
              </p>
            </div>

            <WaitlistForm />
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '2rem',
          borderTop: '1px solid #D8D2C8',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '0.85rem', color: '#999', margin: 0 }}>
            © 2026 Albany Zeno · Built on ZenOS
          </p>
        </footer>
      </main>
    </>
  );
}
