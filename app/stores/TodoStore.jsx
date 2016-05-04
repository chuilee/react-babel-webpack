import TodoDispatcher from '../dispatcher/TodoDispatcher.jsx';
import {EventEmitter} from 'events';
import TodoConstants from '../constants/TodoConstants.jsx';

const CHANGE_EVENT = 'change'

var _todos = {}

/**
 * 创建一个item
 * @param  {[string]} text [description]
 * @return {[type]}      [description]
 */
var create = text => {
	let id = (+new Date() + Math.floor(Math.random()*999999)).toString(36)
	_todos[id] = {
		id: id,
		complete: false, 
		text: text
	}
}

/**
 * 更新一个item
 * @param  {string} id      [description]
 * @param  {object} updates [description]
 * @return {[type]}         [description]
 */
var update = (id, updates) => {
	_todos[id] = Object.assign({}, _todos[id], updates)
}

/**
 * 更新所有items
 * @param  {object} updates [description]
 * @return {[type]}         [description]
 */
var updateAll = updates => {
	for (var id in _todos) {
		update(id, updates)
	}
}

var destory = id => {
	delete _todos[id]
}

var destoryCompleted = () => {
	for (var id in _todos) {
		if(_todos[id].complete) {
			destory(id)
		}
	}
}

var TodoStore = Object.assign({}, EventEmitter.prototype, {
	areAllComplete() {
		for (var id in _todos) {
			if (!_todos[id].complete) {
				return false
			}
		}
		return true
	},

	getAll() {
		return _todos
	},

	emitChange() {
		this.emit(CHANGE_EVENT)
	},

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	}

})

TodoDispatcher.register((action) => {
	let text

	switch (action.actionType) {
		case TodoConstants.TODO_CREATE:
			text = action.text.trim()
			if (text!='') {
				create(text)
				TodoStore.emitChange()
			};
			break;

		case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
			if (TodoStore.areAllComplete()) {
				updateAll({complete: false})
			} else {
				updateAll({complete: true})
			}
			TodoStore.emitChange()
			break;

		case TodoConstants.TODO_UNDO_COMPLETE:
			update(action.id, {complete: false})
			TodoStore.emitChange()
			break;

		case TodoConstants.TODO_COMPLETE:
			update(action.id, {complete: true})
			TodoStore.emitChange()
			break;

		case TodoConstants.TODO_UPDATE_TEXT:
			text = action.text.trim()
			if (text != '') {
				update(action.id, {text: text})
				TodoStore.emitChange()
			};
			break;

		case TodoConstants.TODO_DESTORY:
			destory(action.id)
			TodoStore.emitChange()
			break;

		case TodoConstants.TODO_DESTORY_COMPLETE:
			destoryCompleted();
			TodoStore.emitChange()
			break;

		default:
	}
})

export default TodoStore