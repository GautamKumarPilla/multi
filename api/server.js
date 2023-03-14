const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(function(req,res,next){
  console.log('request recieved');
  next();
})
server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})