const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class niveles extends Model {}

    niveles.init(
        {
            descripcion: DataTypes.STRING,
           
        },
        {
            sequelize,
            modelName: 'niveles',
            tableName: 'niveles',
        }
    )
    return niveles
}
