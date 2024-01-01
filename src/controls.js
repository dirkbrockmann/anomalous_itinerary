import * as widgets from "d3-widgets"
import {styles} from "d3-widgets"

import {range,map,toPairs} from "lodash-es"
import cfg from "./config.js"
import parameters from "./parameters.js"
import {toArray,add_id_label,add_widget,get_booleans,get_choices} from "./utils.js"

const booleans = get_booleans(parameters);
const choices = get_choices(parameters);

add_id_label(booleans)
add_id_label(choices)

const bo = toArray(booleans);
const ch = toArray(choices);

const toggles = map(bo, 
		v => widgets.toggle()
					.value(v.default)
					.id(v.id)
					.label(v.label)
					.labelposition(cfg.widgets.toggle_label_position)		
		);

const radios = map(ch, 
		v => widgets.radio()
					.choices(v.choices)
					.id(v.id)
					.value(v.default)
		);
		
add_widget(bo,toggles);
add_widget(ch,radios);

const go = widgets.button().actions(["play","pause"]).id("play")
const setup = widgets.button().actions(["back"]).id("reset")
		
const buttons = [go,setup];

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

	controls.append("g")
		.attr("transform","translate("+expo_text_pos.x+","+expo_text_pos.y+")")
		.attr("class",styles.widget)
		.append("text").text(cfg.widgets.expo_text)
		.attr("class",styles.title)
		.attr("id","expotext")
	
	controls.append("g")
		.attr("transform","translate("+walker_text_pos.x+","+walker_text_pos.y+")")
		.attr("class",styles.widget)
		.append("text").text(cfg.widgets.walker_text)
		.attr("class",styles.title)		
		.attr("id","walkertext")
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	setup.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	controls.selectAll(null).data(toggles).enter().append(widgets.widget)
	controls.selectAll(null).data(buttons).enter().append(widgets.widget);
	controls.selectAll(null).data(radios).enter().append(widgets.widget)

}

export {toggles,radios,go,setup,booleans,choices}


