const { $client: trpc } = useNuxtApp();

export default () => {
  const createTodo = (todo: newTodo) => trpc.Todos.create.mutate(todo);
  const deleteTodo = (id: number) => trpc.Todos.delete.mutate(id);
  const updateTodo = (id: number, todo: updateTodo) => {
    return trpc.Todos.update.mutate({ id, todo });
  };
  const queryTodos = () => trpc.Todos.findAll.useQuery();

  return {
    queryTodos,
    createTodo,
    deleteTodo,
    updateTodo,
  };
};

interface todo {
  id: number;
  deadline: string;
  status: string;
  todo: string;
}
interface newTodo extends Omit<todo, "id"> {}
interface updateTodo extends Partial<newTodo> {}
