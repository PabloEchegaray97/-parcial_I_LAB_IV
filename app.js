import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { router as authorRoutes } from './routes/authors.js'
import { router as bookRoutes } from './routes/books.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Registrar rutas

app.use('/api/authors', authorRoutes)
app.use('/api/books', bookRoutes)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true  
})
.then(() => console.log('MongoDB conectado'))
.catch(error => {
    console.log('Error al conectar con MongoDB', error.message);
    process.exit(1)
});

app.listen(process.env.PORT, () => { 
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
}
)


