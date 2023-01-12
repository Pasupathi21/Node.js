import { Express, Router } from 'express';
export  class AppServer {
  app: Express | any;
  server: Express;
  port: number;

  constructor(express: Express | any, port: number) {
    this.app = express;
    this.server = express();
    this.port = port;
    
  }

  setMiddleWare(middleWareParams: Record<string, string>) {
    try {
      this.server.use(this.app.json());
      this.server.use(this.app.urlencoded({ extended: true }));
      this.server.use(middleWareParams.staticUrl, this.app.static(middleWareParams.fileStoragePath))
      console.log('Static')
    } catch (error) {
      console.log('Error', error);
    }
  }

  setAppRoutes(routes: Router) {
    try{
      this.server.use(routes)
    }catch(error) {
      console.log('Error', error)
    }
  }

  initiateServer() {
    try {
      this.server.listen(this.port, () => {
        console.log(`PORT listening on http://localhost:${this.port}`);
      });
    } catch (error) {
      console.log('Error', error);
    }
  }
}
