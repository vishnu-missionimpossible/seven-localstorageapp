import React, {useState} from 'react'
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
    Container,
} from "reactstrap";
import {v4} from "uuid"

const TodoForm = ({addTodos}) => {
    const [todoString, setTodoString] = useState("");

    return (
        <Form onsubmit={(e) => {
            e.preventDefault();
            // Hndle form submission logic here
            if (todoString.trim() === "") {
                return alert("Please fill some value in the input field");
            }   

            const todo = {
                id: v4(),
                todoString,
            }
            //TODO: Call the addTodos function passed as a prop to add the new todo item
            addTodos(todo);
            setTodoString("");
        }}>
            <FormGroup>
                <InputGroup>
                    <Input 
                    type="text" 
                    name="todo"
                    id="todo"
                    placeholder="Enter a todo string" 
                    value={todoString}
                    onChange={(e) => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button color="success">Add Todo</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;