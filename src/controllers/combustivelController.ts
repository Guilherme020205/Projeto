import { Request, Response } from "express"
import { combustivelRepository } from "../repositories/combustivelRepository"

export class CombustivelController {

    async create(req: Request, res: Response) {
        const { nome } = req.body

        if (!nome) {
            return res.status(400).json({ mensagem: 'Dados insuficiente' })
        }

        try {
            const newCor = combustivelRepository.create({ nome })

            await combustivelRepository.save(newCor)

            return res.status(201).json(newCor)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: 'Internal server error' })
        }
    }

} 