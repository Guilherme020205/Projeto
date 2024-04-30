import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('marcas')

export class Marca {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    nome: string

}