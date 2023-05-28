import { DataSource } from 'typeorm';
import * as ormConfig from './tenants-orm.config';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

export default new DataSource({
  ...(ormConfig as SqlServerConnectionOptions),
  schema: '2CA9433E-F36B-1410-8C39-0004700E8433',
});
