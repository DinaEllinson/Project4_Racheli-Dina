import { executeQuery } from './db.js';

import { addCommentQuery,getCommentsByIdQuery,updateCommentQuery,deleteCommentQuery} from './commentsQuery.js'

export class CommentsService {

    async getCommentsById(id) {

        const queryComment = getCommentsByIdQuery();
        const result =  await executeQuery(queryComment, [id]);
        return result;

    }

    async addPost(commentItem) {

         const queryComment=addCommentQuery();
         const result= await executeQuery(queryComment,[commentItem.id,commentItem.postId,commentItem.name,commentItem.email,commentItem.body])
         return result;
    }
    async deletePost(id) {

        const queryComment=deleteCommentQuery();
        const result= await executeQuery(queryComment,[id])
        return result;
   }
   async updatePost(postItem) {

    const queryComment=updateCommentQuery();
    const result= await executeQuery(queryComment,[commentItem.name,commentItem.body,commentItem.id])
    return result;
}

}