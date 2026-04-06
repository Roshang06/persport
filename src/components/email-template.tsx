import * as React from 'react';
import { Html, Body, Container, Text, Heading } from '@react-email/components';

interface EmailTemplateProps {
  firstName: string;
  message?: string;
  email?: string;
}

export function EmailTemplate({ firstName, message, email }: EmailTemplateProps) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading as="h1">Welcome, {firstName}!</Heading>
          {message && <Text>{message}</Text>}
          {email && <Text>Contact: {email}</Text>}
        </Container>
      </Body>
    </Html>
  );
}