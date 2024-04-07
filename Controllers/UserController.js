import { UserService } from '../Service/UserService.js'

export class UserController {
    

    async getUserByName(req, res) {

        try {

            const userService = new UserService();

            const resultItem = await userService.getUserByName(req.query.userName);

            res.status(200).json( resultItem );

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    async addUser(req, res) {

        try {

            const userService = new UserService();

             await userService.addUser(req.body);

            res.status(200).json({ status: 200 });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    /*async deleteUser(req, res) {

        try {

            const userService = new UserService();

            await userService.deleteUser(req.params.id);

            res.status(200).json({ status: 200, data: req.params.id });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }*/

}