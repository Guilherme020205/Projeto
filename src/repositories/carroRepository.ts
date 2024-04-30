import { AppDataSource } from "../data-source";
import { Carro } from "../entities/Carros";

export const carroRepository = AppDataSource.getRepository(Carro)