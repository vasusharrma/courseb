import express from 'express'
import { userSignUp } from '../controller/signup';

const userRouter = express.Router();

userRouter.post('/signup', userSignUp);


export default userRouter


