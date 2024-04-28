import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('combustiveis')

export class Combustivel {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    nome: string

}