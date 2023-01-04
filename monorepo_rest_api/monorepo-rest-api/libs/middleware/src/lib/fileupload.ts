import * as multer from 'multer'
import { Environment } from '@monorepo-rest-api/app-interface';

export class UploadFile {
    storage: any;
    constructor() {}

    multerMiddleware(params: Record<string, unknown>) {
        this.storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const path = `${params.rootFolder}/${params.subFolder}`
                cb(null, path)
            },
            filename: (req, file, cb) => {
                // In windows we need to replace the ':' to '-'
                const splitName = file.originalname.split('.')
                const fileName = `${splitName[0]}-${ new Date().toISOString() }.${splitName[1]}`.replace(/:/g, '-') 
                cb(null, fileName)
            }
        });

        const mimeFilter = (req: any, file: any, cb: any) => {
            console.log(Number(req.headers["content-length"]))
            const mimeTypes = ['image/jpg', 'image/jpeg', 'image/png']
            const sizeValidation = ((Number(req.headers["content-length"]) / (1024 **2)) < 5)
            if(mimeTypes.includes(file.mimetype) && sizeValidation) {cb(null, true)}
            else { 
                const error = new Error('Please upload valid file type and size less than 3MB')
                cb(error.message, false) 
            }
        }

        return multer({
            storage: this.storage,
            fileFilter: mimeFilter,
            limits: {}
        })
    }

}
