import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import {styles} from "d3-widgets"

var timer = {}

const startstop = (display,controls,config) => {
	
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,controls,config),cfg.simulation.delay) : timer.stop();
		
	 controls.select("#radio_exponent")
	 	.transition(1000).style("opacity",ct.go.value()?0:1)
	 controls.select("#radio_exponent")
	 	.style("pointer-events",ct.go.value()?"none":null)	
	 controls.select("#expotext")
	 	.transition(1000).style("opacity",ct.go.value()?0:1)	
}

export default (display,controls,config) => {
	
	ct.go.update(()=>startstop(display,controls,config)) 
	
	ct.setup.update(()=>{
		initialize(display,config)
 		controls.select("#button_play").transition(1000).style("opacity",null)
		controls.select("#button_play").style("pointer-events",null) 
	})
	
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
	
}

