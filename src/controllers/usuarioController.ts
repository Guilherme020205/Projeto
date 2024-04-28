import { Request, Response } from "express"
import { usuarioRepository } from "../repositories/usuarioRepository"

export class UsuarioController {

    async create(req: Request, res: Response) {
        const { nome, senha } = req.body

        if (!nome && !senha) {
            return res.status(400).json({ mensagem: 'Dados insuficiente' })
        }

        try {
            const newUsuario = usuarioRepository.create({ nome, senha })

            await usuarioRepository.save(newUsuario)

            return res.status(201).json(newUsuario)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: 'Internal server error' })
        }
    }

} 