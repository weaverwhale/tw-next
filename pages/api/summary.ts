import { NextApiRequest, NextApiResponse } from "next"
import { summaryData } from "../../summary-data"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(summaryData)
}
