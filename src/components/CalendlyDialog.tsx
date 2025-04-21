
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export const CalendlyDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[600px] p-0">
        <iframe
          src="https://calendly.com/andrea-wennecke/therapiesitzung"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};
