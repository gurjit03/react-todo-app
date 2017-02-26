var React = require('react');

var AddTodo = React.createClass({
  handleSubmit : function(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    console.log(todoText,"todo text ========");
    if(todoText.length > 0) {
      this.refs.todoText.value = ''
      this.props.onAddTodo(todoText);
    }else {
      this.refs.todoText.focus();
    }
  },
  render : function() {
    return (
      <div className="add-todo-container">
      <form className="add-todo-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="todoText" className="add-todo-input" />
        <button className="button primary expanded">Add Todo</button>
      </form>
      </div>
    )
  }
})

module.exports = AddTodo;
