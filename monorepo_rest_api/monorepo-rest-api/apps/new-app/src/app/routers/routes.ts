import { Express } from "express"
import User from '../controller/sample'
import FileUpload from '../controller/imageFileUpload'
import * as customMiddleware  from '@monorepo-rest-api/middleware'
import { environment  } from "../../environments/environment";
export default class AppRoutes {
    route: Express;
    constructor(app) {
       this.route = app.Router();
    }

    appRoutes() {
        const multerParams ={
            rootFolder: environment.fileStoragePath,
            subFolder: 'images'
        }
        const fileUpload = new customMiddleware.UploadFile()
        .multerMiddleware(multerParams)
        
        // this.route.get('/user', Sample.getOne).get('/new-demo', Sample.getTwo)
        this.route.post('/user-register', User.createUser)

        this.route.post('/upload-file', fileUpload.single('file'), FileUpload.uploadFile)

        return this.route
    }
}