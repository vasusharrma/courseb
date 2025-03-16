import Courses from '../model/coursesModel'
import { Request, Response } from 'express'
import z from 'zod'

const courseSch = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  imageLink: z.string()
})

const postCourse = async (req: Request, res: Response): Promise<void> => {

  const parseCourses = courseSch.safeParse(req.body);

  if (!parseCourses.success) {
    res.status(500).json({ error: parseCourses.error.format() })
    return;
  }

  const { title, description, price, imageLink } = parseCourses.data;

  try {

    const data = await Courses.create({ title, description, price, imageLink });

    res.status(200).json({ success: true, msg: "Course created successfully", courseId: data.id });

  }
  catch (err) {
    console.error((err as Error).message);
    res.status(500).json({ success: false, msg: "internal server error" });
  }

}

export { postCourse }
