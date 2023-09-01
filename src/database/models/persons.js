const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class persons extends Model { }

    persons.init(
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
            fechaCreacion: {
                field: 'fechaCreacion',
                type: DataTypes.DATE,
            },
            fechaActualizacion: {
                field: 'fechaActualizacion',
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'persons',
            tableName: 'persons',
            timestamps: true,
            updatedAt: 'fechaActualizacion',
            createdAt: 'fechaCreacion',
        }
    )
    return persons
}
