import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [color, setColor] = useState(null);
	const [colors, setColors] = useState([]);
	const [result, setResult] = useState(null);

	useEffect(() => {
		const firstColor = getRandomColor();
		const secondColor = getRandomColor();
		const thirdColor = getRandomColor();

		setColor(firstColor);
		setColors(
			[firstColor, secondColor, thirdColor].sort(() => Math.random() - 0.5)
		);
	}, []);

	function getRandomColor() {
		const red = parseInt(Math.random() * 255);
		const green = parseInt(Math.random() * 255);
		const blue = parseInt(Math.random() * 255);

		return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
	}

	function handleResult(singleColor) {
		if (singleColor === color) setResult(true);
		else setResult(false);
	}

	return (
		<>
			<div className="app-container">
				<div className="app-color-box" style={{ background: color }}></div>
				<div className="app-btn-container">
					{colors.map((singleColor) => (
						<button
							className="app-btn"
							key={singleColor}
							onClick={() => handleResult(singleColor)}
						>
							{singleColor}
						</button>
					))}
				</div>
				<div className="app-result-container">
					<div className="app-result-wrong">
						{result === false ? "Wrong!" : null}
					</div>
					<div className="app-result-correct">
						{result === true ? "Correct!" : null}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
