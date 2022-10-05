import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [color, setColor] = useState("#4287f5");

	useEffect(() => {
		const newColor = getRandomColor();

		setColor(newColor);
	}, []);

	function getRandomColor() {
		const red = parseInt(Math.random() * 255);
		const green = parseInt(Math.random() * 255);
		const blue = parseInt(Math.random() * 255);

		return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
	}

	return (
		<>
			<div className="app-container">
				<div className="app-color-box" style={{ background: color }}></div>
				<div className="app-btn-container">
					<button className="app-btn">{color}</button>
					<button className="app-btn">hex 2</button>
					<button className="app-btn">hex 3</button>
				</div>
			</div>
		</>
	);
}

export default App;
