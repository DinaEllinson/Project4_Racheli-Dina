import { executeQuery } from './db.js';

import { addPasswordQuery, updatePasswordQuery,deletePasswordQuery} from './passwordsQuery.js'

export class PasswordService {

    async addPassword(passwordItem) {
         const queryPassword=addPasswordQuery();
         const result= await executeQuery(queryPassword,[passwordItem.userName,passwordItem.password])
         return result;
    }
    async updatePassword(passwordItem) {
        const queryPassword=updatePasswordQuery();
        const result= await executeQuery(queryPassword,[passwordItem.password,passwordItem.userName])
        return result;
   }
   async deletePassword(userName) {
    const queryPassword=deletePasswordQuery();
    const result= await executeQuery(queryPassword,[userName])
    return result;
}

}