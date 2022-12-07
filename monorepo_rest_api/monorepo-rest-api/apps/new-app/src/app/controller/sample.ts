import { Request, Response } from 'express'
import { Login } from '../database/db'
class Sample {
    constructor() {
        //
    }

    getOne(req: Request, res: Response) {
        res.json(
            {
                message: 'WORKING FINE...'
            }
        )
    }

    getTwo(req: Request, res: Response) {
        res.json({
            message: 'WORKING 2 FINE...'
        })
    }

    async create(req: Request, res: Response) {
        try {

            const response = await Login.create({
                firstName: 'testuser',
                lastName: 'One',
                email: 'test@gmail.com',
                phone: 3436778556,
                password: 'sdsfttrgb'
            })
            res.json({
                data: response
            })
        } catch (error) {
            res.json({
                message: error
            })
        }
    }
}

export default new Sample()