import { useEffect } from "react"
import GlobalHead from "components/GlobalHead"
import GlobalHeader from "components/GlobalHeader"
import GlobalRightRail from "components/GlobalRightRail"

// @ts-ignore
export default function GlobalLayout({ children }) {
  useEffect(() => {
    document.body.className = "sm:overflow-hidden"
  })

  const storeName = "madisonbraids"

  return (
    <div className="bg-nav">
      <GlobalHead />
      <div className="h-full w-full sm:flex sm:overflow-hidden">
        <GlobalHeader />
        <main className="w-full overflow-x-auto bg-white sm:mt-4 sm:h-[calc(100vh-1rem)] sm:rounded-t-md">
          {children}
        </main>
        <GlobalRightRail storeName={storeName} />
      </div>
    </div>
  )
}
