import { FaStore, FaUserCircle } from "react-icons/fa"
import { GiLighthouse } from "react-icons/gi"

export default function GlobalRightRail() {
  return (
    <div className="hidden h-[100vh] flex-col gap-8 bg-blue-700 p-4 text-white sm:flex">
      <GiLighthouse color="#fff" size={30} />
      <FaUserCircle color="#fff" size={30} />
      <FaStore color="#fff" size={30} />
    </div>
  )
}
