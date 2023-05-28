import { Body, Controller, Get, Post } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { CreateTenantDto } from './dto/create-tenant.dto';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {
    this.tenantsService = tenantsService;
  }

  @Get()
  async findAll() {
    return this.tenantsService.findAll();
  }

  @Post()
  async create(@Body() createTenantDto: CreateTenantDto) {
    return this.tenantsService.create(createTenantDto);
  }
}
