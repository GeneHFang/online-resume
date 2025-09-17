import { Router, Request, Response } from "express";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const db = (req.app as any).db;
    const resumes = await db.all('SELECT * FROM resume');
    res.json(resumes);
});

export default router;