import express from 'express'
import axios from 'axios'
import storage from 'node-persist'
import { Text2imageHandler } from './services/txt2image.service.js'

const app = express()
app.use(express.json())
const port = 3000

const baseUrl = 'http://127.0.0.1:7860'
await storage.init()
await storage.clear()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/txt2img', async (req, res) => {
  const result = await axios.post(`${baseUrl}/sdapi/v1/txt2img`, req.body)
  res.send(await Text2imageHandler(result.data))

  //console.log(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
