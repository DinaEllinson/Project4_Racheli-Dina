import express from "express";

import { passwordsController } from '../Controllers/commentsController.js'

const passwordsRouter = express.Router();

const passwordsController = new CommentsController()

commentsRouter.get("/:id/posts/:postId/comments", commentsController.getComments)

commentsRouter.post("/:id/posts/:postId/comments", commentsController.addComment)

commentsRouter.delete("/:id/posts/:postId/comments/:commentId", commentsController.deleteComment)

commentsRouter.put("/:id/posts/:postId/comments", commentsController.updateComment)

export {

    commentsRouter

}