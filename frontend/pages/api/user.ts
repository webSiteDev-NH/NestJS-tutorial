import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// /api/user
// result → {"name":"John Doe"}
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' })
}
