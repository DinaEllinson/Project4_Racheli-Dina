import { CommentsService } from '../Service/commentsService.js'
import { logErrors } from '../middleWare/logErrors.js';
export class CommentsController {

    async getComments(req, res) {

        try {

            const commentsService = new CommentsService();
            const resultItem = await commentsService.getCommentsById(req.query.postId,req.query);
            res.status(200).json({  resultItem });

        }
        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async addComment(req, res) {

        try {

            const commentsService = new CommentsService();

             await commentsService.addComment(req.body);

            res.status(200).json({ status: 200 });

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async deleteComment(req, res) {

        try {

            const commentsService = new CommentsService();

            await commentsService.deleteComment(req.params.commentId);

            res.status(200).json({ status: 200});

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }
        

    }
    async updateComment(req, res) {

        try {

            const commentsService = new CommentsService();

            await commentsService.updateComment(req.body);

            res.status(200).json({ status: 200 });

        }
        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

}