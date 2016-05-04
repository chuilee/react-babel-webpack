import React, {PropTypes} from 'react';
import TodoActions from '../../actions/TodoActions.jsx';
import TodoTextInput from './TodoTextInput.jsx';
import ClassNames from 'classnames';

export default class TodoItem extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    todo: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {isEditing: false}
    this._onToggleComplete = this._onToggleComplete.bind(this)
    this._onDoubleClick = this._onDoubleClick.bind(this)
    this._onDestoryClick = this._onDestoryClick.bind(this)
    this._onSave = this._onSave.bind(this)
  }

  render() {

    let todo = this.props.todo;
    let input;

    if(this.state.isEditing) {
      input = 
        <TodoTextInput 
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />
    }

    return (
      <li
        className={ClassNames({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestoryClick} />
        </div>
        {input}
      </li>
    );
  }

  _onToggleComplete() {
    TodoActions.toggleComplete(this.props.todo);
  }

  _onDoubleClick() {
    this.setState({isEditing: true})
  }

  _onSave(text) {
    TodoActions.updateText(this.props.todo.id, text)
    this.setState({isEditing: false})
  }

  _onDestoryClick() {
    TodoActions.destory(this.props.todo.id)
  }
}
