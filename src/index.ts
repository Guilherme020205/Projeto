import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { App } from "./app";

AppDataSource.initialize().then(() => {
  new App().server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });
});
