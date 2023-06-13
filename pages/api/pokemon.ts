import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.body?.pokemon ?? "charizard"}`).then((res) =>
    res.json()
  )

  res.status(200).json(r)
}
