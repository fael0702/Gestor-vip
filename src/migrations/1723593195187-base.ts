import { MigrationInterface, QueryRunner } from "typeorm";

export class Base1723593195187 implements MigrationInterface {
    name = 'Base1723593195187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produtos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP DEFAULT now(), "titulo" character varying NOT NULL, "servidor" character varying NOT NULL, "duracao" integer NOT NULL, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."pedidos_status_enum" AS ENUM('A', 'P', 'C')`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP DEFAULT now(), "valor" numeric(10,2) NOT NULL, "taxa" numeric(10,2) NOT NULL, "status" "public"."pedidos_status_enum" NOT NULL DEFAULT 'P', "jogador_id" integer, "produtoId" integer, CONSTRAINT "REL_6ac8bcfa93f7f86f584a641463" UNIQUE ("produtoId"), CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jogadores" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP DEFAULT now(), "steam_id" character varying NOT NULL, "nickname" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_47e3895364f0c1590ec6f47e75f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP DEFAULT now(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying, "data_nascimento" date, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "token_invalido" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP DEFAULT now(), "token" character varying NOT NULL, "exp" integer NOT NULL, "usuario_id" integer, CONSTRAINT "PK_0798dc320722f096ddf2764b91e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "password_reset" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP DEFAULT now(), "email" character varying NOT NULL, "codigo" character varying NOT NULL, CONSTRAINT "PK_8515e60a2cc41584fa4784f52ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pagamentos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP DEFAULT now(), "titulo" character varying NOT NULL, "link" character varying NOT NULL, "valor" numeric(10,2) NOT NULL, CONSTRAINT "PK_0127f8bc8386b0e522c7cc5a9fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_d8a3dceb7f40604493d7c3d6793" FOREIGN KEY ("jogador_id") REFERENCES "jogadores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_6ac8bcfa93f7f86f584a641463c" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "token_invalido" ADD CONSTRAINT "FK_5e47c26c6e5da96b3ffb30e9b22" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "token_invalido" DROP CONSTRAINT "FK_5e47c26c6e5da96b3ffb30e9b22"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_6ac8bcfa93f7f86f584a641463c"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_d8a3dceb7f40604493d7c3d6793"`);
        await queryRunner.query(`DROP TABLE "pagamentos"`);
        await queryRunner.query(`DROP TABLE "password_reset"`);
        await queryRunner.query(`DROP TABLE "token_invalido"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "jogadores"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TYPE "public"."pedidos_status_enum"`);
        await queryRunner.query(`DROP TABLE "produtos"`);
    }

}
