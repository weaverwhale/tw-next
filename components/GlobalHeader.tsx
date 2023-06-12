import { cva } from "class-variance-authority"
import { GiWhaleTail } from "react-icons/gi"
import { twMerge } from "tailwind-merge"

const sharedClass = "p-4 sm:pb-0"
const headerButton = cva(["justify-center", "inline-flex", "items-center", "text-center", sharedClass])

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
]

export default function GlobalHeader() {
  return (
    <header className="sticky bg-blue-700 text-white">
      <a href="/" className={`${sharedClass} inline-block align-middle sm:flex`}>
        <GiWhaleTail color="#fff" size={30} />
      </a>
      {navItems.map((navItem) => (
        <a key={navItem.label} href={navItem.href} className={twMerge(headerButton())}>
          {navItem.label}
        </a>
      ))}
    </header>
  )
}
