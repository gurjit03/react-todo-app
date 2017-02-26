var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  handleCheckBoxClick : function(id) {
    return () => {
      this.props.onToggle(id);
    }
  },
  render: function() {

    var {id,text,completed,createdAt,completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = function() {
      let message = 'created At :';
      let dateFormat = "MMM Do , YYYY @ h:mm a";
      if(completed) {
          message = 'completed At :';
          return message + moment.unix(completedAt).format(dateFormat);
      }
      return message + moment.unix(createdAt).format(dateFormat);
    };
    return (
      <div className={todoClassName} onClick={this.handleCheckBoxClick(id)} >
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div className="todo-text">
          <p>{text}</p>
          <p className="todo-date-text">{renderDate()}</p>
        </div>
      </div>
    )
  }
})

module.exports = Todo;
