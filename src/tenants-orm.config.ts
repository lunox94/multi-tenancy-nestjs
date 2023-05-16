import { join } from 'path';
import * as ormConfig from './orm.config';

module.exports = {
  ...ormConfig,
  database: 'global', // will change with tenant
  entities: [join(__dirname, './modules/tenanted/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './migrations/tenanted/*{.ts,.js}')],
};
