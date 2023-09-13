// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map} from "lodash-es"
//import {rad2deg,deg2rad} from "./utils"

//const L = param.L;
//const dt = param.dt;

// typically objects needed for the explorable
// are defined here

var walkers = [];

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	const N = param.number_of_walkers.choices[param.number_of_walkers.choices.length-1];
	
	walkers = map(range(N), i => { return {
				index:i,
				trajectory:[{x:0,y:0}]
			} 
	});	
	
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	each(walkers,w=>{
		let theta = Math.random()*2*Math.PI;
		let mu = param.exponent.choices[param.exponent.widget.value()]
		let l = 1.0/Math.pow(Math.random(),1.0/mu)

		w.trajectory.push({x:w.trajectory[param.tick].x+Math.cos(theta)*l,y:w.trajectory[param.tick].y+Math.sin(theta)*l})		
	})
	
	param.tick++;
	return param.tick>param.maximum_steps

}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 


// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {walkers,initialize,go}
