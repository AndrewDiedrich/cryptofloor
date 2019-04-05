const D3Node = require('d3-node')
const d3n = new D3Node()      // initializes D3 with container element
d3n.createSVG(10,20).append('g') // create SVG w/ 'g' tag and width/height
d3n.svgString() // output: <svg width=10 height=20 xmlns="http://www.w3.org/2000/svg"><g></g></svg>

const options = { selector: '#chart', container: '<div id="container"><div id="chart"></div></div>' }
const d3n = new D3Node(options) // initializes D3 with container element
const d3 = d3n.d3
d3.select(d3n.document.querySelector('#chart')).append('span') // insert span tag into #chart
d3n.html()   // output: <html><body><div id="container"><div id="chart"><span></span></div></div></body></html>
d3n.chartHTML()   // output: <div id="chart"><span></span></div>
