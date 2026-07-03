import { useState } from 'react';
import { submitWaitlist } from '../services/waitlist.js';

const BUSINESS_TYPES = [
  'Startup', 'Consulting Business', 'Professional Services',
  'Real Estate', 'Construction', 'E-commerce', 'Healthcare',
  'Media', 'Technology', 'Nonprofit', 'Other'
];

const STAGES = [
  'Just an idea', 'Planning', 'Building now',
  'Existing business', 'Enterprise modernization'
];

const NEEDS = [
  'AI Workforce', 'Website', 'Customer Portal', 'CRM',
  'Automation', 'Mobile App', 'Internal Operations',
  'Sales & Marketing', 'Security & Compliance', 'Cloud Infrastructure'
];

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: '', email: '', businessType: '', stage: '', needs: [], vision: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleCheckbox(value) {
    setForm(prev => ({
      ...prev,
      needs: prev.needs.includes(value)
        ? prev.needs.filter(n => n !== value)
        : [...prev.needs, value]
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.businessType || !form.stage) {
      setError('Please complete all required fields.');
      return;
    }
    setError('');
    setStatus('submitting');
    try {
      await submitWaitlist(form);
      setStatus('success');
    } catch (err) {
      console.error('Waitlist submission failed:', err);
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #D8D2C8',
        borderRadius: '4px',
        padding: '3rem',
        textAlign: 'center',
        maxWidth: '560px',
        margin: '0 auto',
      }}>
        <div style={{
          width: '48px', height: '2px',
          background: '#B8976A', margin: '0 auto 1.5rem'
        }} />
        <h3 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '2rem', color: '#1E1E1E', marginBottom: '1rem'
        }}>
          You're on the list, {form.name}.
        </h3>
        <p style={{ color: '#3A3A3A', marginBottom: '0.5rem' }}>
          Welcome to the first wave of ZenOS builders.
        </p>
        <p style={{ color: '#666', fontSize: '0.95rem' }}>
          We'll be in touch as we roll out Alpha access. In the meantime,
          we're building something that will change how businesses are launched.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '560px', margin: '0 auto' }}>

      {/* Step 1 — Name + Email */}
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr', marginBottom: '1rem' }}>
        <div className="form-group" style={{ margin: 0 }}>
          <label htmlFor="name">Name *</label>
          <input
            id="name" name="name" type="text"
            value={form.name} onChange={handleChange}
            placeholder="Albany Zeno" required
          />
        </div>
        <div className="form-group" style={{ margin: 0 }}>
          <label htmlFor="email">Email *</label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handleChange}
            placeholder="you@company.com" required
          />
        </div>
      </div>

      {/* Step 2 — Business Type */}
      <div className="form-group">
        <label htmlFor="businessType">What are you building? *</label>
        <select
          id="businessType" name="businessType"
          value={form.businessType} onChange={handleChange} required
        >
          <option value="">Select business type</option>
          {BUSINESS_TYPES.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Step 3 — Stage */}
      <div className="form-group">
        <label htmlFor="stage">Where are you in your journey? *</label>
        <select
          id="stage" name="stage"
          value={form.stage} onChange={handleChange} required
        >
          <option value="">Select your stage</option>
          {STAGES.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Step 4 — Needs */}
      <div className="form-group">
        <label>What do you need most help with?</label>
        <div className="checkbox-group">
          {NEEDS.map(need => (
            <label key={need} className="checkbox-item">
              <input
                type="checkbox"
                checked={form.needs.includes(need)}
                onChange={() => handleCheckbox(need)}
              />
              {need}
            </label>
          ))}
        </div>
      </div>

      {/* Step 5 — Vision */}
      <div className="form-group">
        <label htmlFor="vision">Tell us about your vision <span style={{ fontWeight: 400, color: '#999' }}>(optional)</span></label>
        <textarea
          id="vision" name="vision"
          value={form.vision} onChange={handleChange}
          placeholder="Describe what you're building and why it matters..."
        />
      </div>

      {error && (
        <p style={{ color: '#C4614A', fontSize: '0.9rem', marginBottom: '1rem' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === 'submitting'}
        style={{ width: '100%' }}
      >
        {status === 'submitting' ? 'Submitting...' : 'Begin Your Build →'}
      </button>

      <p className="text-small" style={{ textAlign: 'center', marginTop: '1rem' }}>
        No spam. No pitch decks. Alpha access when it's ready.
      </p>
    </form>
  );
}
