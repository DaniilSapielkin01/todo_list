import React from "react";

import "./App.css";
import { Task, TaskInput } from "./components";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 0, title: "Create react app 1", done: false },
        { id: 1, title: "Create react app 4", done: true },
        { id: 2, title: "Create react app 2", done: false },
        { id: 3, title: "Create react app 3", done: false },
        { id: 4, title: "Create react app 5", done: true }
      ]
    };
  }
  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = this.state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = this.state;
      delete tasks[index];
      return tasks;
    });
  };

  addTask = task => {
    this.setState(state => {
      let { tasks } = this.state;
      tasks.push({
        id: task.length !== 0 ? task.length : 0,
        title: task,
        done: false
      });
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="app">
        <TaskInput addTask={this.addTask} />

        {[...activeTasks, ...doneTasks].map(task => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            id={task.id}
          ></Task>
        ))}
        <h1 className="top">Active tasks:{activeTasks.length}</h1>
      </div>
    );
  }
}
