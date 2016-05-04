import React, {PropTypes} from 'react';
import TodoActions from '../../actions/TodoActions.jsx';


export default class Footer extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    allTodos: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this._onClearCompletedClick = this._onClearCompletedClick.bind(this)
  }

  render() {
    let allTodos = this.props.allTodos;
    let total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    let completed = 0;
    for (let key in allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
    }

    let itemsLeft = total - completed;
    let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

  	// Undefined and thus not rendered if no completed items are left.
  	const BASECONFIG = "BASE-CONFIG"
    let clearCompletedButton
    if (completed) {
      clearCompletedButton =
        <button
          id="clear-completed">
          onClick={this._onClearCompletedClick}>
          Clear completed {completed}
        </button>
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    )
  }

  _onClearCompletedClick() {
    TodoActions.destroyCompleted();
  }
}
