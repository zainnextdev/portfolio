// src/components/Contact/index.tsx
'use client';
import React, { useState } from 'react';
import { Section } from '@/components/Section';
import { SectionHeader, SectionTitle, SectionSubtitle } from '@/components/SectionHeader';
import { ContactGrid, ContactInfo, InfoBlock, ContactForm, Input, Textarea, SubmitButton } from './Contact.styles';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || 'Something went wrong.'}`);
      }
    } catch (e) {
      setStatus('Error: Could not connect to the server.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    }
  };

  return (
    <Section id="contact">
      <SectionHeader>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Have a project in mind or want to connect? I&apos;m always open to discussing new ideas and opportunities.
        </SectionSubtitle>
      </SectionHeader>
      <ContactGrid>
        <ContactInfo>
          <h3>Contact Details</h3>
          <p style={{color: '#888888', marginBottom: '2rem'}}>
            Feel free to reach out to me directly through any of the following channels. I look forward to hearing from you.
          </p>
          <InfoBlock>
            <FaEnvelope />
            <span>zain.nextdev@gmail.com</span>
          </InfoBlock>
          <InfoBlock>
            <FaWhatsapp />
            <span>+92 323 6748502</span>
          </InfoBlock>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <h3>Send Me a Message</h3>
          <Input type="email" name="email" placeholder="Your Email Address" required />
          <Textarea name="message" placeholder="Your Message" required />
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
        </ContactForm>
      </ContactGrid>
    </Section>
  );
};

export default Contact;