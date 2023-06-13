import { useEffect, useState } from "react"
import PokemonImage from "../components/PokemonImage"
import Spinner from "../components/Spinner"

export default function ThirdParty() {
  const [data, setData] = useState({} as any)

  useEffect(() => {
    async function fetchData() {
      const d = await fetch("/api/pokemon", {
        method: "POST",
      }).then((res) => res.json())
      // @ts-ignore
      setData(d)
    }

    fetchData()
  }, [])

  return (
    <div className="flex min-h-full flex-col items-center justify-center p-4">
      {Object.keys(data).length > 0 ? (
        <>
          <h1 className="text-3xl font-bold capitalize">{data.name}</h1>
          <div className="grid grid-cols-4">
            {Object.keys(data.sprites).map((key) => {
              const sprite = data.sprites[key as keyof typeof data.sprites]
              return typeof sprite === "string" ? (
                <PokemonImage key={key} image={sprite} pokemon={data} />
              ) : (
                sprite &&
                  Object.keys(sprite).map((k) => {
                    const spr = sprite[k as keyof typeof data.sprites]
                    return typeof sprite === "string" ? (
                      <PokemonImage key={k} image={spr} pokemon={data} />
                    ) : (
                      Object.keys(spr).map((l) => {
                        const im = spr[l as keyof typeof data.sprites]
                        return im?.front_default && <PokemonImage key={l} image={im.front_default} pokemon={data} />
                      })
                    )
                  })
              )
            })}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}
