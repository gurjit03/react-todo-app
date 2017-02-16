var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo',() => {
  it('should exist',() => {
    expect(AddTodo).toExist();
  })

  it('should call a add todo method with valid data',() => {
    var todoText = 'check mail';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    console.log("################ ----------------",$el.find('.add-todo-input')[0],"---------------------- ################")
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('.add-todo-input')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  })

  it('should not call a add todo method with invalid data',() => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    console.log("################ ----------------",$el.find('.add-todo-input')[0],"---------------------- ################")
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('.add-todo-input')[0]);

    expect(spy).toNotHaveBeenCalled();
  })
})
