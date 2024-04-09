import { PasswordService } from '../Service/passwordService.js'
import { logErrors } from '../middleWare/logErrors.js';
import pkg from 'crypto-js';
const { SHA256 } = pkg;

//const { sha256 } = require('crypto-js'); // Assuming sha256 is from crypto-js
//const PasswordService = require('./PasswordService'); // Adjust the path based on your file 

export class PasswordsController {
    async verifyPwd(req, res) {
        try {
            const hashedPassword=SHA256(req.body.password).toString()
            const passwordService = new PasswordService();
            const ans=await passwordService.verifyPassword(req.body.userName,hashedPassword);
            res.status(200).json(ans)
        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async addPwd(req, res) {

        try {
            const hashedPassword=SHA256(req.body.password).toString()
            console.log(hashedPassword)
            const passwordService = new PasswordService();
            await passwordService.addPassword(req.body.userName,hashedPassword);
            res.status(200).json({ status: 200 })
        }
        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async updatePwd(req, res) {

        try {

            const passwordService = new PasswordService();
            await passwordService.updatePassword(req.body);
            res.status(200).json({ status: 200 });

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }
    async deletePwd(req, res) {

        try {

            const passwordService = new PasswordService();
            await passwordService.deletePassword(req.params.userName);
            res.status(200).json({ status: 200 });

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

     
}