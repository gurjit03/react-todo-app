var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    console.log(todos)
    var renderTodos = () => {
      return todos.map( (todo) => {
        return (<Todo key={todo.id} {...todo} />)
      })
    }
    return (
      <div className="todo-list">
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
