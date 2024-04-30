import { AppDataSource } from "../data-source";
import { Carroceria } from "../entities/Carrocerias";

export const carroceriaRepository = AppDataSource.getRepository(Carroceria)
  