import dynamic from "next/dynamic"
import { annotationsData, sparkChartData } from "../types/Types"
// https://github.com/Shopify/polaris-viz/issues/1425
const DonutChart = dynamic(() => import("@shopify/polaris-viz").then((module) => module.DonutChart), { ssr: false })
const LineChart = dynamic(() => import("@shopify/polaris-viz").then((module) => module.LineChart), { ssr: false })
const SparkLineChart = dynamic(() => import("@shopify/polaris-viz").then((module) => module.SparkLineChart), {
  ssr: false,
})

const numberStyles = {
  fontWeight: 600,
}

const renderInnerValueContent = (values: any) => {
  const { activeValue = 0, totalValue = 0 } = values
  const activeValuePercentage = activeValue ? `${((activeValue / totalValue) * 100).toFixed(1)}%` : null

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {activeValuePercentage && (
        <p
          style={{
            fontSize: 20,
            margin: 0,
            ...numberStyles,
          }}
        >
          {activeValuePercentage}
        </p>
      )}
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {activeValue ? (
          <span
            style={{
              fontSize: 15,
              margin: 0,
              ...numberStyles,
            }}
          >{`${activeValue} of ${totalValue}`}</span>
        ) : (
          <>
            <span>Total:</span>
            <p
              style={{
                fontSize: 20,
                ...numberStyles,
              }}
            >
              {totalValue}
            </p>
          </>
        )}
      </p>
    </div>
  )
}

export const DonutPieChart: React.FC<{ data: sparkChartData }> = (props: { data: sparkChartData }) => {
  const { data } = props
  return (
    <div className="donut-wrapper">
      <DonutChart
        data={data as any}
        legendPosition="left"
        theme="Light"
        renderInnerValueContent={renderInnerValueContent}
      />
    </div>
  )
}

export const SparkChart: React.FC<{
  data: sparkChartData
  accessibilityLabel: string
}> = (props: { data: sparkChartData; accessibilityLabel: string }) => {
  const { data, accessibilityLabel } = props
  return (
    <div className="spark-wrapper min-h-[40px]">
      <SparkLineChart theme="Light" accessibilityLabel={accessibilityLabel} data={data as any} />
    </div>
  )
}

export const ALineChart: React.FC<{
  data: sparkChartData
  annotations?: annotationsData
}> = (props: { data: sparkChartData; annotations?: annotationsData }) => {
  const { data, annotations } = props
  return <LineChart theme="Light" annotations={annotations} data={data as any} />
}
