import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Carro } from "./Carros";

@Entity('fotos')

export class Foto {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    link: string

    @ManyToOne(() => Carro, carro => carro.id)
    @JoinColumn({name: 'carro_id'})
    carro: Carro

    
}