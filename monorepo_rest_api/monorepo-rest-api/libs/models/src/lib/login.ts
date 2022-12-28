import { Sequelize, DataTypes, Model } from 'sequelize'
// import { LoginModel } from '@monorepo-rest-api/app-interface'


export function loginModel(sequelize: Sequelize) {
    return sequelize.define('Login', {
        userId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING(30),
            allowNull: false,
    
        },
        phoneNumber: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'user_login'
    })
    
}