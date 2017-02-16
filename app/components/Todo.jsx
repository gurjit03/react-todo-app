var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id,text} = this.props;
    console.log(id, text)
    return (
      <div className="todo">
        {id}. {text}
      </div>
    )
  }
})

module.exports = Todo;
