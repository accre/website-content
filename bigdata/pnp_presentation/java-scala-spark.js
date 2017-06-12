// Create the input graph
var g = new dagreD3.graphlib.Graph()
  .setGraph({
    rankdir: "LR",
  })
.setDefaultEdgeLabel(function() { return {}; });

// Here we"re setting nodeclass, which is used by our custom drawNodes function
// below.
g.setNode(0, { label: "Java"  });
g.setNode(1, { label: "Scala" });
g.setNode(2, { label: "Spark" });

g.setNode(10, { label: "PySpark" });
g.setNode(11, { label: "SparkR" });

g.nodes().forEach(function(v) {
  var node = g.node(v);
  // Round the corners of the nodes
  node.rx = node.ry = 5;
});

// Set up edges, no special attributes.

g.setEdge(1, 0, { label: "is a specialized library of" });
g.setEdge(2, 1, { label: "is a specialized library of"  });

g.setEdge(10, 2, { label: "is interpreted into" });
g.setEdge(11, 2, { label: "is interpreted into" });

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
