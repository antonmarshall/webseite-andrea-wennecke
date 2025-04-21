import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getPath } from "@/lib/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

export const Link = ({ href, children, className, isExternal, ...props }: LinkProps) => {
  // Check if the link is external (starts with http:// or https://) or is a mailto: or tel: link
  const isExternalLink = isExternal || 
    href.startsWith('http://') || 
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');

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

  // For internal links, use React Router's Link with the correct base path
  const internalPath = href.startsWith('#') ? href : href.replace(/^\//, '');
  return (
    <RouterLink
      to={internalPath}
      className={cn("hover:underline", className)}
      {...props}
    >
      {children}
    </RouterLink>
  );
}; 