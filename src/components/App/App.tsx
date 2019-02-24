import { getModel, Model, Singletone } from 'atom4';
import React from 'react';
import './App.scss';

export function App() {
	return (
		<root>
			<Todos />
		</root>
	);
}

class Todo extends Model {
	title = '';
	done = false;
	toggleDone() {
		this.done = !this.done;
	}
}

class TodosModel extends Singletone {
	todos: Todo[] = [];
	addTodo(title: string) {
		const todo = new Todo().fromJSON({ title, done: false });
		this.todos = this.todos.concat(todo);
	}
	remove(todo: Todo) {
		const pos = this.todos.indexOf(todo);
		this.todos = this.todos.slice(0, pos).concat(this.todos.slice(pos + 1));
	}
	doneCount() {
		return this.todos.filter(todo => todo.done).length;
	}
}

function Todos({ todos = getModel(TodosModel) }: { todos?: Readonly<TodosModel> }) {
	return (
		<root>
			<title>Todos</title>
			<list>
				{todos.todos.map((todo, i) => (
					<item key={i}>
						<label>
							<checkbox
								as="input"
								type="checkbox"
								checked={todo.done}
								onChange={() => todo.toggleDone()}
							/>
							<name as="span">{todo.title}</name>
						</label>
						<remove onClick={() => todos.remove(todo)}>X</remove>
					</item>
				))}
				<count>Done count: {todos.doneCount()}</count>
				<NewTodo onSubmit={title => todos.addTodo(title)} />
			</list>
		</root>
	);
}

function NewTodo({ onSubmit }: { onSubmit: (title: string) => void }) {
	let titleElement: HTMLInputElement;
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				onSubmit(titleElement.value);
				titleElement.value = '';
			}}
		>
			<input ref={el => (titleElement = el!)} />
			<add as="button">Create new todo</add>
		</form>
	);
}
