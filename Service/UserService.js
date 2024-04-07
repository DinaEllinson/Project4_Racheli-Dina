import { executeQuery } from './db.js';

import { addUserQuery,getUserByNameQuery} from './UserQuery.js'

export class UserService {

    /*async getUser() {

        const queryTest = getUserQuery();

        const result = await executeQuery(queryUser);

        return result;

    }*/

    async getUserByName(userName) {

        const queryUser = getUserByNameQuery();

        const result =  await executeQuery(queryUser, [userName]);

        return result;

    }

    async addUser(UserItem) {

         const queryUser=addUserQuery();
         const result= await executeQuery(queryUser,[UserItem.id,UserItem.name,UserItem.userName,UserItem.phone,UserItem.email,UserItem.city])
         return result;
    }

}