import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('marchas')

export class Marcha {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    nome: string

}