import { executeQuery } from './db.js';

import { getByValueQuery,addQuery} from './queries.js'

export class UserService {


    async getUserByName(userName) {

        const queryUser = getByValueQuery("users","userName");

        const result =  await executeQuery(queryUser, [userName]);

        return result;

    }

    async addUser(UserItem) {
         const queryUser=addQuery("users",["name","userName","phone","email","city"]);
         const result= await executeQuery(queryUser,[UserItem.name,UserItem.userName,UserItem.phone,UserItem.email,UserItem.city])
         return result;
    }

}