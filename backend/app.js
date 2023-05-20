import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import IndexRoutes from './routes/index.routes.js';
import areasRoutes from './routes/area.routes.js'
import './database.js'

const app = express();

// Settings
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Middlewares
app.use(morgan('dev'))
app.use(cors())

// Routes
app.use(IndexRoutes)
app.use('/api/areas',areasRoutes)

export default app;