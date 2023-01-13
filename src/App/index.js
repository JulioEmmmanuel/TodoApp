//import './App.css';
import '../index.css';
import { AppUI } from './AppUI';
import {TodoProvider} from "../TodoContext";

import React from "react"

/*
const defaultTodos = [
  {text: "Cortar cebolla", completed:true},
  {text: "Tomar el curso de intro a React", completed:false},
  {text: "Llorar con la llorona", completed:false},
]
*/



function App() {
  

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
