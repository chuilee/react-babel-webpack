import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './todo.scss'

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']}
  }

  handleAdd() {
    var newItems = this.state.items.concat([prompt('Enter some text')])
    this.setState({items: newItems})
  }

  render() {
    var items = this.state.items.map(function (item, i) {
      return (
         // onClick={this.handleRemove.bind(this, i)}
          <div key={item}>{item}</div>
        )
      // .bind(this)
      })
    return (
        <div>
          <button onClick={this.handleAdd.bind(this)}>Add item</button>
          <ReactCSSTransitionGroup transitionName="example">
            {items}
          </ReactCSSTransitionGroup>
        </div>
      )
  }
}

export default Todo;
