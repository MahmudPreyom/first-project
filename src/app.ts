import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
import notFound from './app/middlwares/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

// application routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  // Promise.reject();
  const a = 10;
  res.send(a);
};

app.get('/', test);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

app.use(globalErrorHandler);
app.use(notFound);

export default app;
