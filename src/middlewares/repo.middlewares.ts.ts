import { NextFunction, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { ErrorHandler } from "../handlers/error.handler";

export const createRepoMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  await checkSchema({
    name: {
      in: ["body"],
      isString: true,
      errorMessage: "El nombre es requerido",
    },
    description: {
      in: ["body"],
      isString: true,
      errorMessage: "La descripcion es requerida"
    },
    createdDate: {
      in: ["body"],
      isString: true,
      errorMessage: "La fecha de creacion es requerida. ❗❗❗ Debe tener en cuenta el formato YYYY-MM-DD ❗❗❗"
    },
    watchers: {
      in:["body"],
      isNumeric:true,
      errorMessage: "Las vistas son requeridas"
  },
    forks: {
        in:["body"],
        isNumeric:true,
        errorMessage: "Forks son requeridos"
    },
  }).run(req);


  const errors = validationResult(req);
  if(!errors.isEmpty()){
    next(new ErrorHandler(400,errors.array()));
  }

  next();
};
