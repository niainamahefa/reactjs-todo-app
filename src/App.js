import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from "./components/ToDoList";
import NavBar from "./components/NavBar";
import AddTask from "./components/AddTask";
import React from "react";
import {BrowserRouter, Switch, Route}  from 'react-router-dom';

function App() {
  return (
      <section id="todo">
          <BrowserRouter>
              <Switch>
                  <Route path="/add-task" component={AddTask}/>
                  <Route path="/:filter?" component={ToDoList}/>
              </Switch>
              <NavBar />
          </BrowserRouter>
      </section>
  );
}

export default App;
