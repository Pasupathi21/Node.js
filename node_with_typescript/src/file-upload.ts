import { Request, Response } from 'express'

class FileUpload {

    async uploadFile(req: Request, res: Response) {
        console.log(req)
        res.send({
            message: ''
        })
    }
}

export default new FileUpload()