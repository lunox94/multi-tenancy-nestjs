import { join } from 'path';
import * as ormConfig from './orm.config';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

module.exports = {
  ...ormConfig,
  entities: [join(__dirname, './modules/tenanted/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './migrations/tenanted/*{.ts,.js}')],
} as SqlServerConnectionOptions;
