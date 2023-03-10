const { $client: trpc } = useNuxtApp();

export default () => {
  const createTodo = (todo: newTodo) => trpc.Todos.create.mutate(todo);
  const deleteTodo = (id: number) => trpc.Todos.delete.mutate();
  const updateTodo = (id: number) => trpc.Todos.update.mutate();
  const queryTodos = () => trpc.Todos.findAll.useQuery();

  return {
    queryTodos,
    createTodo,
    deleteTodo,
    updateTodo,
  };
};

interface newTodo {
  deadline: string;
  status: string;
  todo: string;
}
