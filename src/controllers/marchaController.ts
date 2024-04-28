import { Request, Response } from "express"
import { marchaRepository } from "../repositories/marchasRepository"
 
export class MarchaController {

    async create(req: Request, res: Response) {
        const { nome } = req.body

        if (!nome) {
            return res.status(400).json({ mensagem: 'Dados insuficiente' })
        }

        try {
            const newCor = marchaRepository.create({ nome })

            await marchaRepository.save(newCor)

            return res.status(201).json(newCor)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: 'Internal server error' })
        }
    }

} 