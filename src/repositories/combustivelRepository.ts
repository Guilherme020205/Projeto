import { AppDataSource } from "../data-source";
import { Combustivel } from "../entities/Combustivel";

export const combustivelRepository = AppDataSource.getRepository(Combustivel)
 