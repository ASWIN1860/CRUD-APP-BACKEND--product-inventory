//importing json-server package
const jsonServer=require('json-server')

//create a server instance 
const serverApp=jsonServer.create()

//creating routes/api endpoints for resourse in server 
const routes=jsonServer.router('db.json')

//creating json-server default middleware
const middleware=jsonServer.defaults()

//defining PORT number for server to run
const PORT=3000 || process.env.PORT

//configuring middleware and routes to server
serverApp.use(middleware)
serverApp.use(routes)


serverApp.listen(PORT,(err)=>{
    console.log("server running At:",PORT)
    console.log(err)
})