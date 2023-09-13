// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		T0:100,
		scale_factor:5,
		maximum_steps:1000,
		exponent : {
			choices:[0.75,1.0,1.25,1.5,1.75,2.0,3.0],
			default:3
		},
		number_of_walkers : {
			choices:[1,5,10,25],
			default:2
		},
		hide_path: {
			default: false
		},
		hide_locations: {
			default: false
		},
		hide_positions: {
			default: false
		}
}

