
import { Router } from 'express'
import { sequelize } from '../models'

const router = Router()

router.get('/demo-busqueda', async (req, res) => {
  const producto = req.query.producto as string
  const resultado = await sequelize.query(
    'SELECT * FROM Products WHERE name = :producto',
    { replacements: { producto } }
  )
  res.json(resultado)
})

export default router
