import Image from "next/image"
import React from "react"
import { Button } from "components/Button/Button"

export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  render() {
    return (
      <div id="page">
        <div
          id="border"
          style={{
            paddingLeft: "4em",
            paddingRight: "4em",
            paddingTop: "4em",
          }}
        >
          <div
            className="flex h-full flex-wrap items-center justify-center gap-20"
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <div
              style={{
                width: "400px",
                textAlign: "center",
                lineHeight: "normal",
                color: "#1A5378",
              }}
              className="flex flex-col items-center gap-10"
            >
              <p style={{ fontWeight: "bold", fontSize: "50px" }}>Something went wrong!</p>
              <p style={{ color: "#1A5378", textAlign: "center", lineHeight: "normal" }}>
                That&#39;s not supposed to happen. We&#39;ve alerted our engineers about this. Please log in and try
                again.
              </p>
              <div className="flex flex-row items-center gap-4">
                <LoginButton />
                <ReloadButton />
              </div>
            </div>
            <div style={{ width: "400px" }}>
              <Image src="/errorwhale.png" alt="Error!" width="500" height="500" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const ReloadButton = () => {
  const onclick = () => {
    window.location.reload()
  }

  return (
    <Button intent="primary" href="#" onClick={onclick}>
      Reload
    </Button>
  )
}

const LoginButton = () => {
  return (
    <Button intent="secondary" href="#" onClick={ReloadButton}>
      Log In
    </Button>
  )
}
