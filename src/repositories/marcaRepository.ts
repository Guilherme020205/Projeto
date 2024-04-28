import { AppDataSource } from "../data-source";
import { Marca } from "../entities/Marcas";

export const marcaRepository = AppDataSource.getRepository(Marca)
   