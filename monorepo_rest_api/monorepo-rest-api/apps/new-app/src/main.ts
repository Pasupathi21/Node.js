/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
// import * as AppServer from '@monorepo-rest-api/core';
import AppRoutes from './app/routers/routes';
import { AppServer } from '@monorepo-rest-api/core';
import { environment } from './environments/environment';
// const app = express();

const port = environment.port || 3333;
const middleWareObj = {
  staticFilePath: path.join(__dirname, 'assets')
}

const app = new AppServer(express, port);
app.setMiddleWare(middleWareObj);
const appRoutes = new AppRoutes(express).appRoutes()
app.setAppRoutes(appRoutes)
app.initiateServer();


