import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('modelos')

export class Modelo {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    nome: string

}