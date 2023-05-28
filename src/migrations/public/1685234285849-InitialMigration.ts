import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1685234285849 implements MigrationInterface {
  name = 'InitialMigration1685234285849';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tenants" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_53be67a04681c66b87ee27c9321" DEFAULT NEWSEQUENTIALID(), "createdAt" datetimeoffset NOT NULL CONSTRAINT "DF_6ad29f70b20275660ba5a352455" DEFAULT getdate(), "updatedAt" datetimeoffset NOT NULL CONSTRAINT "DF_71478a9ce634ac96176da38e3ce" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_53be67a04681c66b87ee27c9321" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tenants"`);
  }
}
