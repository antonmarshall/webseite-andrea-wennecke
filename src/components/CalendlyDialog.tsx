import React from 'react';

// Replace with your Calendly URL
const CALENDLY_URL = 'https://calendly.com/anton-marshall03/30min?month=2025-05';

export const CalendlyDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
