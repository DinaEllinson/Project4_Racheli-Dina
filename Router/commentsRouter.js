import express from "express";

import { CommentsController } from '../Controllers/commentsController.js'

const commentsRouter = express.Router();

const commentsController = new CommentsController()

commentsRouter.get("/", commentsController.getComments)

commentsRouter.post("/", commentsController.addComment)

commentsRouter.delete("/:commentId", commentsController.deleteComment)

commentsRouter.put("/", commentsController.updateComment)

export {

    commentsRouter

}