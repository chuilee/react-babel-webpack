import React from 'react';
import TodoTextInput from './TodoTextInput.jsx';
import TodoActions from '../../actions/TodoActions.jsx';

export default class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this._onSave = this._onSave.bind(this)
  }

  render() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </header>
    );
  }

  _onSave(text) {
    if (text.trim()){
      TodoActions.create(text);
    }
  }
}
