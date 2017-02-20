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
  }
}
