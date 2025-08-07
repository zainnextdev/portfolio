import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';

interface ContactFormEmailProps {
  senderEmail: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ senderEmail, message }) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}>
      <Container style={{ backgroundColor: '#ffffff', border: '1px solid #eee', borderRadius: '5px', padding: '20px', margin: '40px auto', maxWidth: '600px' }}>
        <Section>
          <Heading style={{ color: '#333' }}>You received a new message from your contact form</Heading>
          <Text style={{ color: '#555', fontSize: '16px' }}>{message}</Text>
          <Hr style={{ borderColor: '#eee', margin: '20px 0' }} />
          <Text style={{ color: '#888', fontSize: '14px' }}>The sender's email is: {senderEmail}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;