const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class tourReserva extends Model { }

    tourReserva.init(
        {
            idTours: DataTypes.NUMBER,
            activo: DataTypes.NUMBER,
            idReservation: DataTypes.NUMBER,
            idTransport: DataTypes.NUMBER,
            passenger: DataTypes.NUMBER,
            fechaReserva: DataTypes.STRING,
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
            modelName: 'tourReserva',
            tableName: 'tourReserva',
            timestamps: true,
            updatedAt: 'fechaActualizacion',
            createdAt: 'fechaCreacion',
        }
    )
    return tourReserva
}
