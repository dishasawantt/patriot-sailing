import Link from "next/link";
import type { Route } from "next";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/** Renders a plain <a> for external / tel: / mailto: / hash links,
 *  and a typed next/link for internal routes. */
export function SmartLink({ href, children, className, ...rest }: Props) {
  const external = /^(https?:|tel:|mailto:|#)/.test(href);
  if (external) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href as Route} className={className} {...rest}>
      {children}
    </Link>
  );
}
