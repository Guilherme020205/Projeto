import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cores')

export class Cor {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    nome: string

} 