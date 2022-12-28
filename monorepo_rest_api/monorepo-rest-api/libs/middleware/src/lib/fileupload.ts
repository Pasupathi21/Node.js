import * as multer from 'multer'

class UploadFile {
    storage: any;
    constructor() {}

    multerMiddleware() {
        this.storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const path = `${__dirname}/../../../../file-storage/images`
                cb(null, path)
            },
            filename: (req, file, cb) => {
                const fileName = `${ new Date().toISOString() }-${file.originalname}` 
                cb(null, fileName)
            }
        });

        const mimeFilter = (req: any, file: any, cb: any) => {
            const mimeTypes = ['image/jpg', 'image/jpeg', 'image/png']
            if(mimeTypes.includes(file.mimetype)) {cb(null, true)}
            else { cb(null, false) }
        }

        return multer({
            storage: this.storage,
            fileFilter: mimeFilter
        })
    }

}

export default new UploadFile()