import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const port = 5000

app.listen(port,()=>{
    console.log("Server connected on port ", port)
})