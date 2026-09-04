
import express from 'express';
import{userRouter} from './modules/index.js';
import { golbalErrorHandler } from './middleware/index.js';
import { PORT } from "./config.js";
import { connectionDB } from './DB/connection.db.js';
const app = express();
const port = PORT;


connectionDB(app,PORT)


// app.use('/auth', authRouter);
// app.use('/blog', blogRouter);
app.use('/user', userRouter);


app.get('/', (req, res) => {
  res.send('welcome to my website');
});

app.all('{/*dummy}', (req, res) => {
  res.status(404).json({ msg: 'Page not found' });
});

app.use(golbalErrorHandler);

