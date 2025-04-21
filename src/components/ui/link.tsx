import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

export const Link = ({ href, children, className, isExternal, ...props }: LinkProps) => {
  // Check if the link is external (starts with http:// or https://)
  const isExternalLink = isExternal || href.startsWith('http://') || href.startsWith('https://');

  if (isExternalLink) {
    return (
      <a
        href={href}
        className={cn("hover:underline", className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // For internal links, use React Router's Link
  return (
    <RouterLink
      to={href}
      className={cn("hover:underline", className)}
      {...props}
    >
      {children}
    </RouterLink>
  );
}; 