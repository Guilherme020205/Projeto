import { AppDataSource } from "../data-source";
import { Cor } from "../entities/Cores";

export const corRepository = AppDataSource.getRepository(Cor)
 