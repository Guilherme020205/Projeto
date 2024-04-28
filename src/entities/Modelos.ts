import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Marca } from "./Marcas";


@Entity('modelos')

export class Modelo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    nome: string

    @ManyToOne(() => Marca, marca => marca.id)
    @JoinColumn({name: 'marca'})
    marca: Marca

}