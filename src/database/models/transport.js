const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class transport extends Model { }

    transport.init(
        {
            capacity: DataTypes.NUMBER,
            activo: DataTypes.NUMBER,
            plate: DataTypes.STRING,

        },
        {
            sequelize,
            modelName: 'transport',
            tableName: 'transport',

        }
    )
    return transport
}
