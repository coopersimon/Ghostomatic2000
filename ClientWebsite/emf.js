var response = 	'{"timestamp": "_", "avg" : 0, "min": 0, "max" : 0}';
var mVmax = 700;
var dialWidth = 20;
var dialVal = 0;
var graphData = new Array(50).fill(5)
var updateDelay = 500;
var graphWidth = 100;

/****** FUNCTION CALLED ON WINDOW LOAD ******/
function onDocumentReady() {

	var powerGauge = gauge('#power-gauge', {
		size: 600,
		clipWidth: 1000,
		clipHeight: 400,
		ringInset: 50,
		ringWidth: 20,
		maxValue: 10,
		transitionMs: 4000,
		minValue: -10,
		pointerWidth: 20,
		minAngle: -70,
		maxAngle: 70
	});
	powerGauge.render();
	
	function updateReadings() {
		powerGauge.update(dialVal);
	}
	
	// every few seconds update reading values
	updateReadings();
	setInterval(function() {
		updateReadings();
	}, updateDelay);


	var url = "http://0.0.0.0:9000"
    var socket = io.connect(url + "/dd");
    socket.on('msg', function(msg) {
        console.log(msg.msg);
        response = msg.msg;
    });
    
}


/****** FUNCTION TO GET JSON, CALLED AT REGULAR INTERVALS ******/
function getJSON() {

	obj = JSON.parse(response);
	console.log(obj);

	max = obj.max;
	min = obj.min;

	amplitude = Math.abs(max) + Math.abs(min);

	scaled_reading = (Math.log2(amplitude + 1) * 100) - 500;
	if (scaled_reading < 0) {
		scaled_reading = 0;
	}

	if(scaled_reading > mVmax) {
		scaled_reading = mVmax
	}

	// if(amplitude > mVmax) {
	// 	amplitude = mVmax
	// }

	graphPoint = (graphWidth/mVmax)*scaled_reading/2
	graphPoint += (graphWidth/2)
	dialVal = (scaled_reading * dialWidth/ mVmax)-(dialWidth/2);
	graphData.push(graphPoint)

} 

getJSON();
setInterval(function() {
	getJSON();
}, updateDelay);

/****** FUNCTION TO DISPLAY THE SPARKLINES ******/
function displayGraphExample(id, width, height, interpolation, animate, transitionDelay) {
// create an SVG element inside the #graph div that fills 100% of the div
var graph = d3.select(id).append("svg:svg").attr("width", "100%").attr("height", "100%");

// create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
var data = [3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 9];

// X scale will fit values from 0-10 within pixels 0-100
var x = d3.scale.linear().domain([0, 48]).range([-5, width]); // starting point is -5 so the first value doesn't show and slides off the edge as part of the transition
// Y scale will fit values from 0-10 within pixels 0-100
var y = d3.scale.linear().domain([0, 10]).range([0, height]);

// create a line object that represents the SVN line we're creating
var line = d3.svg.line()
	// assign the X function to plot our line as we wish
	.x(function(d,i) { 
		// verbose logging to show what's actually being done
		////console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
		// return the X coordinate where we want to plot this datapoint
		return x(i); 
	})
	.y(function(d) { 
		// verbose logging to show what's actually being done
		////console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
		// return the Y coordinate where we want to plot this datapoint
		return y(d); 
	})
	.interpolate(interpolation)

	// display the line by appending an svg:path element with the data line we created above
	graph.append("svg:path").attr("d", line(data));
	// or it can be done like this
	//graph.selectAll("path").data([data]).enter().append("svg:path").attr("d", line);
	
	
	function redrawWithAnimation() {
		// update with animation
		graph.selectAll("path")
			.data([data]) // set the new data
			.attr("transform", "translate(" + x(1) + ")") // set the transform to the right by x(1) pixels (6 for the scale we've set) to hide the new value
			.attr("d", line) // apply the new data values ... but the new value is hidden at this point off the right of the canvas
			.transition() // start a transition to bring the new value into view
			.ease("linear")
			.duration(transitionDelay) // for this demo we want a continual slide so set this to the same as the setInterval amount below
			.attr("transform", "translate(" + x(0) + ")"); // animate a slide to the left back to x(0) pixels to reveal the new value
			
			/* thanks to 'barrym' for examples of transform: https://gist.github.com/1137131 */
	}
	
	function redrawWithoutAnimation() {
		// static update without animation
		graph.selectAll("path")
			.data([data]) // set the new data
			.attr("d", line); // apply the new data values
	}
	
	setInterval(function() {
		var v = data.shift(); // remove the first element of the array
		data.push(v); // add a new element to the array (we're just taking the number we just shifted off the front and appending to the end)
		if(animate) {
			redrawWithAnimation();
		} else {
			redrawWithoutAnimation();
		}
	}, updateDelay);
}

