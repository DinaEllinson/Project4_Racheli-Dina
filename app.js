import express from 'express';
import { userRouter } from './Router/UserRouter.js'
import { todosRouter } from './Router/todosRouter.js'
import { postsRouter } from './Router/postsRouter.js';
import { commentsRouter } from './Router/commentsRouter.js';
//import {logErrors} from './middleware/logError.js'

const app = express();
app.use(express.json());
app.use('/users',todosRouter);
app.use('/users',postsRouter);
app.use('/users', userRouter);
app.use('/todos',todosRouter);
app.use('/users',commentsRouter);
app.use('/posts',postsRouter);
app.use('/comments',commentsRouter)

//app.use(logErrors);
app.listen(8080, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", 8080);
});