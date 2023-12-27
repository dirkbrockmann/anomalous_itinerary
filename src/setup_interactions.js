// here all functions are connected to the widgets, these functions can be defined here, like the 
// startstop function connected to the go button, or they can be functions defined elsewhere,
// like the initialization functions, or reset parameter functions. Regardless, here
// all functions that need to be execuded for example if a controls element is modified, are connected
// to the update() method of an widget object. See below.


import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import {styles} from "d3-widgets"

var timer = {}

// this defines a startstop simulation function that execute the function iterate() that is defined in simulation.js
// it also uses information defined in config.js, in this case the delay time between iteration steps.

const startstop = (display,controls,config) => {
	
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,controls,config),cfg.simulation.delay) : timer.stop()
	
	// toggle visibility of exponent radio
	
	 controls.select("#radio_exponent")
	 	.transition(1000).style("opacity",ct.go.value()?0:1)
	 controls.select("#radio_exponent")
	 	.style("pointer-events",ct.go.value()?"none":null)
	
	 controls.select("#expotext")
	 	.transition(1000).style("opacity",ct.go.value()?0:1)
	
}

// this function is called by index.js to connect actions and update functions to the explorables.
// once this is called, all widgets are usable in the controls panel

export default (display,controls,config) => {
	
//	ct.reset.update(()=>resetparameters(controls))	// one button gets the resetparameters() method defined in resetparameters.js
	ct.go.update(()=>startstop(display,controls,config)) // one button gets the startstop function defined above
	
	ct.setup.update(()=>{
		initialize(display,config)
 		controls.select("#button_play").transition(1000).style("opacity",null)
		controls.select("#button_play").style("pointer-events",null) 
	})
	
	 // this once gets the initialize() method defined in simulation.js
	param.exponent.widget.update(
		()=>{
				initialize(display,config)
		 		controls.select("#button_play").transition(1000).style("opacity",null)
				controls.select("#button_play").style("pointer-events",null) 
			}
	)
	
	param.number_of_walkers.widget.update(()=>{update(display,config)})
	param.hide_locations.widget.update(()=>{update(display,config)})
	param.hide_positions.widget.update(()=>{update(display,config)})
	param.hide_path.widget.update(()=>{update(display,config)})

	 // here we say that if a specific parameter is changed, in this case the number of particles, we also re_initialize the system (model and visuals)
	
}

