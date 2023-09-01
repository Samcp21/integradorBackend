const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class historicoReferencia extends Model {}

    historicoReferencia.init(
        {
            idOperador: DataTypes.NUMBER,
            idLocation: DataTypes.NUMBER,
            numberLead: DataTypes.NUMBER,
        },
        {
            sequelize,
            modelName: 'historicoReferencia',
            tableName: 'historicoReferencia',
        }
    )
    return historicoReferencia
}
