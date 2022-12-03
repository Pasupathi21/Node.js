import { Express } from "express"
import Sample from '../controller/sample'

export default class AppRoutes {
    route: Express;
    constructor(app) {
       this.route = app.Router();
    }

    appRoutes() {
        this.route.get('/', Sample.getOne)
        
        return this.route
    }
}