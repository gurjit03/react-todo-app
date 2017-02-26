cvar expect = require('expect');

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

    it('should not set the invalid todos array',() => {
      var todos = {hello :'gurjit'};
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse();

      expect(localStorage.getItem('todos')).toBe(todos);
    })
  })

  describe('getTodos',() => {
    it('set valid todos array',() => {

    })
  })

  describe('filterTodos',() => {
    var todos = [
      {
        id : 1,
        text : 'some text',
        completed : false,
      },
      {
        id : 2,
        text : 'otehr text',
        completed : true,
      },
      {
        id : 3,
        text : 'some text',
        completed : false,
      }
    ]

    it('should return all the items if show completed is true',() => {
      var filteredTodos = TodoAPI.filterTodos(todos,'',true);

      expect(filteredTodos.length).toBe(3);
    });

    it('should return necessary items if show completed is false',() => {
      var filteredTodos = TodoAPI.filterTodos(todos,'',false);

      expect(filteredTodos.length).toBe(2);
    });

    it('should sort the todos',() => {
      var filteredTodos = TodoAPI.filterTodos(todos,'',true);

      expect(filteredTodos[2].completed).toBe(true);
    })

    it('should search the  todos',() => {
      var filteredTodos = TodoAPI.filterTodos(todos,'some',true);

      expect(filteredTodos.length).toBe(2);
    })
  })
})
