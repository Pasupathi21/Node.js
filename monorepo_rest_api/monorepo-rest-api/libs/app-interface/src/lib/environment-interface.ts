export interface DbConnection {
    dbName: string;
    dbHost: string;
    dbPort: number,
    userName: string;
    password: string;
}

export interface Environment {
    production: boolean;
    port: number;
    dbConfig: DbConnection

}