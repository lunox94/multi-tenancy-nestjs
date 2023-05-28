import { DataSource, DataSourceOptions } from 'typeorm';
import * as ormConfig from './orm.config';

export default new DataSource({
  ...(ormConfig as DataSourceOptions),
});
