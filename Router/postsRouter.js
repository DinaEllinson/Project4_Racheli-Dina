import express from "express";

import { PostsController } from '../Controllers/postController.js'

const postsRouter = express.Router();

const postsController = new PostsController()

postsRouter.get("/:id/posts", postsController.getPosts)

postsRouter.post("/:id/posts", postsController.addPost)

postsRouter.delete("/:id/posts/:postId", postsController.deletePost)

postsRouter.put("/:id/posts", postsController.updatePost)

export {

    postsRouter

}