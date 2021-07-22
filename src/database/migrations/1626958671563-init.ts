import {MigrationInterface, QueryRunner} from "typeorm";

export class init1626958671563 implements MigrationInterface {
    name = 'init1626958671563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
