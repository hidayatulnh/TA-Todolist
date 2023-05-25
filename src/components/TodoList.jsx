import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"

export const TodoList = () =>{
const { todos } = useSelector(state => state);
console.log(todos);

    return(
      <Box textAlign="center" my="4">No Todos Yay!</Box>  
    )
}