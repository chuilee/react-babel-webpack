import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Mainer from './Mainer.jsx';
import TodoStore from '../../stores/TodoStore.jsx';

require('./css/app.css');
require('./todomvc-common/base.css');

/**
 * Retrieve the current TODO data from TodoStore
 */
var getTodoState = () => {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  }
}

export default class Todo extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = getTodoState()
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange)     
  }

  render() {
    return (
      <div id="todoapp">
        <Header />
        <Mainer 
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer
          allTodos={this.state.allTodos}
        />
      </div>
    );
  }

  _onChange() {
    this.setState(getTodoState())
  }
}
