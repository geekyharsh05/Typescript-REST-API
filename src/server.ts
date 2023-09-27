import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './db/db.config';
import { router } from './routes/posts.routes';

dotenv.config();
dbConnect();
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/posts', router);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
