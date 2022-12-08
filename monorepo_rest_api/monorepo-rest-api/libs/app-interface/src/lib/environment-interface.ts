export interface DbConnection {
    dbName: string;
    dbHost: string;
    dbPort: number,
    userName: string;
    password: string;
    dialect: string | any;
    logging: boolean;
}

export interface Environment {
    production: boolean;
    port: number;
    dbConfig: DbConnection

}