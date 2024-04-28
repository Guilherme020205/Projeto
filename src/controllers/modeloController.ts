import { Request, Response } from "express"
import { modeloRepository } from "../repositories/modeloRepository"

export class ModeloController {

    async create(req: Request, res: Response) {
        const { nome, marca } = req.body

        if (!nome && !marca) {
            return res.status(400).json({ mensagem: 'Dados insuficiente' })
        }

        try {
            const newCor = modeloRepository.create( {nome, marca })

            await modeloRepository.save(newCor)

            return res.status(201).json(newCor)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: 'Internal server error' })
        }
    }

} 