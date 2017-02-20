var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',() => {
  it('should exist',() => {
    expect(TodoAPI).toExist();
  })

  describe('setTodos',() => {
    it('set valid todos array',() => {
      var todos = [
        {
          id : 23,
          test : 'set all the todos',
          completed : false,
        },
      ]
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
      
    })
  })

  describe('getTodos',() => {
    it('set valid todos array',() => {

    })
  })
})
