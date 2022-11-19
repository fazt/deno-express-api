import { Request, Response } from "npm:express";
import Task from "../models/Tasks.ts";

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await Task.find();
  return res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  console.log(req.body)
  const task = new Task(req.body);
  await task.save();
  return res.json(task);
};

export const getTask = async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  return res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "Task not found" });
  return res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  return res.json(task);
};
