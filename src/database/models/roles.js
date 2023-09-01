const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class roles extends Model { }

    roles.init(
        {
            description: DataTypes.NUMBER,

        },
        {
            sequelize,
            modelName: 'roles',
            tableName: 'roles',

        }
    )
    return roles
}
