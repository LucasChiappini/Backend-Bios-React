import { IRepo } from "../models/repo.interface";
import { model, Schema } from "mongoose";

const repoSchema = new Schema<IRepo>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdDate: { type: String, required: true },
  watchers: { type: Number, required: true },
  forks: { type: Number, required: true },
});

export const Repo = model<IRepo>("Repo", repoSchema);
