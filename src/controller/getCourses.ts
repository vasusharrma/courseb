import { Request, Response } from 'express'
import Courses from '../model/coursesModel'

const getCourses = async (req: Request, res: Response): Promise<void> => {

  try {

    const data = await Courses.find({});
    res.status(200).json({ success: true, data });

  }

  catch (err) {
    console.error((err as Error).message);
    res.status(500).json({ success: false, msg: "internal server fail" });
    process.exit(1);
  }

}


export { getCourses }
