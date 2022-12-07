import { Sequelize, DataTypes } from 'sequelize'

export function loginModel(sequelize: Sequelize) {
    return sequelize.define('Login', {
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
            defaultValue: Date.now(),
            allowNull: true
        },
        updateddt: {
            type: DataTypes.DATE,
            defaultValue: Date.now(),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'user_login'
    })
    
}