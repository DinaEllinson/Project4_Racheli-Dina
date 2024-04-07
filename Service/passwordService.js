import { executeQuery } from './db.js';

import { verifyPasswordQuery,addPasswordQuery, updatePasswordQuery,deletePasswordQuery} from './passwordsQuery.js'

export class PasswordService {
    async verifyPassword(name,pwd) {
       // const hashedPassword = sha256(pwd);
        const queryPassword=verifyPasswordQuery();
        const result= await executeQuery(queryPassword,[name,pwd])
        return result;
   }
    async addPassword(passwordItem) {
        const hashedPassword = sha256(passwordItem.password);
         const queryPassword=addPasswordQuery();
         const result= await executeQuery(queryPassword,[passwordItem.userName,hashedPassword])
         return result;
    }
    async updatePassword(passwordItem) {
        const hashedPassword = sha256(passwordItem.password);
        const queryPassword=updatePasswordQuery();
        const result= await executeQuery(queryPassword,[hashedPassword,passwordItem.userName])
        return result;
   }
   async deletePassword(userName) {
    const queryPassword=deletePasswordQuery();
    const result= await executeQuery(queryPassword,[userName])
    return result;
}

}