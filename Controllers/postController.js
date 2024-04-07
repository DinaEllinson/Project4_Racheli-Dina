import { PostsService } from '../Service/postsService.js'

export class PostsController {

    async getPosts(req, res) {

        try {

            const postsService = new PostsService();

            const resultItem = await postsService.getPostsById(req.query.userId);

            res.status(200).json({ resultItem });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    async addPost(req, res) {

        try {
            const postsService = new PostsService();
            await postsService.addPost(req.body);
            res.status(200).json({ status: 200 });
        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    async deletePost(req, res) {

        try {

            const postsService = new PostsService();

            await postsService.deletePost(req.params.postId);

            res.status(200).json({ status: 200, data: req.params.postId });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }
    async updatePost(req, res) {

        try {

            const postsService = new PostsService();

            await postsService.updatePost(req.body);

            res.status(200).json({ status: 200 });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

}