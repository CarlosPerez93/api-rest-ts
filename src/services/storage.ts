import { Request, Response } from "express";
import { Storage } from "../interfaceGlobal/storage";
import UserModel from "../api/user/model/user";
import StorageModel from "../models/storage";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const response = await StorageModel.create({ fileName, idUser, path });
  return response;
};

const getImgUser = async () => {
  const response = await StorageModel.find({
    idUser: "car1@gmail.com",
  });
  return response;
};

export { registerUpload, getImgUser };
