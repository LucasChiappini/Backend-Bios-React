import {
  createUserStorage,
  deleteUserStorage,
  getUsersStorage,
  updateUserStorage,
} from "../storage/user.storage";
import { IUser } from "../models/user.interface";
import axios from "axios";

export async function getUserSearchService(username: string): Promise<any[]> {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      `Error fetching user ${username} from GitHub API: ${error.message}`
    );
  }
}

export async function getUserSearchServiceSpecific(
  username: string
): Promise<any[]> {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      `Error fetching user ${username} from GitHub API: ${error.message}`
    );
  }
}

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
