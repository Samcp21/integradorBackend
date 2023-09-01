require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` })

module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    timezone: '-05:00',
    dialect: process.env.DB_TYPE,
    // seed
    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds',
    // migrations
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations',
    define: {
        timestamps: false,
    },
    query: { raw: true },
}
