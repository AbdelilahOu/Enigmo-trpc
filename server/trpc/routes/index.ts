import { router } from "../trpc";
import { todosRoute } from "./todos";

export const appRouter = router({
  Todos: todosRoute,
});

export type AppRouter = typeof appRouter;
