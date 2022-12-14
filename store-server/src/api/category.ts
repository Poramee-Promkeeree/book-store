import Router from 'koa-router'

const router = new Router()

router
  .get('/', async (ctx, next) => {            
    ctx.body = [
        {title: 'fantasy'},
        {title: 'computer'},
    ]
  })

  export default router