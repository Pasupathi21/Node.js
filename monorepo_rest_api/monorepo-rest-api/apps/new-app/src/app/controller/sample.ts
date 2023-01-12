import { Request, Response } from "express"
import { UserModel } from "../database/db"
class User {
    constructor() {

    }

    async createUser(req: Request, res: Response) {
        const response = await UserModel.create(req.body);  
        res.json({
            data: response
        })
       
    }
}

export default new User