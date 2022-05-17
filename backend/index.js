const express = require ('express')
const app = express ()
const PORT = process.env.PORT || 5000;
const router = require('./router')
const cors = require ('cors')

app.use (express.urlencoded({extended:false}))

app.use(express.json())
app.use(cors())

app.use(router)
app.listen(PORT, ()=> console.log(`Server Nyala di port ${PORT}`))