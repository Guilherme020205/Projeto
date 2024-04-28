import { Request, Response } from "express"
import { carroRepository } from "../repositories/carroRepository"

export class CarroController {

    async create(req: Request, res: Response) {
        const { marca, modelo, preco, ano, cor, marcha, carroceria, combustivel, km, sobre } = req.body

        if (!marca && !modelo && !preco && !ano && !cor && !marcha && !carroceria && !combustivel && !km && !sobre) {
            return res.status(400).json({ mensagem: 'Dados insuficiente' })
        }

        try {
            const newCor = carroRepository.create({ marca, modelo, preco, ano, cor, marcha, carroceria, combustivel, km, sobre })

            await carroRepository.save(newCor)

            return res.status(201).json(newCor)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: 'Internal server error' })
        }
    }

} 