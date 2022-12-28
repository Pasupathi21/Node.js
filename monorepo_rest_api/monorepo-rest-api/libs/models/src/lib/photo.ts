import { Sequelize, DataTypes } from "sequelize";

export function photoModel(sequelize: Sequelize) {

    return sequelize.define('Photo', {
        photoId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        imageName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filePath: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

}