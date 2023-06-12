import { useEffect, useState } from "react"
import GlobalHead from "components/GlobalHead"
import GlobalHeader from "components/GlobalHeader"

export default function About() {
  const [summaryData, setSummaryData] = useState({} as any)

  useEffect(() => {
    async function fetchData() {
      const d = await fetch("/api/summary").then((res) => res.json())
      console.log(d)
      setSummaryData(d)
    }

    fetchData()
  }, [])

  return (
    <div>
      <GlobalHead />
      <GlobalHeader />
      <h1>Summary</h1>
    </div>
  )
}
