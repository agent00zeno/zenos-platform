export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '8rem 2rem 4rem',
      maxWidth: '1120px',
      margin: '0 auto',
    }}>
      <div style={{ maxWidth: '680px' }}>
        <p style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#B8976A',
          marginBottom: '1.5rem',
        }}>
          Architect · Engineer · Builder
        </p>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(2.8rem, 5vw, 5rem)',
          fontWeight: 600,
          color: '#1E1E1E',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
        }}>
          I turn business intent into running businesses.
        </h1>

        <div style={{
          width: '48px',
          height: '2px',
          background: '#B8976A',
          marginBottom: '1.5rem',
        }} />

        <p style={{
          fontSize: '1.2rem',
          color: '#3A3A3A',
          lineHeight: 1.7,
          marginBottom: '2rem',
        }}>
          ZenOS is the operating system for businesses that span continents.
          I'm the architect.
        </p>

        <p style={{
          fontSize: '1rem',
          color: '#666',
          lineHeight: 1.7,
          marginBottom: '3rem',
        }}>
          Software engineer. Network engineer. Cloud architect. Security engineer.
          AI systems builder. Business executive. Everything you need to go from
          idea to operating company — faster and cheaper than anyone else.
        </p>

        <a
          href="#build"
          className="btn-primary"
          style={{ textDecoration: 'none' }}
        >
          Begin Your Build →
        </a>
      </div>
    </section>
  );
}
