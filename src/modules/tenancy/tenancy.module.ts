import { Global, Module, Provider, Scope } from '@nestjs/common';
import { TENANT_DATA_SOURCE } from './consts';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { DataSource } from 'typeorm';
import * as ormConfig from '../../tenants-orm.config';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const dataSourceProvider: Provider = {
  provide: TENANT_DATA_SOURCE,
  scope: Scope.REQUEST,
  useFactory: async (req: Request) => {
    const { tenantId } = req;
    const schema = `tenant_${tenantId}`;

    if (tenantId) {
      // create data source
      const dataSource = new DataSource({
        ...(ormConfig as SqlServerConnectionOptions),
        schema: schema,
      });

      return dataSource.initialize();
    }

    return null;
  },
  inject: [REQUEST],
  durable: true,
};

@Global()
@Module({
  providers: [dataSourceProvider],
  exports: [TENANT_DATA_SOURCE],
})
export class TenancyModule {}
