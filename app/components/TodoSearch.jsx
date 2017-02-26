var React = require('react');

var TodoSearch = React.createClass({
  handleChange : function() {
    var searchText =  this.refs.searchText.value;
    var showCompleted = this.refs.showCompleted.checked;
    this.props.onSearch(searchText,showCompleted);
  },
  render :function() {
    return (
      <div className="todo-search-container">
        <div>
          <input type="search" className="todo-search-input" ref="searchText" onChange={this.handleChange} placeholder="search by name "/>
        </div>
        <div>
          <label>
            <input type="checkbox" className="todo-show-complete" ref="showCompleted" onChange={this.handleChange}/>
            show completed todos
          </label>
        </div>
      </div>
    )
  }
})

module.exports = TodoSearch;
