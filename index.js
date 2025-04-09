import express from 'express'
const app = express()

app.get("/",function(req,res) {
    res.send("Hello From Express to Github Actions")
})

const port = 3000
app.listen(port,function() {
    console.log(`Server is running on port ${port}`)
})