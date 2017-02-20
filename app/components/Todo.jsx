var React = require('react');

var Todo = React.createClass({
  handleCheckBoxClick : function(id) {
    return () => {
      this.props.onToggle(id);
    }
  },
  render: function() {
    var {id,text,completed} = this.props;
    return (
      <div className="todo" onClick={this.handleCheckBoxClick(id)} >
        <input type="checkbox" checked={completed} /> {text}
      </div>
    )
  }
})

module.exports = Todo;
