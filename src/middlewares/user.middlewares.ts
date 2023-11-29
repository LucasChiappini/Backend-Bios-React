import { NextFunction, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { ErrorHandler } from "../handlers/error.handler";

export const createUserMiddleware = async (
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
    bio: {
      in: ["body"],
      isString: true,
      errorMessage: "La biografia es requerida"
    },
    email: {
      in: ["body"],
      isString: true,
      errorMessage: "El email es requerido"
    },
    location: {
      in: ["body"],
      isString: true,
      errorMessage: "La ubicacion es requerida"
    },
    followers: {
        in:["body"],
        isNumeric:true,
        errorMessage: "Los followers es requerido"
    },
  }).run(req);


  const errors = validationResult(req);
  if(!errors.isEmpty()){
    next(new ErrorHandler(400,errors.array()));
  }

  next();
};
