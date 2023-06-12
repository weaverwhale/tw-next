import { useEffect, useState } from "react"
import RenderIfVisible from "react-render-if-visible"
import { SparkChart } from "components/Charts"
import GlobalHead from "components/GlobalHead"
import GlobalHeader from "components/GlobalHeader"
import { SourceIcons } from "components/SourceIcons"
import { DictatedData, formattedDictatedService, IServiceMap, ServiceMap } from "../types/Types"

// @ts-ignore
const groupByKey = (list, key) =>
  list.reduce(
    // @ts-ignore
    (hash, obj) => ({
      ...hash,
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    }),
    {}
  )

const groupData = (data: any) => {
  data.map((item: any) => {
    item.service = (item.services?.length > 0 && item.services[0]).toString().toLowerCase()
    ;["current", "previous"].map((period: string) => {
      item.charts[period] = item.charts[period]?.map((metric: any) => ({
        key: metric.x,
        value: metric.y,
      }))
    })
  })

  return groupByKey(data, "service")
}

const toNumber = (num: number | string) => (typeof num == "number" ? num : parseFloat(num))
const toCurrency = (num: string) =>
  parseFloat(num).toLocaleString("en-US", { style: "currency", currency: "USD" }).replace(".00", "")

const formatNumber = (num: number | string) => {
  return toNumber(num).toFixed(2).replace(".00", "")
}

const formatValue = (item: formattedDictatedService) => {
  return `${
    item.type === "currency" ? `${toCurrency(formatNumber(item.values.current))}` : formatNumber(item.values.current)
  }${item.type === "percent" ? "%" : ""}`
}

const formatSparkChartData = (item: formattedDictatedService) => {
  return [{ data: item.charts.current }, { isComparison: true, data: item.charts.previous }]
}

export default function About() {
  const [dictatedData, setDictatedData] = useState({} as DictatedData)

  useEffect(() => {
    async function fetchData() {
      const d = await fetch("/api/summary").then((res) => res.json())
      // @ts-ignore
      setDictatedData(groupData(d.metrics))
    }

    fetchData()
  }, [])

  return (
    <div className="p-2">
      <GlobalHead />
      <GlobalHeader />

      <main className="p-2">
        <h1 className="text-3xl font-bold">Summary</h1>

        {Object.keys(dictatedData).map((g: string) => {
          const group = dictatedData[g as IServiceMap] as DictatedData[IServiceMap]
          const filteredGroup = group.filter((item) => item.values?.current !== 0 && item.delta)
          const plainTextService = ServiceMap[g as IServiceMap]

          return (
            filteredGroup.length > 0 && (
              <div key={g} className="mt-4">
                <div>
                  <h3 className="mb-4 mt-10 flex items-center gap-2 text-xl capitalize">
                    <SourceIcons source={g as IServiceMap} /> {plainTextService}
                  </h3>
                </div>
                <div className="grid w-full flex-wrap items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {group.map((item) => {
                    const delta = toNumber(item.delta)
                    const deltaIsPositive =
                      (delta > 0 && (item.positiveComparison > 0 || !item.positiveComparison)) ||
                      (delta < 0 && item.positiveComparison < 0)

                    return delta ? (
                      <div key={item.id} className="w-full rounded border p-4 sm:max-w-sm">
                        <div className="mb-4">
                          <div className="flex justify-between">
                            <div>
                              <strong>{item.title}</strong>
                            </div>

                            <div className="flex items-center gap-1">
                              <div className={deltaIsPositive ? "text-[green]" : "text-[red]"}>
                                {delta === 0 ? "-" : delta > 0 ? "↑" : "↓"}
                              </div>
                              <span>{formatNumber(item.delta)}%</span>
                            </div>
                          </div>
                          {item.tip && <p className="text-xs">{item.tip}</p>}
                          <p className="my-2 text-xl font-black">{formatValue(item)}</p>
                        </div>
                        {item.charts?.current?.length > 0 && (
                          <RenderIfVisible defaultHeight={60} stayRendered={true}>
                            <SparkChart accessibilityLabel={""} data={formatSparkChartData(item)} />
                          </RenderIfVisible>
                        )}
                      </div>
                    ) : (
                      ""
                    )
                  })}
                </div>
              </div>
            )
          )
        })}
      </main>
    </div>
  )
}
