import { Dialect, Sequelize, Op, QueryOptions } from 'sequelize'
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
                dialect: this.connection.dbConfig.dialect,
                host: this.connection.dbConfig.dbHost,
                logging: this.connection.dbConfig.logging,
                operatorsAliases: {
                    $eq: Op.eq,
                    $ne: Op.ne,
                    $gte: Op.gte,
                    $gt: Op.gt,
                    $lte: Op.lte,
                    $lt: Op.lt,
                    $not: Op.not,
                    $in: Op.in,
                    $notIn: Op.notIn,
                    $is: Op.is,
                    $like: Op.like,
                    $notLike: Op.notLike,
                    $iLike: Op.iLike,
                    $notILike: Op.notILike,
                    $regexp: Op.regexp,
                    $notRegexp: Op.notRegexp,
                    $iRegexp: Op.iRegexp,
                    $notIRegexp: Op.notIRegexp,
                    $between: Op.between,
                    $notBetween: Op.notBetween,
                    $overlap: Op.overlap,
                    $contains: Op.contains,
                    $contained: Op.contained,
                    $adjacent: Op.adjacent,
                    $strictLeft: Op.strictLeft,
                    $strictRight: Op.strictRight,
                    $noExtendRight: Op.noExtendRight,
                    $noExtendLeft: Op.noExtendLeft,
                    $and: Op.and,
                    $or: Op.or,
                    $any: Op.any,
                    $all: Op.all,
                    $values: Op.values,
                    $col: Op.col
                }
            }
            )

    }

    async authDB(DB: Sequelize) {
        try{
            await DB.authenticate()
        }catch(error) {
            console.log('ERROR AUTH DB: ', error)
        }
    }

    async syncDB(collection: any) {
        try{
            await collection.sync({ force: false})
        }catch(error) {
            console.log('ERROR SYNC: ', error)
        }
    }
}

