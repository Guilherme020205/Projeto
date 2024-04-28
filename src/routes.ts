import { Router } from "express";
import { UsuarioController } from "./controllers/usuarioController";
import { CorController } from "./controllers/corController";
import { CombustivelController } from "./controllers/combustivelController";
import { CarroceriasController } from "./controllers/carroceriaController";
import { MarcaController } from "./controllers/marcaController";
import { ModeloController } from "./controllers/modeloController";
import { CarroController } from "./controllers/carroController";
import { MarchaController } from "./controllers/marchaController";



const routes = Router()

    routes.post('/usuario', new UsuarioController().create)
    routes.post('/carro', new CarroController().create)
   
    routes.post('/cor', new CorController().create)
    routes.post('/combustivel', new CombustivelController().create)
    routes.post('/carroceria', new CarroceriasController().create)
    routes.post('/marca', new MarcaController().create)
    routes.post('/modelo', new ModeloController().create)
    routes.post('/marcha', new MarchaController().create)


export default routes

 