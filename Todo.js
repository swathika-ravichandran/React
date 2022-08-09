import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { id: 1, list: "TODO1" },
        { id: 2, list: "TODO2" },
        { id: 3, list: "TODO3" }
      ]
    };
    this.inputRef = React.createRef();
  }
  spanHandler = (id) => {
    document.getElementById(id).classList.toggle("strike");
  };
  addHandler = () => {
    let addValue = {
      id: this.state.todoList.length + 1,
      list: this.inputRef.current.value
    };
    this.setState({
      todoList: [...this.state.todoList, addValue]
    });
  };
  render() {
    return (
      <>
        <div className="mobApp">
          <div className="buttonClass">
            <input type="text" id="addToList" ref={this.inputRef} />
            <button onClick={this.addHandler}>Add To List</button>
          </div>
          <br />
          <br />
          <div className="todocontainer">
            {this.state.todoList.map((todo) => {
              return (
                <ul id={todo.id}>
                  <li>
                    <input
                      type="checkbox"
                      id={todo.list}
                      onClick={() => this.spanHandler("li" + todo.id)}
                    />
                    <span id={"li" + todo.id}>{todo.list}</span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Todo;
