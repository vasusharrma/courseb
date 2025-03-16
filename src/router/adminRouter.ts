import express, { Request, Response } from 'express'
import Admins from '../model/adminModel'
import { tempAuth } from '../Auth/tempAuth';
import { adminSignUp } from '../controller/signup';
import { postCourse } from '../controller/postCourses';
import { getCourses } from '../controller/getCourses';

const adminRouter = express.Router();

adminRouter.post('/signup', adminSignUp);
adminRouter.post('/courses', tempAuth(Admins), postCourse);
adminRouter.get('/courses', tempAuth(Admins), getCourses);
export default adminRouter
