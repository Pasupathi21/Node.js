import { environment } from '../../environments/environment';
import { DataBaseConfig } from '@monorepo-rest-api/core'
import { loginModel } from '@monorepo-rest-api/models'

export const database = new DataBaseConfig(environment).initiateDb()
export const Login = loginModel(database)



