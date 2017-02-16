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
})
