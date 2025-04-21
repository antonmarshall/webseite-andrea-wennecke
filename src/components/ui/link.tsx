import * as React from "react"
import { Link as RouterLink } from "react-router-dom"
import { cn } from "@/lib/utils"

const Link = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, href, ...props }, ref) => {
  // If it starts with #, use regular anchor tag
  if (href?.startsWith('#')) {
    return (
      <a
        ref={ref}
        href={href}
        className={cn("no-underline", className)}
        {...props}
      >
        {children}
      </a>
    )
  }

  // Otherwise use RouterLink
  return (
    <RouterLink
      ref={ref}
      to={href || '/'}
      className={cn("no-underline", className)}
      {...props}
    >
      {children}
    </RouterLink>
  )
})
Link.displayName = "Link"

export { Link } 