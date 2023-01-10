import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./router";

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private router() {
    this.server.use(router);
  }
}
