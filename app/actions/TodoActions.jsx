import TodoConstants from '../constants/TodoConstants.jsx';
import TodoDispatcher from '../dispatcher/TodoDispatcher.jsx';

export default {
	create(text) {
		TodoDispatcher.dispatch({
			actionType: TodoConstants.TODO_CREATE,
			text: text
		})
	},

	updateText(id, text) {
		TodoDispatcher.dispatch({
			actionType: TodoConstants.TODO_UPDATE_TEXT,
			id: id,
			text: text
		})
	},

	toggleComplete(todo) {
		let id = todo.id
		let actionType = todo.complete ? TodoConstants.TODO_UNDO_COMPLETE : TodoConstants.TODO_COMPLETE
		TodoDispatcher.dispatch({
      actionType: actionType,
      id: id
    })
	},

	toggleCompleteAll() {
    TodoDispatcher.dispatch({
      actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
    })
  },

  destroy(id) {
    TodoDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY,
      id: id
    })
  },

  destroyCompleted() {
    TodoDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY_COMPLETED
    })
  }

}