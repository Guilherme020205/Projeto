import { Router } from "express";
import { UsuarioController } from "./controllers/usuarioController";
import { CorController } from "./controllers/corController";
import { CombustivelController } from "./controllers/combustivelController";
import { CarroceriasController } from "./controllers/carroceriaController";
import { MarcaController } from "./controllers/marcaController";
import { ModeloController } from "./controllers/modeloController";
import { CarroController } from "./controllers/carroController";
import { MarchaController } from "./controllers/marchaController";

const routes = Router();

routes.post("/api/usuario", new UsuarioController().create);
routes.post("/api/carro", new CarroController().create);

routes.post("/api/cor", new CorController().create);
routes.post("/api/combustivel", new CombustivelController().create);
routes.post("/api/carroceria", new CarroceriasController().create);
routes.post("/api/marca", new MarcaController().create);
routes.post("/api/modelo", new ModeloController().create);
routes.post("/api/marcha", new MarchaController().create);

export default routes;
