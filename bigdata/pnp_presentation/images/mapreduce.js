// Create the input graph
var g = new dagreD3.graphlib.Graph()
  .setGraph({
    rankdir: "LR",
  })
.setDefaultEdgeLabel(function() { return {}; });

// Here we"re setting nodeclass, which is used by our custom drawNodes function
// below.
g.setNode(00,  { label: "Apache Spark is\n" +
                        "Spark is fun\n" +
                        "Apache",      class: "type-TOP" });

g.setNode(10,  { label: "Apache Spark is",      class: "type-S" });
g.setNode(11,  { label: "Spark is fun",      class: "type-S" });
g.setNode(12,  { label: "Apache",      class: "type-S" });

g.setNode(20,  { label: "Apache, 1\nSpark, 1\nis, 1",      	 class: "type-S" });
g.setNode(21,  { label: "Spark, 1\nis, 1\nfun, 1",      	 class: "type-S" });
g.setNode(22,  { label: "Apache, 1",      	 class: "type-S" });

g.setNode(30,  { label: "Apache, 1\nApache, 1",    class: "type-S" });
g.setNode(31,  { label: "fun, 1",    class: "type-S" });
g.setNode(32,  { label: "is, 1\nis, 1",    class: "type-S" });
g.setNode(33,  { label: "Spark, 1\nSpark, 1",    class: "type-S" });

g.setNode(40,  { label: "Apache, 2",    class: "type-S" });
g.setNode(41,  { label: "fun, 1",    class: "type-S" });
g.setNode(42,  { label: "is, 2",    class: "type-S" });
g.setNode(43,  { label: "Spark, 2",    class: "type-S" });

g.setNode(50,  { label: "Apache, 2\n" +
                        "Spark, 2\n" + 
                        "is, 2\n" +     
                        "fun, 1\n",   
                        class:	"type-TK" });

g.nodes().forEach(function(v) {
  var node = g.node(v);
  // Round the corners of the nodes
  node.rx = node.ry = 5;
});

// Set up edges, no special attributes.

// Split
g.setEdge(0, 10, { label: "`textFile`" });
g.setEdge(0, 11);
g.setEdge(0, 12);

// Map
g.setEdge(10, 20, { label: "`flatMap`" });
g.setEdge(11, 21);
g.setEdge(12, 22);

// Shuffle
g.setEdge(20, 30);
g.setEdge(20, 33);
g.setEdge(20, 32, { label: "shuffle"});

g.setEdge(21, 33);
g.setEdge(21, 32);
g.setEdge(21, 31);

g.setEdge(22, 30);

// Reduce
g.setEdge(30, 40);
g.setEdge(31, 41);
g.setEdge(32, 42, { label: "`reduceByKey`"});
g.setEdge(33, 43);


// Final 
g.setEdge(40, 50);
g.setEdge(41, 50);
g.setEdge(42, 50, { label: "`collect`"});
g.setEdge(43, 50);


// Create the renderer
var render = new dagreD3.render();

// Set up an SVG group so that we can translate the final graph.
var svg = d3.select("svg"),
    svgGroup = svg.append("g");

// Run the renderer. This is what draws the final graph.
render(d3.select("svg g"), g);

// Center the graph
var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
svg.attr("height", g.graph().height + 40);
