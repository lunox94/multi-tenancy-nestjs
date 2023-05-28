import { MigrationInterface, QueryRunner } from 'typeorm';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

export class InitialMigration1685276559273 implements MigrationInterface {
  name = 'InitialMigration1685276559273';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const { schema } = queryRunner.connection
      .options as SqlServerConnectionOptions;

    await queryRunner.query(
      `CREATE TABLE "${schema}"."cats" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_611e3c0a930b4ddc1541422864c" DEFAULT NEWSEQUENTIALID(), "createdAt" datetimeoffset NOT NULL CONSTRAINT "DF_b38198340a682a598ee66e7bb30" DEFAULT getdate(), "updatedAt" datetimeoffset NOT NULL CONSTRAINT "DF_00785bfce93dc3f47983c899e34" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_611e3c0a930b4ddc1541422864c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const { schema } = queryRunner.connection
      .options as SqlServerConnectionOptions;

    await queryRunner.query(`DROP TABLE "${schema}"."cats"`);
  }
}
