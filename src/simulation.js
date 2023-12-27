// this connects the model and the visualization. For each we have three categories of events
// 1. initialization, 2. update, 3. iteration
// this is used by index.js, e.g. to initialize the explorable

import {initialize as model_init, go as model_go} from "./model.js"
import {initialize as visual_init, go as visual_go, update as visual_update} from "./viz.js"
import param from "./parameters.js"
import * as ct from "./controls.js"
import {styles} from "d3-widgets"


function iterate (display,controls,config) {
	let done = false
	done = model_go();

	visual_go(display,config);
	if (done) {
		
		 controls.select("#button_play")
	 		.transition(1000).style("opacity",0)
	 		.style("pointer-events","none")
		
		ct.go.press(controls);
		
	}
};

function initialize (display,config) {	
	model_init();
	visual_init(display,config); 
};

function update (display,config) {	
	visual_update(display,config); 
};


export {iterate,initialize,update}