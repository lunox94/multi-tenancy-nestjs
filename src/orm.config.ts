import { join } from 'path';

module.exports = {
  type: 'sqlserver',
  host: 'localhost',
  port: 1433,
  username: 'SA',
  password: 'Test@1234',
  database: 'global',
  entities: [join(__dirname, './modules/public/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './migrations/public/*{.ts,.js}')],
};
