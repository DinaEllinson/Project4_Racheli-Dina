import { PasswordService } from '../Service/passwordService.js'

export class PasswordsController {
    async verifyPwd(req, res) {
        try {
            const passwordService = new PasswordService();
            const ans=await passwordService.verifyPassword(req.params.userName,req.params.password);
            res.status(200).json(ans)
        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            //next(err)

        }

    }

    async addPwd(req, res) {

        try {

            const passwordService = new PasswordService();
            await passwordService.addPassword(req.body);
            res.status(200).json({ status: 200 })
        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    async updatePwd(req, res) {

        try {

            const passwordService = new PasswordService();
            await passwordService.updatePassword(req.body);
            res.status(200).json({ status: 200 });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }
    async deletePwd(req, res) {

        try {

            const passwordService = new PasswordService();
            await passwordService.deletePassword(req.params.userName);
            res.status(200).json({ status: 200 });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

     
}