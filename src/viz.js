import * as d3 from "d3"
import param from "./parameters.js"
import {walkers} from "./model.js"
import {each,range,map,take} from "lodash-es"
import cfg from "./config.js"

var ctx,dL,W,H;

const box = (t) => {
	let D = param.scale_factor
	let mu = param.exponent.choices[param.exponent.widget.value()]
	let rmax = mu < 2 ? D * Math.pow(t,1.0/mu) : D * Math.pow(t,1.0/2)
	return [-rmax,rmax]
}


const X = d3.scaleLinear()
const Y = d3.scaleLinear()

var line = d3.line().x(d=>X(d.x)).y(d=>Y(d.y));
var locsize = d3.scaleLinear()
	.domain([param.T0,param.maximum_steps/2])
	.range([cfg.simulation.loc_size_large,cfg.simulation.loc_size_small]).clamp(true);

const draw_path = (agents) => {

	each(agents, a => {
		ctx.beginPath();		
  	  	line(a.trajectory);
  	  	ctx.lineWidth = cfg.simulation.path_width;
		ctx.strokeStyle = cfg.simulation.path_color;
  	  	ctx.stroke();
		ctx.closePath();
	})
}


const draw_locations = (agents) => {
	let s = locsize(param.tick);
	each(agents, a => {
		each(a.trajectory,pos=>{
		  ctx.beginPath();
		  ctx.arc(X(pos.x),Y(pos.y),s,0,2*Math.PI);
		  ctx.fillStyle = cfg.simulation.loc_color;
		  ctx.fill();	
		})
	})
	
}
const draw_positions = (agents) => {
	
	each(agents, a => {
	  ctx.beginPath();
	  let pos = a.trajectory[a.trajectory.length-1];
	  ctx.arc(X(pos.x),Y(pos.y),cfg.simulation.pos_size,0,2*Math.PI);
	  ctx.fillStyle = cfg.simulation.pos_color
	  ctx.fill();
	})
}

const initialize = (display,config) => {
	
	W = config.display_size.width;
	H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
	X.domain(box(param.T0));
	Y.domain(box(param.T0));
	
	ctx = display.node().getContext('2d');
	line.context(ctx)	
	
	ctx.clearRect(0, 0, W, H);
	
	let agents = take(walkers,param.number_of_walkers.choices[param.number_of_walkers.widget.value()])

	if (!param.hide_path.widget.value()) {draw_path(agents)}
	if (!param.hide_locations.widget.value()) {draw_locations(agents)}
	if (!param.hide_positions.widget.value()) {draw_positions(agents)}
	
};

const go = (display,config) => {

	 if (param.tick>param.T0) {
 		X.domain(box(param.tick))
 		Y.domain(box(param.tick))
 	}
	
	ctx.clearRect(0, 0, W, H);
	let agents = take(walkers,param.number_of_walkers.choices[param.number_of_walkers.widget.value()])
	if (!param.hide_path.widget.value()) {draw_path(agents)}
	if (!param.hide_locations.widget.value()) {draw_locations(agents)}
	if (!param.hide_positions.widget.value()) {draw_positions(agents)}
		
}

const update = (display,config) => {
	go(display,config)
}

export {initialize,go,update}
