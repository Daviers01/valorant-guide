"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const links = pathname?.split("/");
  return (
    <div className="py-5">
      {links?.map((link, index) => {
        if (index === 0) {
          return (
            <div key={link + index} className="inline">
              <Link href={"./"}>Home</Link>
              <span className="separator mx-1"> / </span>
            </div>
          );
        }
        return (
          <div key={link + index} className="inline">
            <Link href={link} className="inline">
              {link.charAt(0).toUpperCase() + link.substring(1)}
            </Link>

            {index !== links.length - 1 ? (
              <span className="separator mx-1"> / </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
