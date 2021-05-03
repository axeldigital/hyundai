import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      return res.status(400).json({ message: '`email y contraseña` requeridos' })
    }
    //if (typeof parseInt(id.toString()) !== 'number') {
    //  return res.status(400).json({ message: '`id` must be a number' })
    //}
    const results = await query(
      `
      SELECT *
      FROM usuarios
      WHERE email = ?
      `,
      email
    )
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler