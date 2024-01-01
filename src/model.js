import param from "./parameters.js"
import {each,range,map} from "lodash-es"

var walkers = [];

const initialize = () => {

	param.timer={}; param.tick=0;

	const N = param.number_of_walkers.choices[param.number_of_walkers.choices.length-1];
	
	walkers = map(range(N), i => { return {
				index:i,
				trajectory:[{x:0,y:0}]
			} 
	});	
		
};

const go  = () => {
	
	each(walkers,w=>{

		let theta = Math.random()*2*Math.PI;
		let mu = param.exponent.choices[param.exponent.widget.value()]
		let l = 1.0/Math.pow(Math.random(),1.0/mu)

		w.trajectory.push({x:w.trajectory[param.tick].x+Math.cos(theta)*l,y:w.trajectory[param.tick].y+Math.sin(theta)*l})		

	});
	
	param.tick++;
	return param.tick>param.maximum_steps

}

export {walkers,initialize,go}
