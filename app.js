import express from 'express';
//import { testRouter } from './Router/testRouter.js';
import { UserRouter } from './Router/UserRouter.js'
//import {logErrors} from './middleware/logError.js'
const app = express();
app.use(express.json());
//app.use('/test', testRouter);
app.use('/users', UserRouter);
//app.use(logErrors);
app.listen(8080, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", 8080);
});