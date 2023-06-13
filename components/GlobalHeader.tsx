import { cva } from "class-variance-authority"
import { useRouter } from "next/router"
import { GiWhaleTail } from "react-icons/gi"
import { twMerge } from "tailwind-merge"

const sharedClass = "p-4 sm:pb-0"
const headerButton = cva(["justify-center", "inline-flex", "items-center", "text-center", sharedClass])

const navItems = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Summary",
    href: "/summary",
  },
  {
    label: "About",
    href: "/about",
  },
]

export default function GlobalHeader() {
  const router = useRouter()

  return (
    <header className="sticky top-0 flex bg-blue-700 text-white sm:flex-col sm:items-start">
      {navItems.map((navItem) =>
        navItem.href === "/home" ? (
          <a
            key={navItem.label}
            href={navItem.href}
            className={`${sharedClass} inline-block align-middle sm:flex ${
              router.pathname === navItem.href && "underline"
            }`}
          >
            <GiWhaleTail color="#fff" size={30} />
          </a>
        ) : (
          <a
            key={navItem.label}
            href={navItem.href}
            className={twMerge(headerButton(), router.pathname === navItem.href && "underline")}
          >
            {navItem.label}
          </a>
        )
      )}
    </header>
  )
}
