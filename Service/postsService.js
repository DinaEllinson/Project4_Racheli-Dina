import { executeQuery } from './db.js';

import { addPostQuery,getPostsByIdQuery,deletePostQuery,updatePostQuery} from './postsQuery.js'

export class PostsService {

    async getPostsById(id) {

        const queryPost = getPostsByIdQuery();
        const result =  await executeQuery(queryPost, [id]);
        return result;

    }

    async addPost(postItem) {

         const queryPost=addPostQuery();
         const result= await executeQuery(queryPost,[postItem.id,postItem.userId,postItem.title,postItem.body])
         return result;
    }
    async deletePost(id) {

        const queryPost=deletePostQuery();
        const result= await executeQuery(queryPost,[id])
        return result;
   }
   async updatePost(postItem) {

    const queryPost=updatePostQuery();
    const result= await executeQuery(queryPost,[postItem.title,postItem.body,postItem.id])
    return result;
}

}