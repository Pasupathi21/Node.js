import { environment } from '../../environments/environment';
import { DataBaseConfig } from '@monorepo-rest-api/core'
import { loginModel } from '@monorepo-rest-api/models'

const database = new DataBaseConfig(environment)
const db = database.initiateDb()
database.authDB(db)
export const Login = loginModel(db)


//syncDB method creates table based on the schema if table alredy does not exists
database.syncDB(db)
export default db





