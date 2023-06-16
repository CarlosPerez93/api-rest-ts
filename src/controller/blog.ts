import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_BLOG"));
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {
    res.send("Blogs");
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_BLOGS"));
  }
};

const updateBlogs = (req: Request, res: Response) => {
  try {
    res.send(req);
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_UPDATE_BLOG"));
  }
};

const postBlogs = ({ body }: Request, res: Response) => {
  console.log("post ", body);
  try {
    res.send(body);
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_POST_BLOG"));
  }
};

const deleteBlogs = (req: Request, res: Response) => {
  try {
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_DELETE_BLOG"));
  }
};

export { getBlog, getBlogs, updateBlogs, postBlogs, deleteBlogs };
