import PropTypes from "prop-types";
import { useState } from "react";

export default function Test({ name, surname, count, isDead }) {
	const [animalName, setAnimalName] = useState("No name");

	// function sayHello(name) {
	// 	console.log("HELLO " + name);
	// }

	return (
		<>
			<p>{animalName}</p>
			<h1>{name}</h1>
			<h2>{surname}</h2>
			<p>Count: {count}</p>
			<p>Is dead: {isDead.toString()}</p>
			{/* <button onClick={() => sayHello("Bob")}>Blah</button> */}
			<button onClick={() => setAnimalName("Rex")}>Change Name</button>
		</>
	);
}

Test.propTypes = {
	name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	isDead: PropTypes.bool.isRequired,
};
