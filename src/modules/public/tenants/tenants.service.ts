import { Injectable } from '@nestjs/common';
import { Tenant } from './tenant.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTenantDto } from './dto/create-tenant.dto';
import * as ormConfig from '../../../tenants-orm.config';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

@Injectable()
export class TenantsService {
  constructor(
    @InjectRepository(Tenant)
    private readonly tenantRepository: Repository<Tenant>,
  ) {}

  async create(createTenantDto: CreateTenantDto): Promise<Tenant> {
    let tenant = new Tenant();
    tenant.name = createTenantDto.name;

    tenant = await this.tenantRepository.save(tenant);

    const schema = `tenant_${tenant.id}`;

    await this.tenantRepository.query(`CREATE SCHEMA "${schema}"`);

    const dataSource = new DataSource({
      ...(ormConfig as SqlServerConnectionOptions),
      schema: schema,
    });

    // run migrations on the new schema
    await dataSource.initialize();
    await dataSource.runMigrations();
    await dataSource.destroy();

    return tenant;
  }

  async findAll(): Promise<Tenant[]> {
    return this.tenantRepository.find();
  }
}
