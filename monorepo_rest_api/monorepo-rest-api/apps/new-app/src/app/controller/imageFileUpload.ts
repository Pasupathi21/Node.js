import { PhotModel } from "../database/db";
import { Request, Response } from "express";
import { environment } from "../../environments/environment";

class FileUpload {

    async uploadFile(req: Request, res: Response) {
        try {

            console.log(req)
            const formObj = {} as Record<string, any>;
            const imageFolder = req.file.destination.split('/')[1]
            formObj.imageName = req.file.filename;
            formObj.filePath = `${environment.staticFileUrl}/${imageFolder}/${req.file.filename}`
            const response = await PhotModel.create({ ...formObj })
            res.send({
                message: 'Successfully image uploaded',
                data: response
            })
        } catch (e) {
            res.send({
                message: e.message
            })
        }
    }

    async getFile(req: Request, res: Response) {

    }
}

export default new FileUpload()