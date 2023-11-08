import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);
	const [firstName, setFirstName] = useState("");

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div>
			<h1>Name: {firstName}</h1>
			<div>Counter: {count}</div>
			<button onClick={handleClick}>Add 1</button>
			<div>
				<input onChange={(event) => setFirstName(event.target.value)} />
			</div>
		</div>
	);
}
