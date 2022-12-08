import { Environment } from '@monorepo-rest-api/app-interface';

export const environment: Environment = {
  production: false,
  port: 2000,
  dbConfig: {
    dbName: 'workspace_demo',
    dbHost: 'localhost',
    dbPort: 3306,
    userName: 'root',
    password: '',
    dialect: 'mysql',
    logging: false
  }
};
