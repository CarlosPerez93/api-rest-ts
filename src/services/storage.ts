import { Storage } from "../interface/storage";
import StorageModel from "../models/storage";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const response = await StorageModel.create({ fileName, idUser, path });
  return response;
};

export { registerUpload };
