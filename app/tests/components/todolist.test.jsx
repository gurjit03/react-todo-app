var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery')

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList',() => {
  it('should exist',() => {
    expect(TodoList).toExist();
  })

  it('should render the todo component for each todo item', () => {
    var todos = [
      {
        id : 1,
        text : 'first todo component'
      },
      {
        id : 2,
        text : 'second todo component'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo );
    expect(todosComponents.length).toBe(todos.length);
  })
})
