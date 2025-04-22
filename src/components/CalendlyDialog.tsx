import React, { useEffect } from 'react';

// Replace with your Calendly URL
const CALENDLY_URL = 'https://calendly.com/your-username';

export const CalendlyDialog = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: CALENDLY_URL
      });
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
};
