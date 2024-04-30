import { Request, Response } from "express"
import { corRepository } from "../repositories/corRepository"

export class CorController {

    async create(req: Request, res: Response) {
        const { nome } = req.body

        if (!nome) {
            return res.status(400).json({ mensagem: 'Dados insuficiente' })
        }

        try {
            const newCor = corRepository.create({ nome })

            await corRepository.save(newCor)

            return res.status(201).json(newCor)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: 'Internal server error' })
        }
    }

} 