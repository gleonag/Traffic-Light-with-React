import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
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
				{(() => {
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
				{/*<div className="light"{`light ${color}`} onClick={handleClick}>{color}</div>*/}
			
			</div>
		)	
		}


export default Home;
