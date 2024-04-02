/*import { executeQuery } from './db.js';

import { addPasswordQuery,getPasswordByIdQuery} from './PasswordQuery.js'

export class PasswordService {

    async getPassword() {

        const queryTest = getPasswordQuery();

        const result = await executeQuery(queryPassword);

        return result;

    }

    async getPasswordByUserName(userName) {

        const queryPassword = getPasswordByUserName();
        const result =  await executeQuery(queryPassword, [userName]);
        return result;

    }

    async addPassword(passwordItem) {

         const queryPassword=addPasswordQuery();
         const result= await executeQuery(queryPassword,[passwordItem.id,passwordItem.userName,passwordItem.password])
         return result;
    }

}*/