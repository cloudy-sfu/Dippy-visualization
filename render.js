/*
Contains all custom javascript functionality to render graphs and allow for user interaction
*/

// let dotIndex = dots.length - 1;
/*
Function to render the branch and bound tree in the centrebox div container. Parses a DOT
file from TBD format.
*/
function render() {
    // Create one line dot string from multi line string array DOT
    let dot_str = '';
    for (let i=0; i < dots[dotIndex].length; i++) {
        dot_str = dot_str + dots[dotIndex][i];
    }
    dot_str.replace("\n","");

    // Render dotstring in the div just created
    // See https://github.com/magjac/d3-graphviz/blob/master/README.md for explanation of graphviz options
    // Graph is rendered inside an SVG inside the centerbox div
    let graphviz = d3.select("#centerbox").graphviz();
    graphviz.width(document.getElementById("centerbox").clientWidth)
        .height(document.getElementById("centerbox").clientHeight)
        .fit(true) // Graph size is scaled to fit SVG size
        .zoom(true)// Default, enables panning and zooming of graph
        .zoomScaleExtent([0.01, 10000]) // Sets min and max zoom level
        .scale(0.95) // Graph size equals SVG size
        .renderDot(dot_str) // Render the DOT string
    // Add caption for branch/bound step
    document.getElementById("steptitle").innerHTML = "Step " + String(dotIndex);
    // Center graph
    d3.select('g').attr('transform','translate(' +
        String(document.getElementById("centerbox").clientWidth/2) + ',' +
        String(document.getElementById("centerbox").clientHeight/2) + ') scale(1)');
    // Reset zoom level to base
    graphviz.resetZoom();
}

/*
Called on 'previous step' button click, renders the branch and bound tree for the previous step
*/
function prevgraph() {
    // Update dotIndex (allowing for wraparound and negative numbers)
    dotIndex = (dots.length + (dotIndex - 1) % dots.length) % dots.length;
    render();
}

/*
Called on 'next step' button click, renders the branch and bound tree for the next step
*/
function nextgraph() {
    // Update dotIndex (allowing for wraparound)
    dotIndex = (dotIndex + 1) % dots.length;
    render();
}
