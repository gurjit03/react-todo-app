var $ = require('jquery');
module.exports = {
  setTodos : function(todos) {
    if($.isArray(todos)) {
      // Set the localStorage
      localStorage.setItem('todos',JSON.stringify(todos))
      return todos;
    }else {
      throw new Error('you have not passed an array');
    }
  },
  getTodos : function() {
    console.log('runingggggggggggggg............get todos')
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    console.log(stringTodos,'get todos');
    todos = JSON.parse(stringTodos);
    try {
      console.log("parsed todo ", todos);
    }catch(e) {
      throw new Error('The parsed object is not array');
    }

    return Array.isArray(todos) ? todos : [] ;
  },
  filterTodos : function(todos,searchText,showCompleted) {
    var filterTodos = todos;

    // show by completed
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })

    // filter by search text
    filterTodos = filterTodos.filter((todo) => {
      if (searchText == '') {
        return true;
      }else {
        return todo.text.indexOf(searchText) > -1 ? true : false;
      }
    })

    //Sort the todos which is non completed to the first

    filterTodos.sort((todo1,todo2) => {
        if(!todo1.completed && todo2.completed) {
          return -1;
        }else if (todo1.completed && !todo2.completed) {
          return 1;
        }else {
          return 0;
        }
    })

    return filterTodos;
  }
}
