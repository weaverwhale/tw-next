import { useEffect } from "react"
import GlobalHead from "components/GlobalHead"
import GlobalHeader from "components/GlobalHeader"
import GlobalRightRail from "components/GlobalRightRail"

// @ts-ignore
export default function GlobalLayout({ children }) {
  useEffect(() => {
    document.body.className = "sm:overflow-hidden"
  })

  return (
    <div className="bg-blue-700">
      <GlobalHead />
      <div className="h-full w-full sm:flex sm:overflow-hidden">
        <GlobalHeader />
        <main className="h-[100vh] w-full overflow-x-auto bg-white sm:mt-2 sm:rounded-t-md">{children}</main>
        <GlobalRightRail />
      </div>
    </div>
  )
}
