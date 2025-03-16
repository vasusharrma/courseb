import express, { Request, Response } from 'express'
import adminRouter from './router/adminRouter';
import userRouter from './router/userRouter';
import { connectDb } from './config/database';

const app = express();

app.use(express.json());
const PORT = 5600;

app.use('/admin', adminRouter);
app.use('/user', userRouter);

app.get('/', (req: Request, res: Response): void => {
  res.send("Homepage");
})

connectDb()

app.listen(PORT, (): void => {
  console.log(`app is live on port ${PORT}`)
})



