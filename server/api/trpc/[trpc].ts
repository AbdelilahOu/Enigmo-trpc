import { createNuxtApiHandler } from "trpc-nuxt";
import { appRouter } from "~/server/trpc/routes";
import { createContext } from "~/server/trpc/context";

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
  onError: ({ error }) => {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.log("sth went wrong", error);
      return;
    }
    console.log(error);
  },
});
