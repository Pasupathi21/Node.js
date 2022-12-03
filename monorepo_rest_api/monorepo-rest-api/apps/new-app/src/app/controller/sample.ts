import { Request, Response } from 'express'

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
}

export default new Sample()