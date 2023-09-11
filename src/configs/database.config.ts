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
//     type: 'mysql',
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
