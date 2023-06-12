import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const headerButton = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "text-center",
    "p-2"
  ]
)

const navItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  }
]

export default function GlobalHeader() {
  return (
    <header>
      {navItems.map((navItem) => (
        <a key={navItem.label} href={navItem.href} className={twMerge(headerButton())}>
          {navItem.label}
        </a>
      ))}
    </header>
  )
}