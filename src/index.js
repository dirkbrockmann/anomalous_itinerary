import  'tachyons/css/tachyons.min.css'

import container_cfg from "./container_config.js"
import cfg from "./config.js"
import setup_container from "./setup_container.js"
import setup_interactions from "./setup_interactions.js"
import setup_controls from "./controls.js"
import {initialize as setup_simulation} from "./simulation.js"
import {go} from "./controls.js"
import meta from "./meta.js"

var display,controls,grid;

const load = function (container_id,config=container_cfg) {
	
	const container = setup_container(container_id,config);

	display = container.display;
	controls = container.controls;
	grid = container.grid;
	
	setup_controls(controls,grid); 
	setup_interactions(display,controls,config); 
	setup_simulation(display,config)
}

const halt  = function(){
	if(go.value()==1){
			go.press(controls)
	}
}


export {load,container_cfg as config, halt,meta};
