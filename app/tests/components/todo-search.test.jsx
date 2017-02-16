var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery')
var TodoSearch = require('TodoSearch');

describe('TodoSearch',() => {
  it('should exist',() => {
    expect(TodoSearch).toExist();
  })

  it('should call the onSearch on changing the input field',() => {
    var searchText = 'hello';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.searchText.value = searchText;

    var $el = $(ReactDOM.findDOMNode(todoSearch));
    TestUtils.Simulate.change($el.find('.todo-search-input')[0]);

    expect(spy).toHaveBeenCalledWith(searchText,false);
  })

  it('should call the onSearch on changing the checkbox',() => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.showCompleted.checked = true;
    var $el = $(ReactDOM.findDOMNode(todoSearch));
    TestUtils.Simulate.change($el.find('.todo-show-complete')[0]);
    expect(spy).toHaveBeenCalledWith('',true);
  })
})
