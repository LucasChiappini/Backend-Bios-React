import { ErrorHandler } from "../handlers/error.handler";
import { IUser } from "../models/user.interface";
import { User } from "../schemas/user.schema";

export const createUserStorage = async (user: IUser) => {
  const newUser = new User(user);
  try {
    await newUser.save();
    return newUser;
  } catch (err) {
    throw new ErrorHandler(500, " Error al crear usuario❌");
  }
};

export const getUsersStorage = async (filter: any) => {
  try {
    const users = await User.find(filter);
    return users;
  } catch (err) {
    return new ErrorHandler(500, "Error al obtener usuarios👤❌");
  }
};

export const updateUserStorage = async (id: string, user: Partial<IUser>) => {
  try {
    const updateUser: IUser = await User.findByIdAndUpdate(id, user, {
      new: true,
    });
    return updateUser;
  } catch (err) {
    return new ErrorHandler(500, "Error al obtener usuarios❌");
  }
};

export const deleteUserStorage = async (id: string) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    return new ErrorHandler(500, "Error al eliminar Usuario❌👤");
  }
};
