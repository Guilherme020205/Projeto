import { AppDataSource } from "../data-source";
import { Modelo } from "../entities/Modelos";

export const modeloRepository = AppDataSource.getRepository(Modelo)
  