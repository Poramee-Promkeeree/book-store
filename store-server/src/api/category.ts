import Router from 'koa-router'
import db from '../db'
const router = new Router()

router
  .get('/', async (ctx, next) => {            
    ctx.body = await db('category').select('*').orderBy('id')
  })

  
export default router