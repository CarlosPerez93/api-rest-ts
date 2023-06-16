import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getOrders } from "../services/order";
import { RequestExt } from "../interface/req-ext";

const getOrder = async (req: RequestExt, res: Response) => {
  try {
    const response = await getOrders();
    res.send({
      data: " this look people with session / JWT",
      user: req?.user,
    });
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_ITEMS"));
  }
};

export { getOrder };
