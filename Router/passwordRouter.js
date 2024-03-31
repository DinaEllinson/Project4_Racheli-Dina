import express from "express";

import { passwordsController } from '../Controllers/passwordsController.js'

const passwordsRouter = express.Router();

const passwordsController = new CommentsController()

commentsRouter.get("/", passwordsController.getComments)

commentsRouter.post("/", passwordsController.addComment)

commentsRouter.delete("/", passwordsController.deleteComment)

commentsRouter.put("/", passwordsController.updateComment)

export {

    commentsRouter

}