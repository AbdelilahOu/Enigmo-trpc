import { z } from "zod";

export const createTodoSchema = z.object({
  todo: z.string(),
  deadline: z.string(),
  status: z.string(),
});

export const updateTodoSchema = z.object({
  id: z.number(),
  todo: z.object({
    todo: z.string().optional(),
    deadline: z.string().optional(),
    status: z.string().optional(),
  }),
});

export type updateTodoInput = z.TypeOf<typeof updateTodoSchema>;
export type createTodoInput = z.TypeOf<typeof createTodoSchema>;
