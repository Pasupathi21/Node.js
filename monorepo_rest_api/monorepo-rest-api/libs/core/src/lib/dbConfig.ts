import { Sequelize } from 'sequelize'
import { Environment } from '@monorepo-rest-api/app-interface'

export class DataBaseConfig {
    connection;
    constructor(connetion: Environment) {
        //Empty
        this.connection = connetion
    }

    initiateDb(): Sequelize {
        return new Sequelize(
            this.connection.dbConfig.dbName, 
            this.connection.dbConfig.userName, 
            this.connection.dbConfig.password,
            {
                dialect: 'mysql',
                host: this.connection.dbConfig.dbHost
            }
            )

    }
}

