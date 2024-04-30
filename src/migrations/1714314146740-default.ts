import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1714314146740 implements MigrationInterface {
    name = 'Default1714314146740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`modelos\` DROP FOREIGN KEY \`FK_c0e31b1cdff2abf1f9dc0a5937e\``);
        await queryRunner.query(`CREATE TABLE \`marchas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`carros\` (\`id\` int NOT NULL AUTO_INCREMENT, \`preco\` text NOT NULL, \`ano\` text NOT NULL, \`km\` int NOT NULL, \`sobre\` text NOT NULL, \`marca\` int NULL, \`modelo\` int NULL, \`cor\` int NULL, \`carroceria\` int NULL, \`combustivel\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fotos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`link\` text NOT NULL, \`carro\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`modelos\` CHANGE \`marca\` \`marca\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`modelos\` ADD CONSTRAINT \`FK_1a6ac3630053c2da177b4a12842\` FOREIGN KEY (\`marca\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_4d1b94e6c50b50f7060fae8e359\` FOREIGN KEY (\`marca\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_03ad9622b411305c9466cec760d\` FOREIGN KEY (\`modelo\`) REFERENCES \`modelos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_b4fd3354fe2335a6c4b76e21fed\` FOREIGN KEY (\`cor\`) REFERENCES \`cores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_b16b95340d6397d5c688bc478a9\` FOREIGN KEY (\`carroceria\`) REFERENCES \`carrocerias\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_09238ef495efd70661b1def3fe1\` FOREIGN KEY (\`combustivel\`) REFERENCES \`combustiveis\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fotos\` ADD CONSTRAINT \`FK_c9559aacddcd5593e619e4cd350\` FOREIGN KEY (\`carro\`) REFERENCES \`carros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fotos\` DROP FOREIGN KEY \`FK_c9559aacddcd5593e619e4cd350\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_09238ef495efd70661b1def3fe1\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_b16b95340d6397d5c688bc478a9\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_b4fd3354fe2335a6c4b76e21fed\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_03ad9622b411305c9466cec760d\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_4d1b94e6c50b50f7060fae8e359\``);
        await queryRunner.query(`ALTER TABLE \`modelos\` DROP FOREIGN KEY \`FK_1a6ac3630053c2da177b4a12842\``);
        await queryRunner.query(`ALTER TABLE \`modelos\` CHANGE \`marca\` \`marca\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`fotos\``);
        await queryRunner.query(`DROP TABLE \`carros\``);
        await queryRunner.query(`DROP TABLE \`marchas\``);
        await queryRunner.query(`ALTER TABLE \`modelos\` ADD CONSTRAINT \`FK_c0e31b1cdff2abf1f9dc0a5937e\` FOREIGN KEY (\`marca\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
