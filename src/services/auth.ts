import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bscrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  registerNewUser.save;

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUNT_USER";
  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "PASSWORD_INCORRECT";
  const token = generateToken(checkIs.email);
  const data = {
    token: await token,
    user: checkIs,
  };
  return data;
};

export { loginUser, registerNewUser };
