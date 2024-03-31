import express from "express";

import { CommentsController } from '../Controllers/commentsController.js'

const commentsRouter = express.Router();

const commentsController = new CommentsController()

commentsRouter.get("/:id/posts/:postId/comments", commentsController.getComments)

commentsRouter.post("/:id/posts/:postId/comments", commentsController.addComment)

commentsRouter.delete("/:id/posts/:postId/comments/:commentId", commentsController.deleteComment)

commentsRouter.put("/:id/posts/:postId/comments", commentsController.updateComment)

export {

    commentsRouter

}