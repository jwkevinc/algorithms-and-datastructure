function vertex(name, index){
	this.name = name;
  	this.index = index;
  	this.edges = [];
  	this.addEdge = function(edges){
  		this.edges = edges;
 	 }
}

function edge(u, v, distance){
	this.u = u;
	this.v = v;
  	this.distance = distance;
}

function findMin(dist, unvisited){
	var min = Infinity;
  	var index = 0;
	for (var i = 0; i < unvisited.length; i++){
 		if (dist[unvisited[i].index] < min){
    			min = dist[unvisited[i].index];
      			index = i;
    		}
  	}
  	return index;
}

function dijkstra(vertices, edges, source){
	var dist = [];
  	var unvisited = [];
  	var prev = [];
	// initialize
	for (var i = 0; i < vertices.length; i++){
		dist[i] = Infinity;
    		unvisited[i] = vertices[i];
    		prev[i] = null;
	}
	dist[source.index] = 0;

 	while(unvisited.length != 0){
    		var min_idx = findMin(dist, unvisited);
  		var current = unvisited.splice(min_idx, 1)[0];

   		for (var i = 0; i < current.edges.length; i++){
			var distance = dist[current.edges[i].u.index] + current.edges[i].distance
      			if (distance < dist[current.edges[i].v.index]){
        			dist[current.edges[i].v.index] = distance;
        			prev[current.edges[i].v.index] = current.edges[i].u.index
      			}
    		}
	}
	return [dist, prev]
}

var a = new vertex('a', 0);
var b = new vertex('b', 1);
var c = new vertex('c', 2);
var d = new vertex('d', 3);
var e = new vertex('e', 4);
var f = new vertex('f', 5);

var ab = new edge(a, b, 7);
var af = new edge(a, f, 14);
var ac = new edge(a, c, 9);
var bc = new edge(b, c, 3);
var bd = new edge(b, d, 15);
var cd = new edge(c, d, 11);
var cf = new edge(c, f, 2);
var de = new edge(d, e, 6);
var ef = new edge(e, f, 6);
var fe = new edge(f, e, 9);
var fc = new edge(f, c, 3);

a.addEdge([ab, af, ac]);
b.addEdge([bc, bd]);
c.addEdge([cd, cf]);
d.addEdge([de]);
e.addEdge([ef]);
f.addEdge([fe, fc]);

var vertices = [a,b,c,d,e,f];
var edges = [ab, af, ac, bc, bd, cd, cf, de, ef, fe, fc];
var source = a;

dijkstra(vertices, edges, source);

