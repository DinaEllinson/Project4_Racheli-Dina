import express from 'express';
import { testRouter } from './router/testRouter.js';
import { userRouter } from './router/userRouter.js'
import {logErrors} from './middleware/logError.js'
const app = express();
app.use(express.json());
//app.use('/test', testRouter);
//app.use('/user', userRouter);
//app.use(logErrors);
app.listen(8080, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", 8080);
});