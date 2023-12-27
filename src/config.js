// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default {
	widgets:{

		toggle_anchor: {x:10,y:1},
		toggle_label_position:"left",
		toggle_gap:1.5,

		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:3,y:5},

		expo_radio_anchor:{x:1,y:11},
		expo_radio_size:10*40,		
		expo_radio_orientation:"horizontal",
		expo_radio_labelposition:"bottom",
		expo_radio_shape:"circle",
		expo_radio_buttonsize:30,
		expo_text:"Exponent \u03BC",
		expo_textsize:26,
		expo_textanchor:{x:6,y:10},

		walker_radio_anchor:{x:5,y:7.5},
		walker_radio_size:6*40,		
		walker_radio_orientation:"horizontal",
		walker_radio_labelposition:"bottom",
		walker_radio_shape:"circle",
		walker_radio_buttonsize:30,
		walker_textsize:20,
		walker_textanchor:{x:8,y:6.5},
		walker_text:"Number of walkers",
		

	},
	simulation: {
		delay:0,
		path_width:1.5,
		path_color:"rgba(0,0,0,0.5)",
		loc_size_large:2,
		loc_size_small:2,
		loc_color:"rgba(0,0,0,.8)",
		pos_size:3,
		pos_color:"red"
	}
}