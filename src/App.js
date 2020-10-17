import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: todosData.map((item) => (
        <TodoItem key={item.id} item={item} />
      )),
    };
  }
  render() {
    return <div className="todo-list">{this.state.todoItems}</div>;
  }
}

export default App;

// import React from "react";
// import TodoItem from "./components/TodoItem";
// import todosData from "./todosData";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todosItems: todosData.map((item) => (
//         <TodoItem key={item.id} item={item} />
//       )),
//     };
//   }
//   render() {
//     return (
//       <div className="todo-list">
//         <p>{this.state.todosItems}</p>
//       </div>
//     );
//   }
// }

// function App() {
//   const todosItems = todosData.map((item) => (
//     <TodoItem key={item.id} item={item} />
//   ));
//   return <div className="todo-list">{todosItems}</div>;
// }

// const todosList = todosData.map((todo) => (
//   <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
// ));

// return <div className="todo-list">{todosList}</div>;
// }
// export default App;

// const jokeComponents = jokesData.map((joke) => (
//   <Joke key={joke.id} question={joke.question} punchJoke={joke.punchLine} />
// ));

// return <div>{jokeComponents}</div>;
