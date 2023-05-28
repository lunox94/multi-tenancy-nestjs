import dataSource from '../migrations.config';
import * as tenantOrmConfig from '../tenants-orm.config';
import { DataSource } from 'typeorm';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

async function runTenantMigrations() {
  await dataSource.initialize();

  const schemas = await dataSource.query('SELECT name FROM sys.schemas');

  for (const schema of schemas) {
    const { name }: { name: string } = schema;

    if (name.startsWith('tenant_')) {
      const newDataSource = new DataSource({
        ...(tenantOrmConfig as SqlServerConnectionOptions),
        schema: name,
      });

      await newDataSource.initialize();
      await newDataSource.runMigrations();
      await newDataSource.destroy();
    }
  }
}

runTenantMigrations();
