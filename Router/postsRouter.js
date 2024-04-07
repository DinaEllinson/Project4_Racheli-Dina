import express from "express";

import { PostsController } from '../Controllers/postController.js'

const postsRouter = express.Router();

const postsController = new PostsController()

postsRouter.get("/", postsController.getPosts)

postsRouter.post("/", postsController.addPost)

postsRouter.delete("/:postId", postsController.deletePost)

postsRouter.put("/", postsController.updatePost)

export {

    postsRouter

}