import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1714272457576 implements MigrationInterface {
    name = 'Default1714272457576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`marcas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`modelos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`senha\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`combustiveis\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`carrocerias\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cores\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`senha\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`carros\` (\`id\` int NOT NULL AUTO_INCREMENT, \`preco\` text NOT NULL, \`ano\` date NOT NULL, \`km\` int NOT NULL, \`sobre\` text NOT NULL, \`carroceria_id\` int NULL, \`combustivel_id\` int NULL, \`cor_id\` int NULL, \`modelo_id\` int NULL, \`marca_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fotos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`linck\` text NOT NULL, \`carro_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
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
        await queryRunner.query(`DROP TABLE \`fotos\``);
        await queryRunner.query(`DROP TABLE \`carros\``);
        await queryRunner.query(`DROP TABLE \`cores\``);
        await queryRunner.query(`DROP TABLE \`carrocerias\``);
        await queryRunner.query(`DROP TABLE \`combustiveis\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`modelos\``);
        await queryRunner.query(`DROP TABLE \`marcas\``);
    }

}
