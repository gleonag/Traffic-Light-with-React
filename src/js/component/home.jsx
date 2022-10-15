import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
/*const Home = () => {
	return (
		<div className="text-center">
			<p>Mi texto, lalala</p>
		</div>
	);
};
export default Home;

*/

const Home = () => {
	const listOfColors = ["red", "green", "yellow"];
		const [color, setColor] = useState ("red")

		const divStyle= {}

		const handleClick = (e) => {
			const target = e.target.className;
			console.log(target);
			const colorIndex = Math.round(Math.random()*2);
			setColor(listOfColors[colorIndex])
		}
	return (
		<div className="text-center">
			<div className="traffic-jam styke">
			{(() => {
				switch (color) {
					case "red": 
						return <div id="red" className="light red" onClick={handleClick}>{color}</div>

					break;
					case "green":
						return <div id="green" className="light green" onClick={handleClick}>{color}</div>
					break;
					case "yellow":
						return <div id="yellow" className="light yellow" onClick={handleClick}>{color}</div>
					break;
					default:
						return <div>no color</div>

				}
			})()}
			</div>
		</div>
	);
};

export default Home;


/**
 const Home = () => {
	const listOfColors = ["red", "green", "yellow"];
		const [color, setColor] = useState ("red")

		const handleClick = (e) => {
			const target = e.target.className;
			console.log(target);
			const colorIndex = Math.round(Math.random()*2)
			setColor(listOfColors[colorIndex])
		}
		return (
			<div className="text-center">
				{(() => {º
					switch (color) {
						case "red" : 
						<div id="red" className="light red" onClick={handleClick}>{color}</div>
						break;
					case "green":
						<div id="green" className="light green" onClick={handleClick}>{color}</div>
						break;
					case "yellow":
						<div id="yellow" className="light yellow" onClick={handleClick}>{color}</div>
						break;
						default:
							return <div>no color</div>
					}
				
				})() }
				{/*<div className="light"{`light ${color}`} onClick={handleClick}>{color}</div>*/
			
/*			</div>
				)	
		};
		
		export default Home;
*/ 

/**{<div className="light"{`light ${color}`} onClick={handleClick}>{color}</div>*/