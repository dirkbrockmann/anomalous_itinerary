// this sets up the controls in the control panel
// it adds the widgets to the container and generates attaches the widget to the 
// variables and parameters defined in parameters.js

import * as widgets from "d3-widgets"
import {range,map,toPairs} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {toArray,add_id_label,add_widget,get_booleans,get_choices} from "./utils.js"


// defined variables for variables, booleans and choices, extracting the information from parameters.js

//const variables = get_variables(parameters);
const booleans = get_booleans(parameters);
const choices = get_choices(parameters);

// adding ids and labels to the variables based on names for the variables, see utils.js for the function add_id_label

//add_id_label(variables)
add_id_label(booleans)
add_id_label(choices)

// making arrays for the three types of parameters

//const va = toArray(variables);
const bo = toArray(booleans);
const ch = toArray(choices);

// making the slider widgets objects, based on the variables

// const sliders = map(va,
// 		v => widgets.slider()
// 					.id(v.id)
// 					.label(v.label)
// 					.range(v.range)
// 					.value(v.default)
// 					.size(cfg.widgets.slider_size)
// 		);

// making the toggle widgets objects, based on the switches
		
const toggles = map(bo, 
		v => widgets.toggle()
					.value(v.default)
					.id(v.id)
					.label(v.label)
					.labelposition(cfg.widgets.toggle_label_position)
		);

// making the radio widgets objects, based on the choices
		
const radios = map(ch, 
		v => widgets.radio()
					.choices(v.choices)
					.id(v.id)
					.value(v.default)
		);


// you can remove some of these, if the explorable doesn't have a subset of parameters,
// e.g. if the explorable doesn't need toggles, you can remove all the toggle stuff


// this is handy, because the actual widgets are connected to the associated parameters
// this is important, if one wants to access the widgets based on parameters.
		
add_widget(bo,toggles);
add_widget(ch,radios);


// This is generic for many explorables, the action buttons, play/pause, back and rewind
// there are some explorables that have different buttons, so one needs to code this here.

const go = widgets.button().actions(["play","pause"]).id("play")
const setup = widgets.button().actions(["back"]).id("reset")
//const reset = widgets.button().actions(["rewind"])

// all the buttons in an array
		
const buttons = [go,setup];

// here's the important function accessible to the outside, there's flexibility on how
// to code this. bottomline is that all the widgets get attached to the controls panel,
// that is provided as an argument. the grid object is also passed, which makes it easier
// to place the widgets on the grid. The positional stuff here needs to be adapted
// to the needs of the explorable

export default (controls,grid)=>{


	const tg_pos=grid.position(cfg.widgets.toggle_anchor.x,range(toggles.length)
			.map(x=>(cfg.widgets.toggle_anchor.y+cfg.widgets.toggle_gap*x)));

	toggles.forEach((tg,i) => tg.position(tg_pos[i]));
	
	const expo_ra_pos=grid.position(cfg.widgets.expo_radio_anchor.x,cfg.widgets.expo_radio_anchor.y);		
	const walker_ra_pos=grid.position(cfg.widgets.walker_radio_anchor.x,cfg.widgets.walker_radio_anchor.y);		
		

	radios[0].position(expo_ra_pos)
		 .size(cfg.widgets.expo_radio_size)
 		.shape(cfg.widgets.expo_radio_shape)
 		.orientation(cfg.widgets.expo_radio_orientation)
 		.labelposition(cfg.widgets.expo_radio_labelposition)
 		.buttonsize(cfg.widgets.xpo_radio_buttonsize)

	radios[1].position(walker_ra_pos)
		.size(cfg.widgets.walker_radio_size)
		.shape(cfg.widgets.walker_radio_shape)
		.orientation(cfg.widgets.walker_radio_orientation)
		.labelposition(cfg.widgets.walker_radio_labelposition)
		.shape(cfg.widgets.walker_radio_shape)
		.buttonsize(cfg.widgets.walker_radio_buttonsize)
	
	
	const expo_text_pos = grid.position(cfg.widgets.expo_textanchor.x,cfg.widgets.expo_textanchor.y)
	const walker_text_pos = grid.position(cfg.widgets.walker_textanchor.x,cfg.widgets.walker_textanchor.y)

	controls.append("text").text(cfg.widgets.expo_text)
		.attr("transform","translate("+expo_text_pos.x+","+expo_text_pos.y+")")
		.style("font-size",cfg.widgets.expo_textsize)
		.style("text-anchor","middle")
		.attr("id","expotext")
	
	controls.append("text").text(cfg.widgets.walker_text)
		.attr("transform","translate("+walker_text_pos.x+","+walker_text_pos.y+")")
		.style("font-size",cfg.widgets.walker_textsize)
		.style("text-anchor","middle")
		.attr("id","walkertext")
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
//	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	setup.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	

//	controls.selectAll(".slider").data(sliders).enter().append(widgets.widget);
	controls.selectAll(".toggle").data(toggles).enter().append(widgets.widget);
	controls.selectAll(".button").data(buttons).enter().append(widgets.widget);
	controls.selectAll(".radio").data(radios).enter().append(widgets.widget)

}

// here are all the exported objects, all the parameters, their associated widgets and the action buttons

export {toggles,radios,go,setup,booleans,choices}


