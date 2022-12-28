import { Express } from "express"
import User from '../controller/sample'

export default class AppRoutes {
    route: Express;
    constructor(app) {
       this.route = app.Router();
    }

    appRoutes() {
        // this.route.get('/user', Sample.getOne).get('/new-demo', Sample.getTwo)
        this.route.post('/user-register', User.createUser)

        this.route.post('/upload-file', )

        return this.route
    }
}