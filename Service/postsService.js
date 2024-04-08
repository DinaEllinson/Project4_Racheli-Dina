import { executeQuery } from './db.js';

import { getByValueQuery, deleteQuery,addQuery,updateQuery} from './queries.js'

export class PostsService {

    async getPostsById(id) {

        const queryPost = getByValueQuery("posts","usersId");
        const result =  await executeQuery(queryPost, [id]);
        return result;

    }

    async addPost(postItem) {
         const queryPost=addQuery("posts",["usersId","title","body"]);
         const result= await executeQuery(queryPost,[postItem.userId,postItem.title,postItem.body])
         return result;
    }
    async deletePost(id) {

        const queryPost=deleteQuery("posts","id");
        const result= await executeQuery(queryPost,[id])
        return result;
   }
   async updatePost(postItem) {
    const queryPost=updateQuery("posts",["title","body"]);
    const result= await executeQuery(queryPost,[postItem.title,postItem.body,postItem.id])
    return result;
}

}