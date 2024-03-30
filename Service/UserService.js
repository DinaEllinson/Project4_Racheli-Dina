import { executeQuery } from './db.js';

import { addUserQuery,getUserByIdQuery} from './UserQuery.js'

export class TestService {

    /*async getUser() {

        const queryTest = getUserQuery();

        const result = await executeQuery(queryUser);

        return result;

    }*/

    async getUserById(id) {

        const queryUser = getUserByIdQuery();

        const result =  await executeQuery(queryUser, [id]);

        return result;

    }

    async addUser(UserItem) {

         const queryUser=addUserQuery();
         const result= await executeQuery(queryUser,[UserItem])
         return result;
    }

}