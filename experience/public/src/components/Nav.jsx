export default function Nav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.25rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(245, 242, 237, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #D8D2C8',
    }}>
      <span style={{
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: '1.3rem',
        fontWeight: 600,
        color: '#1E1E1E',
        letterSpacing: '0.02em',
      }}>
        Albany Zeno
      </span>
      <a
        href="#build"
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#2D4A3E',
          borderBottom: '1px solid #B8976A',
          paddingBottom: '2px',
        }}
      >
        Begin Your Build →
      </a>
    </nav>
  );
}
