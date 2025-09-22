// src/server.ts
import express from 'express';
import { initDB } from './db';
import resumeRouter from './routes/resume';

const app = express();
app.use(express.json());

// Attach routes
app.use('/api/resume', resumeRouter);

const PORT = process.env.PORT || 4000;

initDB().then((db: any) => {
  (app as any).db = db;

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
