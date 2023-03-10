const { $client: trpc } = useNuxtApp();

export default () => {
  const queryTodos = () => trpc.Todos.findAll.useQuery();
  const createTodo = (todo: newTodo) => trpc.Todos.create.mutate(todo);
  const deleteTodo = (id: number) => "";
  const updateTodo = (id: number) => "";

  return {
    queryTodos,
    createTodo,
    deleteTodo,
    updateTodo,
  };
};

interface newTodo {
  todo: string;
  deadline: string;
  status: string;
}
