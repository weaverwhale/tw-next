import "../styles/tailwind.css"
import { AppProps } from "next/app"
import GlobalLayout from "components/GlobalLayout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  )
}

export default MyApp
