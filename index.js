import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5000
const DB_URL = 'mongodb+srv://user:1234@cluster0.bnltz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

const startApp = async () => {
  try {
    await mongoose.connect(
      DB_URL,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
    console.log('Database connected')

    app.listen(PORT, () => console.log('Server started on port ' + PORT))
  } catch (e) {
    console.log(e)
  }
}

startApp()