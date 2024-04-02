import { CommentsService } from '../Service/commentsService.js'

export class CommentsController {

    async getComments(req, res) {

        try {

            const commentsService = new CommentsService();

            const resultItem = await commentsService.getCommentsById(req.params.postId);

            res.status(200).json({ status: 200, data: resultItem });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    async addComment(req, res) {

        try {

            const commentsService = new CommentsService();

             await commentsService.addComment(req.body, req.params.postId,);

            res.status(200).json({ status: 200 });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    async deleteComment(req, res) {

        try {

            const commentsService = new CommentsService();

            await commentsService.deleteComment(req.params.commentId);

            res.status(200).json({ status: 200, data: req.params.commentId });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }
    async updateComment(req, res) {

        try {

            const commentsService = new CommentsService();

            await commentsService.updateComment(req.body);

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