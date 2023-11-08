export default function Dashboard() {
	// let content;

	const isLoggedIn = true;

	// if (isLoggedIn) {
	// 	content = <div>Logged in</div>;
	// } else {
	// 	content = <div>NOT logged in</div>;
	// }

	// if (isLoggedIn) {
	// 	return <div>Logged in</div>;
	// }

	return <div>{isLoggedIn && <div>Logged In</div>}</div>;
}
