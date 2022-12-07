import { Express } from "express"
import Sample from '../controller/sample'

export default class AppRoutes {
    route: Express;
    constructor(app) {
       this.route = app.Router();
    }

    appRoutes() {
        this.route.get('/demo', Sample.getOne).get('/new-demo', Sample.getTwo)
        this.route.post('/register', Sample.create)
        return this.route
    }
}