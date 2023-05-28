import { ContextIdFactory, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AggregateByTenantContextIdStrategy } from './modules/tenancy/aggregate-by-tenant-context-id.strategy';
import { tenancyMiddleware } from './modules/tenancy/tenancy.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(tenancyMiddleware);
  await app.listen(3000);
}
bootstrap();

// see: https://docs.nestjs.com/fundamentals/injection-scopes#durable-providers
ContextIdFactory.apply(new AggregateByTenantContextIdStrategy());
