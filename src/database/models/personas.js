const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class personas extends Model {}

    personas.init(
        {
            idTipoDocumento: DataTypes.NUMBER,
            nombreCompletos: DataTypes.STRING,
            activo: DataTypes.NUMBER,
            numeroDocumento: DataTypes.STRING,
            nombres: DataTypes.STRING,
            apellidos: DataTypes.STRING,
            telefono: DataTypes.STRING,
            correo: DataTypes.STRING,
            direccion: DataTypes.STRING,
            ubigeo: DataTypes.STRING,
            idProv: DataTypes.NUMBER,
            idDepa: DataTypes.NUMBER,
            idDist: DataTypes.NUMBER,
        },
        {
            sequelize,
            modelName: 'personas',
            tableName: 'personas',
        }
    )
    return personas
}
