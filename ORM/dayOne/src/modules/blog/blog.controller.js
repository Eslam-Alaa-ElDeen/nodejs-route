import { Router } from "express";
import { successResponse } from "../../common/utils/success.respoce.js";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  restoreBlog,
  updateBlog,
} from "./blog.service.js";

const router = Router();

router.get("/", async (req, res) => {
  const data = await getAllBlogs();
  return successResponse({
    res,
    data,
    message: "blog fetched successfully",
    status: 200,
  });
});

router.post("/", async (req, res) => {
  const { title, content, contant, b_author_id } = req.body;
  const data = await createBlog({
    title,
    contant: content ?? contant,
    b_author_id,
  });
  return successResponse({
    res,
    data,
    message: "Blog created successfully",
    status: 201,
  });
});

router.get("/:id", async (req, res) => {
  const data = await getBlogById(req.params.id);
  return successResponse({ res, data, message: "Blog fetched successfully" });
});

router.patch("/:id/restore", async (req, res) => {
  const data = await restoreBlog(req.params.id);
  return successResponse({ res, data, message: "Blog restored successfully" });
});

router.patch("/:id", async (req, res) => {
  const data = await updateBlog(req.params.id, {
    ...req.body,
    contant: req.body.content ?? req.body.contant,
  });
  return successResponse({ res, data, message: "Blog updated successfully" });
});

router.delete("/:id", async (req, res) => {
  const data = await deleteBlog(req.params.id);
  return successResponse({ res, data, message: "Blog deleted successfully" });
});

export default router;
