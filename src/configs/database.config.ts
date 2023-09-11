/* eslint-disable class-methods-use-this */
/** ***************** TypeORM Setup ***************** */
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export function databaseConfig(): TypeOrmModuleOptions {
//   return {
//     host: process.env.DB_HOST,
//     port: parseInt(process.env.DB_PORT, 10),
//     username: process.env.DB_USER_NAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     entities: [`${__dirname}/**/*.entity{.ts,.js}`]
//   };
// }

// export function databaseReplicationConfig(): TypeOrmModuleOptions {
//   return {
//     type: process.env.DB_DIALECT,
//     replication: {
//       master: {
//         host: process.env.DB_HOST_MASTER,
//         port: parseInt(process.env.DB_PORT_MASTER, 10),
//         username: process.env.DB_USER_NAME_MASTER,
//         password: process.env.DB_PASSWORD_MASTER,
//         database: process.env.DB_NAME_MASTER
//       },
//       slaves: [
//         {
//           host: process.env.DB_HOST_SLAVE,
//           port: parseInt(process.env.DB_PORT_SLAVE, 10),
//           username: process.env.DB_USER_NAME_SLAVE,
//           password: process.env.DB_PASSWORD_SLAVE,
//           database: process.env.DB_NAME_SLAVE
//         }
//       ]
//     },
//     extra: {
//       connectionLimit: parseInt(process.env.CONNECTION_LIMIT, 10),
//       connectTimeout: parseInt(process.env.CONNECT_TIMEOUT, 10)
//     },
//     // entities: [PayoutSummaryUploadEntity]
//     entities: [`${__dirname}/**/*.entity{.ts,.js}`]
//   };
// }

/** ***************** Mongoose Setup ***************** */
// import { Inject, Injectable, Request } from '@nestjs/common';
// import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
// import { REQUEST } from '@nestjs/core';
// import * as fs from 'fs';

// @Injectable()
// export class MongoDBService implements MongooseOptionsFactory {
//   constructor(@Inject(REQUEST) private readonly request: Request) {}

//   createMongooseOptions(): MongooseModuleOptions {
//     if (process.env.ENVIRONMENT === 'local.dev') {
//       return {
//         uri: process.env.MONGO_URL
//       };
//     }
//     return {
//       uri: process.env.MONGO_URL,
//       ssl: Boolean(process.env.MONGO_SSL),
//       minPoolSize: 10,
//       maxPoolSize: 25,
//       sslCA: String([
//         fs.readFileSync(
//           `${__dirname}/../../config/certificates/EnterpriseRootCA.cer`
//         )
//       ])
//     };
//   }
// }
