import multer from 'multer'

export function multerConfig() {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            // Set the file stored path in cb function
            cb(null, 'file-storage/images')
        },
        filename: (req, file, cb) => {
            cb(null, `${new Date().toISOString() }-${file.originalname}`.replace(/:/g, '-'))
        }
    })

    return multer({
        storage: storage
    })
}