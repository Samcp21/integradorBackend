const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class collaborators extends Model { }

    collaborators.init(
        {
            idTipoDocumento: DataTypes.NUMBER,
            nombreCompletos: DataTypes.STRING,
            activo: DataTypes.NUMBER,
            numeroDocumento: DataTypes.STRING,
            nombres: DataTypes.STRING,
            apellidos: DataTypes.STRING,
            telefono: DataTypes.STRING,
            correo: DataTypes.STRING,
            password: DataTypes.STRING,
            direccion: DataTypes.STRING,
            idRol: DataTypes.NUMBER,
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
            modelName: 'collaborators',
            tableName: 'collaborators',
            timestamps: true,
            updatedAt: 'fechaActualizacion',
            createdAt: 'fechaCreacion',
        }
    )
    return collaborators
}
