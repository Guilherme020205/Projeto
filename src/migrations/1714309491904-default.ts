import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1714309491904 implements MigrationInterface {
    name = 'Default1714309491904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`modelos\` ADD \`marca_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_4ee19bb0de70ce24e93621655c9\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_903edc097ee82fbeffb3315902f\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_7e43289a3663444d6abe0c485ee\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_5cb70f3a5cd8388040fb3bc1c59\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_7f179bb43857cbc4bab95cd3a02\``);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`carroceria_id\` \`carroceria_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`combustivel_id\` \`combustivel_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`cor_id\` \`cor_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`modelo_id\` \`modelo_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`marca_id\` \`marca_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`fotos\` DROP FOREIGN KEY \`FK_f211fe0ce83ca2770d7d4e22409\``);
        await queryRunner.query(`ALTER TABLE \`fotos\` CHANGE \`carro_id\` \`carro_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`modelos\` ADD CONSTRAINT \`FK_c0e31b1cdff2abf1f9dc0a5937e\` FOREIGN KEY (\`marca_id\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_4ee19bb0de70ce24e93621655c9\` FOREIGN KEY (\`carroceria_id\`) REFERENCES \`carrocerias\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_903edc097ee82fbeffb3315902f\` FOREIGN KEY (\`combustivel_id\`) REFERENCES \`combustiveis\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_7e43289a3663444d6abe0c485ee\` FOREIGN KEY (\`cor_id\`) REFERENCES \`cores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_5cb70f3a5cd8388040fb3bc1c59\` FOREIGN KEY (\`modelo_id\`) REFERENCES \`modelos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_7f179bb43857cbc4bab95cd3a02\` FOREIGN KEY (\`marca_id\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fotos\` ADD CONSTRAINT \`FK_f211fe0ce83ca2770d7d4e22409\` FOREIGN KEY (\`carro_id\`) REFERENCES \`carros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fotos\` DROP FOREIGN KEY \`FK_f211fe0ce83ca2770d7d4e22409\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_7f179bb43857cbc4bab95cd3a02\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_5cb70f3a5cd8388040fb3bc1c59\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_7e43289a3663444d6abe0c485ee\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_903edc097ee82fbeffb3315902f\``);
        await queryRunner.query(`ALTER TABLE \`carros\` DROP FOREIGN KEY \`FK_4ee19bb0de70ce24e93621655c9\``);
        await queryRunner.query(`ALTER TABLE \`modelos\` DROP FOREIGN KEY \`FK_c0e31b1cdff2abf1f9dc0a5937e\``);
        await queryRunner.query(`ALTER TABLE \`fotos\` CHANGE \`carro_id\` \`carro_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`fotos\` ADD CONSTRAINT \`FK_f211fe0ce83ca2770d7d4e22409\` FOREIGN KEY (\`carro_id\`) REFERENCES \`carros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`marca_id\` \`marca_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`modelo_id\` \`modelo_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`cor_id\` \`cor_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`combustivel_id\` \`combustivel_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` CHANGE \`carroceria_id\` \`carroceria_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_7f179bb43857cbc4bab95cd3a02\` FOREIGN KEY (\`marca_id\`) REFERENCES \`marcas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_5cb70f3a5cd8388040fb3bc1c59\` FOREIGN KEY (\`modelo_id\`) REFERENCES \`modelos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_7e43289a3663444d6abe0c485ee\` FOREIGN KEY (\`cor_id\`) REFERENCES \`cores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_903edc097ee82fbeffb3315902f\` FOREIGN KEY (\`combustivel_id\`) REFERENCES \`combustiveis\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carros\` ADD CONSTRAINT \`FK_4ee19bb0de70ce24e93621655c9\` FOREIGN KEY (\`carroceria_id\`) REFERENCES \`carrocerias\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`modelos\` DROP COLUMN \`marca_id\``);
    }

}
