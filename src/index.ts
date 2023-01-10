import { db } from "./database/db";
import { App } from "./app";
import { NextFunction, Request, Response } from "express";

import AppError from "./errors/AppError";

const port = process.env.APP_PORT || 8000;
const app = new App().server;

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
);

app.listen(port, async () => {
  await db.sync(/*{ force: true }*/);
  console.log(`App rodando na porta ${port}`);
});
