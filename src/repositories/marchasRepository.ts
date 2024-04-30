import { AppDataSource } from "../data-source";
import { Marcha } from "../entities/Marchas";

export const marchaRepository = AppDataSource.getRepository(Marcha)
  