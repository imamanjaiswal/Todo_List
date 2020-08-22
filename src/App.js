import React,{useState} from 'react';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos,setTodos] = useState (['Take dogs out for the walk','Take the rubbish out','Hello everyone']);
  const [input,setInput] = useState('');
  console.log('fuck ',input);

  const addTodo = (event)=>{
    //This will fire up when the button is clicked
    event.preventDefault();
    console.log('I am wroking');
    setTodos([...todos,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
        {/* <input value={input} onChange={event=> setInput(event.target.value)}/> */}
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event=> setInput(event.target.value)} />
        </FormControl>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
           Add Todo
        </Button>
      </form>
      <ul>
        {todos.map(todo=>(
          <li><Todo text={todo}/></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
