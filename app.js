import express from 'express';
//import { testRouter } from './Router/testRouter.js';
import { userRouter } from './Router/UserRouter.js'
import { todosRouter } from './Router/todosRouter.js'

//import {logErrors} from './middleware/logError.js'
const app = express();
app.use(express.json());
//app.use('/test', testRouter);
app.use('/users', userRouter);
// app.use('/users/:id/todos',todosRouter)
//app.use(logErrors);
app.listen(8080, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", 8080);
});