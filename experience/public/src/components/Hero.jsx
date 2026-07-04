import { useState, useEffect } from 'react'
import { getPublicProfile } from '../firebase/firestore.js'

const FALLBACK = {
  name: 'Albany Zeno',
  tagline: 'ARCHITECT · ENGINEER · BUILDER',
  headline: 'I turn business intent into running businesses.',
  bio: {
    lead: 'ZenOS is the operating system for businesses that span continents. I\'m the architect.',
    body: 'Software engineer. Network engineer. Cloud architect. Security engineer. AI systems builder. Business executive. Everything you need to go from idea to operating company — faster and cheaper than anyone else.'
  }
}

export default function Hero() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPublicProfile()
      .then(data => {
        setProfile(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const content = profile || FALLBACK
  const headline = profile?.headline?.lines
    ? profile.headline.lines.map(l => l.text).join(' ')
    : FALLBACK.headline
  const tagline = profile?.tagline || FALLBACK.tagline
  const leadBio = profile?.bio?.lead || FALLBACK.bio.lead
  const bodyBio = profile?.bio?.body || FALLBACK.bio.body

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 2rem',
      maxWidth: '1120px',
      margin: '0 auto',
      paddingTop: '120px',
      paddingBottom: '80px',
    }}>
      <p style={{
        fontSize: '0.8rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--color-coral)',
        marginBottom: '1.5rem',
        opacity: loading ? 0.4 : 1,
        transition: 'opacity 0.3s',
      }}>
        {tagline}
      </p>

      <h1 style={{
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        fontWeight: 600,
        lineHeight: 1.1,
        color: 'var(--color-charcoal)',
        marginBottom: '1.5rem',
        opacity: loading ? 0.4 : 1,
        transition: 'opacity 0.3s',
      }}>
        {headline}
      </h1>

      <div style={{
        width: '48px',
        height: '2px',
        background: 'var(--color-coral)',
        marginBottom: '1.5rem',
      }} />

      <p style={{
        fontSize: '1.1rem',
        color: 'var(--color-charcoal)',
        lineHeight: 1.7,
        maxWidth: '600px',
        marginBottom: '1rem',
        opacity: loading ? 0.4 : 1,
        transition: 'opacity 0.3s',
      }}>
        {leadBio}
      </p>

      <p style={{
        fontSize: '0.95rem',
        color: '#666',
        lineHeight: 1.7,
        maxWidth: '600px',
        marginBottom: '2.5rem',
        opacity: loading ? 0.4 : 1,
        transition: 'opacity 0.3s',
      }}>
        {bodyBio}
      </p>

      <a href="#build" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'var(--color-deep-green)',
        color: '#fff',
        padding: '0.875rem 2rem',
        fontSize: '0.8rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        border: 'none',
        cursor: 'pointer',
        width: 'fit-content',
      }}>
        Begin Your Build →
      </a>
    </section>
  )
}
