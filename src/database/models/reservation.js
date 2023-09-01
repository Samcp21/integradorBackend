const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class reservation extends Model { }

    reservation.init(
        {
            idCollaborator: DataTypes.NUMBER,
            idPerson: DataTypes.NUMBER,
            salePrice: DataTypes.STRING,
            activo: DataTypes.NUMBER,
            pass: DataTypes.STRING,
            hotel: DataTypes.STRING,
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
            modelName: 'reservation',
            tableName: 'reservation',
            timestamps: true,
            updatedAt: 'fechaActualizacion',
            createdAt: 'fechaCreacion',
        }
    )
    return reservation
}
