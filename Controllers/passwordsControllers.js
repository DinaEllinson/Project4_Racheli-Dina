import { passwordService } from '../Service/passwordService.js'

export class passwordController {
    

    async getPasswordById(req, res) {

        try {

            const passwordService = new passwordService();

            const resultItem = await passwordService.getPasswordById(req.params.id);

            res.status(200).json({ status: 200, data: resultItem });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    async addPassword(req, res) {

        try {

            const passwordService = new passwordService();

             await passwordService.addPassword(req.body);

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