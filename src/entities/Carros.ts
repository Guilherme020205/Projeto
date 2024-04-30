import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Carroceria } from "./Carrocerias";
import { Combustivel } from "./Combustivel";
import { Cor } from "./Cores";
import { Modelo } from "./Modelos";
import { Marca } from "./Marcas";
import { Marcha } from "./Marchas";

@Entity('carros')

export class Carro {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Marca, marca => marca.id)
    @JoinColumn({ name: 'marca' })
    marca: Marca

    @ManyToOne(() => Modelo, modelo => modelo.id)
    @JoinColumn({ name: 'modelo' })
    modelo: Modelo

    @Column({ type: 'text' })
    preco: string

    @Column({ type: 'text' })
    ano: string

    @ManyToOne(() => Cor, cor => cor.id)
    @JoinColumn({ name: 'cor' })
    cor: Cor 

    @ManyToOne(() => Carroceria, carroceria => carroceria.id)
    @JoinColumn({ name: 'carroceria' })
    carroceria: Carroceria

    @ManyToOne(() => Combustivel, combustivel => combustivel.id)
    @JoinColumn({ name: 'combustivel' })
    combustivel: Combustivel

    @ManyToOne(() => Marcha, marcha => marcha.id)
    @JoinColumn({ name: 'marcha' })
    marcha: Marcha

    @Column({ type: 'int' })
    km: string

    @Column({ type: 'text' })
    sobre: string
}