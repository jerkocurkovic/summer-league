"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Page } from "@/components/NavBar";

const baseClass =
  "uppercase whitespace-nowrap font-abeezee text-base rounded-3xl px-2 py-3 text-brand-black-500 hover:bg-brand-orange-500 hover:shadow-md";

const MainNav = ({ pages }: { pages: Page[] }) => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex items-center justify-center">
      <ul className="flex gap-4">
        {pages.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>
              <span
                className={cn(
                  baseClass,
                  {
                    "bg-brand-red-300 text-white pointer-events-none":
                      pathname === href,
                  }
                )}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;