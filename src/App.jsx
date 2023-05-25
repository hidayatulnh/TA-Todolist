import { Container, Heading } from "@chakra-ui/react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";

function App() {

  return (
    <>
      <Container maxW="container.md">
        <Heading my="5" textAlign="center">Todo List App</Heading>
        <AddTodo />
        <TodoList/>
        <VisibilityFilter />
      </Container>
      
    </>
  );
}

export default App
