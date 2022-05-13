import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
// require('dotenv').config();
import UserRouter from './router/user';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (_req: Request, res: Response): Response => {
  return res.status(200).send('Room 4 - Gabriel, Israel, Mariana');
});

app.use('/users', UserRouter);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});