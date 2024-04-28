import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('carrocerias')

export class Carroceria {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    nome: string

}