import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [color, setColor] = useState(null);
	const [colors, setColors] = useState([]);

	useEffect(() => {
		const firstColor = getRandomColor();
		const secondColor = getRandomColor();
		const thirdColor = getRandomColor();

		setColor(firstColor);
		setColors([firstColor, secondColor, thirdColor]);
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
					{colors.map((color) => (
						<button className="app-btn" key={color}>
							{color}
						</button>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
