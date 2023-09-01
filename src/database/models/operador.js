const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class operador extends Model {}

    operador.init(
        {
            tipoDocumento: DataTypes.STRING,
            numeroDocumento: DataTypes.STRING,
            telefono: DataTypes.STRING,
            correo: DataTypes.STRING,
            nombreCompletos: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
            status: DataTypes.NUMBER,
        },
        {
            sequelize,
            modelName: 'operador',
            tableName: 'operador',
        }
    )
    return operador
}
