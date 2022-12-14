import Koa from 'koa'
import apiRouter from './api'


const app = new Koa()

app.use(apiRouter.routes())

app.listen(8080)