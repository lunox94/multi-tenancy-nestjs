import { join } from 'path';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

module.exports = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'SA',
  password: 'Test@1234',
  database: 'global',
  options: {
    trustServerCertificate: true,
  },
  logging: true,
  autoLoadEntities: true,
  entities: [join(__dirname, './modules/public/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './migrations/public/*{.ts,.js}')],
} as SqlServerConnectionOptions;
