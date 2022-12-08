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
        firstName: {
            type: DataTypes.STRING(15),
            allowNull: false,
            // required: true
        },
        lastName: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        createddt: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: true
        },
        updateddt: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'user_login'
    })
    
}