import express, { Application } from "express";
import routes from "./routes";
import path, { dirname } from "path";

export class App {
  public server: Application = express.application;
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(express.static(path.join(__dirname, "../public")));
  }

  private routes() {
    this.server.use(routes);
  }
}
