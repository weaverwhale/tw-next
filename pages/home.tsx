import { GiSpermWhale } from "react-icons/gi"

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
      <div className="flex flex-wrap">
        {Array.from({ length: 3 }).map((_, i) => (
          <GiSpermWhale color="#000" size={130} key={i} />
        ))}
      </div>
      <h1 className="mt-10 text-6xl font-bold">
        Welcome to TW{" "}
        <a className="text-blue-700 hover:underline" href="https://nextjs.org">
          Next
        </a>{" "}
        demo!
      </h1>
      <p className="mt-3 text-2xl">
        Visit the{" "}
        <a href="/summary" className="text-blue-700 hover:underline">
          Summary Page
        </a>{" "}
        to see the demo!
      </p>
    </div>
  )
}
