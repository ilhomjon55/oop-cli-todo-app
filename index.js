class Todos {
	todoList = [];

	set add(title) {
		const newTodo = {
			id: this.todoList.length + 1,
			title: title,
			completed: false,
		};

		this.todoList.push(newTodo);
	}

	set complete(id) {
		const completing = this.todoList.find((todo) => {
			return todo.id === id;
		});

		completing && (completing.completed = true);
	}

	set remove(id) {
		const removingIndex = this.todoList.findIndex((todo) => {
			return todo.id === id;
		});

		this.todoList.splice(removingIndex, 1);
	}

	removeAll() {
		this.todoList.length = 0;
	}

	showCompleted() {
		const completedTodos = this.todoList.filter((todo) => {
			return todo.completed === true;
		});
		console.log(completedTodos);
	}

	showActive() {
		const activeTodos = this.todoList.filter((todo) => {
			return todo.completed === false;
		});
		console.log(activeTodos);
	}
}

const todos = new Todos();

// Add todo just write title
todos.add = 'Play';
todos.add = 'Swim';
todos.add = 'Jog';
todos.add = 'Code';

// Complete tasks by id
todos.complete = 1;
todos.complete = 2;

// Remove tasks by id
todos.remove = 3;

// ********************************
// Remove | showCompleted | showActive  all task methods

// todos.removeAll();
// todos.showCompleted();
// todos.showActive();
// ********************************

console.table(todos.todoList);
