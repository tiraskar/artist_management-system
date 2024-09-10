import express from 'express';
const app = express();
import helmet from 'helmet';
// import cors from 'cors';
import appRoutes from './routes/app.routes.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import auth from './middlewares/auth.js';

//for database connection
import con from './config/database.js';

// app.use(cors({
//   origin: "*",
//   credentials: true,
// }));

app.use(helmet());
app.use(express.json());


app.use(auth);
app.use(appRoutes);

app.use(globalErrorHandler);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

export default app;