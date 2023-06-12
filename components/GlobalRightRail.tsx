import { FaStore, FaUserCircle } from "react-icons/fa"
import { GiLighthouse, GiSpermWhale } from "react-icons/gi"

// @ts-ignore
export default function GlobalRightRail({ storeName }) {
  return (
    <div className="hidden h-[100vh] flex-col gap-8 bg-blue-700 p-4 text-white sm:flex">
      <GiLighthouse color="#fff" size={30} />
      <GiSpermWhale color="#fff" size={30} />
      <FaUserCircle color="#fff" size={30} />
      <FaStore color="#fff" size={30} />
      {/* @ts-ignore */}
      {storeName && <p style={{ writingMode: "vertical-lr", lineHeight: 1.9 }}>{storeName}</p>}
    </div>
  )
}
