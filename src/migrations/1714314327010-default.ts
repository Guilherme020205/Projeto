import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1714314327010 implements MigrationInterface {
    name = 'Default1714314327010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`carros\` ADD \`marcha\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`modelos\` DROP FOREIGN KEY \`FK_1a6ac3630053c2da177b4a12842\``);
        await queryRunner.query(`ALTER TABLE \`modelos\` CHANGE \`marca\` \`marca\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_4d1b94e6c50b50f7060fae8e359\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_03ad9622b411305c9466cec760d\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_b4fd3354fe2335a6c4b76e21fed\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_b16b95340d6397d5c688bc478a9\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_09238ef495efd70661b1def3fe1\``);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`marca\` \`marca\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`modelo\` \`modelo\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`cor\` \`cor\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`carroceria\` \`carroceria\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`combustivel\` \`combustivel\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`fotos\` DROP FOREIGN KEY \`FK_c9559aacddcd5593e619e4cd350\``);
        await queryRunner.query(`ALTER TABLE \`fotos\` CHANGE \`carro\` \`carro\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`modelos\` ADD CONSTRAINT \`FK_1a6ac3630053c2da177b4a12842\` FOREIGN KEY (\`marca\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_4d1b94e6c50b50f7060fae8e359\` FOREIGN KEY (\`marca\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_03ad9622b411305c9466cec760d\` FOREIGN KEY (\`modelo\`) REFERENCES \`modelos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_b4fd3354fe2335a6c4b76e21fed\` FOREIGN KEY (\`cor\`) REFERENCES \`cores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_b16b95340d6397d5c688bc478a9\` FOREIGN KEY (\`carroceria\`) REFERENCES \`carrocerias\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_09238ef495efd70661b1def3fe1\` FOREIGN KEY (\`combustivel\`) REFERENCES \`combustiveis\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_00416526f2f924f9abe08953a72\` FOREIGN KEY (\`marcha\`) REFERENCES \`marchas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fotos\` ADD CONSTRAINT \`FK_c9559aacddcd5593e619e4cd350\` FOREIGN KEY (\`carro\`) REFERENCES \`carros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fotos\` DROP FOREIGN KEY \`FK_c9559aacddcd5593e619e4cd350\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_00416526f2f924f9abe08953a72\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_09238ef495efd70661b1def3fe1\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_b16b95340d6397d5c688bc478a9\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_b4fd3354fe2335a6c4b76e21fed\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_03ad9622b411305c9466cec760d\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_4d1b94e6c50b50f7060fae8e359\``);
        await queryRunner.query(`ALTER TABLE \`modelos\` DROP FOREIGN KEY \`FK_1a6ac3630053c2da177b4a12842\``);
        await queryRunner.query(`ALTER TABLE \`fotos\` CHANGE \`carro\` \`carro\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`fotos\` ADD CONSTRAINT \`FK_c9559aacddcd5593e619e4cd350\` FOREIGN KEY (\`carro\`) REFERENCES \`carros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`combustivel\` \`combustivel\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`carroceria\` \`carroceria\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`cor\` \`cor\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`modelo\` \`modelo\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`marca\` \`marca\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_09238ef495efd70661b1def3fe1\` FOREIGN KEY (\`combustivel\`) REFERENCES \`combustiveis\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_b16b95340d6397d5c688bc478a9\` FOREIGN KEY (\`carroceria\`) REFERENCES \`carrocerias\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_b4fd3354fe2335a6c4b76e21fed\` FOREIGN KEY (\`cor\`) REFERENCES \`cores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_03ad9622b411305c9466cec760d\` FOREIGN KEY (\`modelo\`) REFERENCES \`modelos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_4d1b94e6c50b50f7060fae8e359\` FOREIGN KEY (\`marca\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`modelos\` CHANGE \`marca\` \`marca\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`modelos\` ADD CONSTRAINT \`FK_1a6ac3630053c2da177b4a12842\` FOREIGN KEY (\`marca\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP COLUMN \`marcha\``);
    }

}
