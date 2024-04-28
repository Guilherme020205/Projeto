import { Router } from "express";
import { UsuarioController } from "./controllers/usuarioController";
import { CorController } from "./controllers/corController";


const routes = Router()

    routes.post('/usuario', new UsuarioController().create)
    routes.post('/cor', new CorController().create)


export default routes

 