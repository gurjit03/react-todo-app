var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery')
var TodoApp = require('TodoApp');

describe('todoapp',() => {
  it('should exist',() => {
    expect(TodoApp).toExist();
  })

  it("should add the todo on handle todo method call",() => {
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    var todoText = 'heey yaah';
    todoApp.setState({todos : []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  })

  it('should change the completed value on handleTodo',() => {
    var todoData = {
      id : 1,
      text : 'testing the todo',
      completed : false,
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos : [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(todoData['id']);
    var actualValue = !todoData['completed'];
    expect(todoApp.state.todos[0].completed).toBe(true)
  })
})
