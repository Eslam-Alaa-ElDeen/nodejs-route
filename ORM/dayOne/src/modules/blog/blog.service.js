import { blogModel } from "../../DB/model/blog.model.js";
import { userModel } from "../../DB/model/user.model.js";

const includeAuthor = { model: userModel, as: "author" };

export const getAllBlogs = async () => {
  return blogModel.findAll({
    include: [includeAuthor],
    order: [["id", "ASC"]],
  });
};

export const createBlog = async (inputs) => {
  return blogModel.create(inputs);
};

export const getBlogById = async (id) => {
  const blog = await blogModel.findByPk(id, { include: [includeAuthor] });
  if (!blog)
    throw Object.assign(new Error("Blog not found"), {
      cause: { status: 404 },
    });
  return blog;
};

export const updateBlog = async (id, inputs) => {
  const blog = await getBlogById(id);
  ["title", "contant", "b_author_id"].forEach((field) => {
    if (inputs[field] !== undefined) blog[field] = inputs[field];
  });
  await blog.save();
  return getBlogById(id);
};

export const deleteBlog = async (id) => {
  const blog = await getBlogById(id);
  await blog.destroy();
  return { id: blog.id, deleted: true };
};

export const restoreBlog = async (id) => {
  const blog = await blogModel.findByPk(id, { paranoid: false });
  if (!blog)
    throw Object.assign(new Error("Blog not found"), {
      cause: { status: 404 },
    });
  await blog.restore();
  return getBlogById(id);
};
