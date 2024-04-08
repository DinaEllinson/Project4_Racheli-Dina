import { executeQuery } from './db.js';

import { getByValueQuery, deleteQuery,addQuery,updateQuery} from './queries.js'

export class CommentsService {

    async getCommentsById(id) {
        const queryComment = getByValueQuery("comments","postId");
        const result =  await executeQuery(queryComment, [id]);
        return result;
    }

    async addComment(commentItem) {

         const queryComment=addQuery("comments",[ "postId" ,"name","email","body"]);
         const result= await executeQuery(queryComment,[ commentItem.postId ,commentItem.name,commentItem.email,commentItem.body])
         return result;
    }
    async deleteComment(id) {

        const queryComment=deleteQuery("comments","id");
        const result= await executeQuery(queryComment,[id])
        return result;
   }
   async updateComment(commentItem) {

    const queryComment=updateQuery("comments",[ "name","body"]);
    const result= await executeQuery(queryComment,[commentItem.name,commentItem.body,commentItem.id])
    return result;
}

}