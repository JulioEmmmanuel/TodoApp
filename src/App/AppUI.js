import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import {TodoSearch} from "../TodoSearch";
import { TodoItem } from '../TodoItem';
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from '../CreateTodoButton';

import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";


import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

function AppUI(){

    const { error, 
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo,
            openModal
        } = React.useContext(TodoContext);

    return(
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

        <TodoList>
            {error && <TodosError error={error}/>}
            {loading && <TodosLoading/>}
            {(!loading && searchedTodos.lenght === 0) && <EmptyTodos/>}
            {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}/>
            ))}
        </TodoList>


        {openModal && 
            <Modal>
                <TodoForm/>
            </Modal>
        }
           
        
        <CreateTodoButton/>
    </React.Fragment>);
}

export {AppUI};