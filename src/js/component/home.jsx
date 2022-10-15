import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {
	const listOfColors = ["red", "green", "yellow"];
		const [color, setColor] = useState ("red")

		const divStyle= {}

		const handleClick = (e) => {
			const target = e.target.className;
			console.log(target);
			const colorIndex = Math.round(Math.random()*2);
			console.log(colorIndex);
			document.getElementById(target).className = 'red-active'
			setColor(listOfColors[colorIndex])

		}
		const handleLight = () => {
			const colorIndex = Math.round(Math.random()*2);
			console.log(colorIndex);
			for(let i = 0; i < listOfColors.length; i++) {
				document.getElementById(listOfColors[i]).style.opacity = '30%'
			}
			document.getElementById(listOfColors[colorIndex]).style.opacity = '100%'
		
		}
	return (
		<div className="text-center">
			<div class="trafficlight">
				<div class="protector"></div>
				<div class="protector"></div>
				<div class="protector"></div>
				<div id="red" class="red"></div>
				<div id="yellow" class="yellow"></div>
				<div id="green" class="green"></div>
			</div>
			<div className="traffic-jam styke">
				<button onClick={handleLight}>Pulse aqui</button>
		{(() => {
				switch (color) {
					case "red": 
						return <div className="red" onClick={handleClick}>{color}</div>
					case "green":
						return <div className="green" onClick={handleClick}>{color}</div>
					case "yellow":
						return <div  className="yellow" onClick={handleClick}>{color}</div>
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

/** 
const Home = () => {
	const listOfColors = ["red", "green", "yellow"];
	const handleLight = () => {
		const colorIndex = Math.round(Math.random()*2);
		console.log(colorIndex);
		for(let i = 0; i < listOfColors.length; i++) {
			document.getElementById(listOfColors[i]).style.opacity = '30%'
		}
		document.getElementById(listOfColors[colorIndex]).style.opacity = '100%'
	
	}
	return (
		<div className="text-center">
			<div class="trafficlight">
				<div class="protector"></div>
				<div class="protector"></div>
				<div class="protector"></div>
				<div id="red" class="red"></div>
				<div id="yellow" class="yellow"></div>
				<div id="green" class="green"></div>
			</div>
			<div className="traffic-jam styke">
				<button onClick={handleLight}>Pulse aqui</button>
			
			</div>
		</div>
	);
};

export default Home;

*/
/** 
switch (color) {
	case "red": 
		return <div className="red" onClick={handleClick}>{color}</div>
	case "green":
		return <div className="green" onClick={handleClick}>{color}</div>
	case "yellow":
		return <div  className="yellow" onClick={handleClick}>{color}</div>
	default:
		return <div>no color</div>
}
})()}

*/