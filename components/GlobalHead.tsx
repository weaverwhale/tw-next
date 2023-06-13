import Head from "next/head"

export default function GlobalHead() {
  return (
    <Head>
      <meta property="og:url" content="https://next-enterprise.vercel.app/" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>TW Next.js Demo</title>
    </Head>
  )
}
