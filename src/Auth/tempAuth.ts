import { Request, Response, NextFunction } from 'express'
import z from 'zod'
import { Model } from 'mongoose'

const headerSch = z.object({
  username: z.string(),
  password: z.string()
});

const tempAuth = (ModelType: Model<any>) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {


    const parseHeader = headerSch.safeParse(req.headers);
    if (!parseHeader.success) {
      res.status(500).json({ success: false, err: parseHeader.error.format() });
      return;
    }
    const { username, password } = parseHeader.data;

    try {

      const isValidAdmin = await ModelType.findOne({ username });

      if (!isValidAdmin) {
        res.status(401).json({ success: false, msg: "Invalid username or password" });
        return;
      }

      if (isValidAdmin.password != password) {
        res.status(401).json({ success: false, msg: "Invalid username or password" });
      }

      next();

    }

    catch (err) {

      console.error((err as Error).message);
      res.status(500).json({ success: false, error: "internal server error" });

    }
  }
}

export { tempAuth };
