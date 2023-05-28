import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormConfig from './orm.config';
import { TenantsModule } from './modules/public/tenants/tenants.module';
import { TenancyModule } from './modules/tenancy/tenancy.module';
import { CatsModule } from './modules/tenanted/cats/cats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
      // synchronize: true,
    }),
    TenantsModule,
    TenancyModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
