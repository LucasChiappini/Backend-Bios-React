import { IRepo } from "../models/repo.interface";
import {
  createRepoStorage,
  deleteRepoStorage,
  getRepoStorage,
  updateRepoStorage,
} from "../storage/repo.storage";

export const getRepoService = async (query: any) => {
  const filter = {};
  if (query.name) filter["name"] = query.name;
  if (query.description) filter["description"] = query.description;
  if (query.createdDate) filter["createdDate"] = query.createdDate;
  if (query.watchers) filter["watchers"] = query.watchers;
  if (query.forks) filter["forks"] = query.forks;
  if (query.id) filter["_id"] = query.id;
  const repos = await getRepoStorage(filter);
  return repos;
};

export const createRepoService = async (repo: IRepo) => {
  const newRepo = await createRepoStorage(repo);
  return newRepo;
};

export const updateRepoService = async (id: string, repo: Partial<IRepo>) => {
  const updatedRepo = await updateRepoStorage(id, repo);
  return updatedRepo;
};

export const deleteRepoService = async (id: string) => {
  const repo = await deleteRepoStorage(id);
  return repo;
};
