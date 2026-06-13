import React, {useState} from 'react'
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupText,
    Button,
    Form,
    Container,
} from "reactstrap";
import {v4} from "uuid"

const TodoForm = ({addTodos}) => {
    const [todoString, setTodoString] = useState("");

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission logic here
            if (todoString.trim() === "") {
                return alert("Please fill some value in the input field");
            }   

            const todo = {
                id: v4(),
                todoString,
            }
            // Call the addTodos function passed as a prop to add the new todo item
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
                    <InputGroupText>
                        <Button color="success">Add Todo</Button>
                    </InputGroupText>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;
