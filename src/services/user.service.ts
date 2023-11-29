import {
  createUserStorage,
  deleteUserStorage,
  getUsersStorage,
  updateUserStorage,
} from "../storage/user.storage";
import { IUser } from "../models/user.interface";

export const getUserService = async (query: any) => {
  const filter = {};
  if (query.name) filter["name"] = query.name;
  if (query.bio) filter["bio"] = query.bio;
  if (query.email) filter["email"] = query.email;
  if (query.location) filter["location"] = query.location;
  if (query.followers) filter["followers"] = query.followers;
  if (query.id) filter["_id"] = query.id;
  const users = await getUsersStorage(filter);
  return users;
};
//Si queremos hacer el filtrado con Sort, hay un ejemplo en la clase 1 de noviembre, minuto 30.

export const createUserService = async (user: IUser) => {
  const newUser = await createUserStorage(user);
  return newUser;
};

export const updateUserService = async (id: string, user: Partial<IUser>) => {
  const updatedUser = await updateUserStorage(id, user);
  return updatedUser;
};

export const deleteUserService = async (id: string) => {
  const user = await deleteUserStorage(id);
  return user;
};
