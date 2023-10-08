import { useEffect, useState } from "react";
import "./App.css";

type todo = {
	id: number;
	title: string;
	completed: boolean;
};

function App() {
	const [freeWord, setFreeWord] = useState("");
	const [todos, setTodos] = useState<todo[]>([]);

	useEffect(() => {
		const fetchTodos = async () => {
			const response = await fetch("http://localhost:8080/todos", {
				mode: "cors",
				method: "get",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.json();
			console.log(data);
			setTodos(data);
		};
		fetchTodos();
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFreeWord(e.target.value);
	};

	const handleSubmit = async () => {
		console.log(freeWord);
		const response = await fetch("http://localhost:8080/todos", {
			mode: "cors",
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title: freeWord }),
		});
		console.log(response);
	};

	return (
		<div className="App">
			<div>
				<p>todos</p>
				{todos?.map((todo: todo) => (
					<p key={todo.id}>{todo.title}</p>
				))}
			</div>
			<div>
				<p>create</p>
				<input type="text" value={freeWord} onChange={handleChange} />
				<button onClick={handleSubmit}>add</button>
			</div>
		</div>
	);
}

export default App;
