import React, {PropTypes} from 'react';
import TodoItem from './TodoItem.jsx';
import TodoActions from '../../actions/TodoActions.jsx';

export default class Mainer extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    allTodos: PropTypes.object.isRequired,
    areAllComplete: PropTypes.bool.isRequired
  };

  constructor(props) { 
    super(props);
    this._onToggleCompleteAll = this._onToggleCompleteAll.bind(this)
  }

  render() {
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    let allTodos = this.props.allTodos;
    let todos = [];

    console.log(allTodos)

    for (let key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }
    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">
        	{todos}
        </ul>
      </section>
    );
  }

  _onToggleCompleteAll() {
    TodoActions.toggleCompleteAll();
  }
}
