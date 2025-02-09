import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.router';
import blogRouter from './routes/blog.router';
import { notFoundHandler } from './middleware/not-found';
import { errorHandler } from './middleware/error-handler';
import cookieParser from 'cookie-parser';
import requestLogger from './middleware/requestLogger';
import { pino } from "pino";

dotenv.config();

export const logger = pino({ name: "server start" });
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

// CORS Middleware
const corsOptions = {
  origin: process.env.APP_ENV == 'developement' ? '*' : process.env.ORIGIN,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
// JSON Middleware & Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

// Request Logger
app.use(requestLogger)

// Main Routes


app.use('/api/auth', authRouter);
app.use('/api/blog', blogRouter);
// Not Found Middleware
app.use(notFoundHandler);

// Error Handling Middleware
app.use(errorHandler);
// app.use('/',(req,res) => {
//   res.send('Hello World')
// })
const server=app.listen(PORT, () => {
  logger.info(`Listening on PORT ${PORT}`);
});
const address = server.address();
console.log(address,"address")