/****** FUNCTIONS AND VARIABLES TO DISPLAY THE EMF METER ******/

var gauge = function(container, configuration) {
	

	var that = {};
	var labelText = ["Normal","Poltergeist","Spectre","Phantom","Ghost"]
	var labelMap = {};
	var config = {
		size						: 200,
		clipWidth					: 200,
		clipHeight					: 110,
		ringInset					: 20,
		ringWidth					: 100,
		
		pointerWidth				: 30,
		pointerTailLength			: 2,
		pointerHeadLengthPercent	: 0.9,
		
		minValue					: 0,
		maxValue					: 10,
		
		minAngle					: -90,
		maxAngle					: 90,
		
		transitionMs				: 750,
		
		majorTicks					: 5,
		labelFormat					: d3.format(',g'),
		labelInset					: 10,
		
		arcColorFn					: d3.interpolateHsl(d3.rgb('#4DFF00'), d3.rgb('#ff0000'))
	};

	
	var range = undefined;
	var r = undefined;
	var pointerHeadLength = undefined;
	var value = 0;
	
	var svg = undefined;
	var arc = undefined;
	var scale = undefined;
	var ticks = undefined;
	var tickData = undefined;
	var pointer = undefined;

	var donut = d3.layout.pie();
	
	function deg2rad(deg) {
		return deg * Math.PI / 180;
	}
	
	function newAngle(d) {
		var ratio = scale(d);
		var newAngle = config.minAngle + (ratio * range);
		return newAngle;
	}
	
	function configure(configuration) {
		var prop = undefined;
		for ( prop in configuration ) {
			config[prop] = configuration[prop];
		}
		
		range = config.maxAngle - config.minAngle;
		r = config.size / 2;
		pointerHeadLength = Math.round(r * config.pointerHeadLengthPercent);

		// a linear scale that maps domain values to a percent from 0..1
		scale = d3.scale.linear()
			.range([0,1])
			.domain([config.minValue, config.maxValue]);
			
		ticks = scale.ticks(config.majorTicks);
		
		for (var i=0;i<5;i++) {
			labelMap[ticks[i]] = labelText[i]
		}


		tickData = d3.range(config.majorTicks).map(function() {return 1/config.majorTicks;});
		arc = d3.svg.arc()
			.innerRadius(r - config.ringWidth - config.ringInset)
			.outerRadius(r - config.ringInset)
			.startAngle(function(d, i) {
				return deg2rad(config.minAngle);
			})
			.endAngle(function(d, i) {
				var ratio = d * (i+1);
				return deg2rad(config.maxAngle);
			});
	}
	that.configure = configure;
	
	function centerTranslation() {
		var r_x = r
		var r_y = r + 10
		return 'translate('+r_x +','+ r_y +')';
	}
	
	function isRendered() {
		return (svg !== undefined);
	}
	that.isRendered = isRendered;
	
	function render(newValue) {
		svg = d3.select(container)
			.append('svg:svg')
				.attr('class', 'gauge')
				.attr('width', config.clipWidth)
				.attr('height', config.clipHeight);
		
		var centerTx = centerTranslation();
		
		var arcs = svg.append('g')
				.attr('class', 'arc')
				.attr('transform', centerTx);

		arcs.selectAll('path')
				.data(tickData)
			.enter().append('path')
				.attr('stroke', function(d, i) {
					return d3.rgb('#fff');
				})
				.attr('d', arc);
		
		var lg = svg.append('g')
				.attr('class', 'label')
				.attr('transform', centerTx);
		lg.selectAll('text')
				.data(ticks)
			.enter().append('text')
				.attr('transform', function(d) {
					var ratio = scale(d);
					var newAngle = config.minAngle + (ratio * range);
					return 'rotate(' +newAngle +') translate(0,' +(config.labelInset - r) +')';
				})
				.text(function(d) { 
							return labelMap[d]
						});
				

		var lineData = [ [config.pointerWidth / 2, 0], 
						[0, -pointerHeadLength],
						[-(config.pointerWidth / 2), 0],
						[config.pointerWidth / 2, 0] ];
		var pointerLine = d3.svg.line().interpolate('monotone');
		var pg = svg.append('g').data([lineData])
				.attr('class', 'pointer')
				.attr('transform', centerTx);
		
		pointer = pg.append('path')
			.attr('d', pointerLine )
			.attr('transform', 'rotate(' +config.minAngle +')');
		
		update(newValue === undefined ? 0 : newValue);
	}
	that.render = render;
	
	function update(newValue, newConfiguration) {
		if ( newConfiguration  !== undefined) {
			configure(newConfiguration);
		}
		var ratio = scale(newValue);
		var newAngle = config.minAngle + (ratio * range);
		pointer.transition()
			.duration(config.transitionMs)
			.ease('elastic')
			.attr('transform', 'rotate(' +newAngle +')');
	}
	that.update = update;

	configure(configuration);
	
	return that;
};




