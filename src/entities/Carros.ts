import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Carroceria } from "./Carrocerias";
import { Combustivel } from "./Combustivel";
import { Cor } from "./Cores";
import { Modelo } from "./Modelos";
import { Marca } from "./Marcas";

@Entity('carros')

export class Carro {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    preco: string

    @Column({ type: 'date' })
    ano: string

    @Column({ type: 'int' })
    km: string

    @ManyToOne(() => Carroceria, carroceria => carroceria.id)
    @JoinColumn({ name: 'carroceria_id' })
    carroceria: Carroceria

    @ManyToOne(() => Combustivel, combustivel => combustivel.id)
    @JoinColumn({ name: 'combustivel_id' })
    combustivel: Combustivel
    
    @ManyToOne(() => Cor, cor => cor.id)
    @JoinColumn({ name: 'cor_id' })
    cor: Cor 

    @ManyToOne(() => Modelo, modelo => modelo.id)
    @JoinColumn({ name: 'modelo_id' })
    modelo: Modelo

    @ManyToOne(() => Marca, marca => marca.id)
    @JoinColumn({ name: 'marca_id' })
    marca: Marca

    @Column({ type: 'text' })
    sobre: string
}