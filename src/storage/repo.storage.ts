import { ErrorHandler } from "../handlers/error.handler";
import { IRepo } from "../models/repo.interface";
import { Repo } from "../schemas/repo.schema";

export const createRepoStorage = async (repo: IRepo) => {
  const newRepo = new Repo(repo);
  try {
    await newRepo.save();
    return newRepo;
  } catch (err) {
    throw new ErrorHandler(500, " Error al crear repositorio❌");
  }
};

export const getRepoStorage = async (filter: any) => {
  try {
    const repos = await Repo.find(filter);
    return repos;
  } catch (err) {
    return new ErrorHandler(500, "Error al obtener repositorios❌");
  }
};

export const updateRepoStorage = async (id: string, repo: Partial<IRepo>) => {
  try {
    const updateRepo: IRepo = await Repo.findByIdAndUpdate(id, repo, {
      new: true,
    });
    return updateRepo;
  } catch (err) {
    return new ErrorHandler(500, "Error al obtener repositorios❌");
  }
};

export const deleteRepoStorage = async (id: string) => {
  try {
    const repo = await Repo.findByIdAndDelete(id);
    return repo;
  } catch (error) {
    return new ErrorHandler(500, "Error al eliminar repositorio❌👤");
  }
};