function displayGraphExample(id, width, height, interpolation, animate, transitionDelay) {
// create an SVG element inside the #graph div that fills 100% of the div
var graph = d3.select(id).append("svg:svg").attr("width", "100%").attr("height", "100%");

// X scale will fit values from 0-10 within pixels 0-100
var x = d3.scale.linear().domain([0, 48]).range([-5, width]); // starting point is -5 so the first value doesn't show and slides off the edge as part of the transition
// Y scale will fit values from 0-10 within pixels 0-100
var y = d3.scale.linear().domain([0, graphWidth]).range([0, height]);

// create a line object that represents the SVN line we're creating
var line = d3.svg.line()
	// assign the X function to plot our line as we wish
	.x(function(d,i) { 
		// verbose logging to show what's actually being done
		////console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
		// return the X coordinate where we want to plot this datapoint
		return x(i); 
	})
	.y(function(d) { 
		// verbose logging to show what's actually being done
		////console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
		// return the Y coordinate where we want to plot this datapoint
		return y(d); 
	})
	.interpolate(interpolation)

	// display the line by appending an svg:path element with the data line we created above
	graph.append("svg:path").attr("d", line(graphData));
	// or it can be done like this
	//graph.selectAll("path").data([data]).enter().append("svg:path").attr("d", line);
	
	
	function redrawWithAnimation() {
		// update with animation
		graph.selectAll("path")
			.data([graphData]) // set the new data
			.attr("transform", "translate(" + x(1) + ")") // set the transform to the right by x(1) pixels (6 for the scale we've set) to hide the new value
			.attr("d", line) // apply the new data values ... but the new value is hidden at this point off the right of the canvas
			.transition() // start a transition to bring the new value into view
			.ease("linear")
			.duration(transitionDelay) // for this demo we want a continual slide so set this to the same as the setInterval amount below
			.attr("transform", "translate(" + x(0) + ")"); // animate a slide to the left back to x(0) pixels to reveal the new value
			
			/* thanks to 'barrym' for examples of transform: https://gist.github.com/1137131 */
		graphData.shift();			
	}
	
	function redrawWithoutAnimation() {
		// static update without animation
		graph.selectAll("path")
			.data([graphData]) // set the new data
			.attr("d", line); // apply the new data values
	}
	
	setInterval(function() {
		//var v = data.shift(); // remove the first element of the array
		//data.push(v); // add a new element to the array (we're just taking the number we just shifted off the front and appending to the end)
		if(animate) {
			redrawWithAnimation();
		} else {
			redrawWithoutAnimation();
		}
	}, updateDelay);
}
