import { PostsService } from '../Service/postsService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class PostsController {

    async getPosts(req, res) {

        try {

            const postsService = new PostsService();

            const resultItem = await postsService.getPostsById(req.query.userId);
            
            res.status(200).json({ resultItem });

        }
        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async addPost(req, res) {

        try {
            const postsService = new PostsService();
            await postsService.addPost(req.body);
            res.status(200).json({ status: 200 });
        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async deletePost(req, res) {

        try {

            const postsService = new PostsService();

            await postsService.deletePost(req.params.postId);

            res.status(200).json({ status: 200, data: req.params.postId });

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }
    async updatePost(req, res) {

        try {

            const postsService = new PostsService();

            await postsService.updatePost(req.body);

            res.status(200).json({ status: 200 });

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

}