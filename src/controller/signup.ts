import { Request, Response } from 'express'
import z from 'zod'
import Users from '../model/userModel'
import Admins from '../model/adminModel'


const signupSch = z.object({
  username: z.string(),
  password: z.string(),
});

const adminSignUp = async (req: Request, res: Response): Promise<void> => {

  const response = signupSch.safeParse(req.body);

  if (!response.success) {
    res.status(500).json({ error: response.error.format() });
    return;
  }

  const { username, password } = response.data;

  try {
    const data = await Admins.create({ username, password });
    res.status(200).json({ success: true, msg: "Admin Created Successfully" });

  }
  catch (err) {
    res.status(500).json({ success: false, error: err })
    process.exit(1)
  }

}

const userSignUp = async (req: Request, res: Response): Promise<void> => {

  const response = signupSch.safeParse(req.body);

  if (!response.success) {
    res.status(500).json({ error: response.error.format() });
    return;
  }

  const { username, password } = response.data;

  try {
    const data = await Users.create({ username, password });
    res.status(200).json({ success: true, msg: "User Created Successfully" });

  }
  catch (err) {
    res.status(500).json({ success: false, error: err })
    process.exit(1)
  }
}

export { adminSignUp, userSignUp }
