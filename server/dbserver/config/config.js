// require('dotenv').config();

const {Op} = require('sequelize');
const keys = require('../../keys');

module.exports = {
    development: {
        host: keys.pgHost,
        port: keys.pgPort,
        username: keys.pgUser,
        password: keys.pgPassword,
        database: keys.pgDatabase,

        dialect: 'postgres',
        operatorsAliases: Op,

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },

        // // Use a different storage type. Default: sequelize
        // "migrationStorage": "json",
        //
        // // Use a different file name. Default: sequelize-meta.json
        // "migrationStoragePath": "sequelizeMeta.json",
        //
        // // Use a different table name. Default: SequelizeMeta
        // "migrationStorageTableName": "sequelize_meta",
        //
        //
        // // Use a different storage. Default: none
        // "seederStorage": "json",
        // // Use a different file name. Default: sequelize-data.json
        // "seederStoragePath": "sequelizeData.json",
        // // Use a different table name. Default: SequelizeData
        // "seederStorageTableName": "sequelize_data",

        define: {
            freezeTableName: true,
            underscored: true,
            // timestamps: false,
            timestamps: true,
            // // I don't want createdAt
            // createdAt: false,
            //
            // // I want updatedAt to actually be called updateTimestamp
            // updatedAt: 'updateTimestamp',
            //
            // // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
            // deletedAt: 'destroyTime',
            paranoid: true,
            defaultScope: {
                where: {
                },
                limit: 10
            },
        },
    },
};


// {
//     "development": {
//     "username": "postgres",
//         "password": "admin",
//         "database": "intern_site",
//         "host": "127.0.0.1",
//         "protocol": "postgres",
//         "port": 5432,
//         "dialect": "postgres"
// },
//     "test": {
//     "username": "root",
//         "password": null,
//         "database": "database_test",
//         "host": "127.0.0.1",
//         "dialect": "mysql"
// },
//     "production": {
//     "username": "root",
//         "password": null,
//         "database": "database_production",
//         "host": "127.0.0.1",
//         "dialect": "mysql"
// }
// }
