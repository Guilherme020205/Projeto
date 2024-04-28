import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1714256827989 implements MigrationInterface {
    name = 'Default1714256827989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`senha\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`usuarios\``);
    }

}
