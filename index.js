const todosArr = [];

class Todos {
	set add(title) {
		this.todo = {
			id: todosArr.length + 1,
			title: title,
			completed: false,
		};

		todosArr.push(this.todo);
	}

	set complete(id) {
		const completing = todosArr.find((todo) => {
			return todo.id === id;
		});

		completing && (completing.completed = true);
	}

	set remove(id) {
		const removingIndex = todosArr.findIndex((todo) => {
			return todo.id === id;
		});

		todosArr.splice(removingIndex, 1);
	}

	removeAll() {
		todosArr.length = 0;
	}

	showCompleted() {
		const completedTodos = todosArr.filter((todo) => {
			return todo.completed === true;
		});
		console.log(completedTodos);
	}

	showActive() {
		const activeTodos = todosArr.filter((todo) => {
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

console.log(todosArr);
