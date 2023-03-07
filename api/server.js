const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(function(req,res,next){
  setTimeout(()=>{
    console.log('request received');
    next();
  },4000)
})
server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})

// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.use(router)
// server.listen(4000, () => {
//   console.log('JSON Server is running')
// })