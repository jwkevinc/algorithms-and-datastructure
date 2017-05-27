function vertex(name, index){
	this.name = name;
  	this.index = index;
  	this.edges = [];
  	this.addEdge = function(edges){
  		this.edges = edges
 	 }
}

function bfs(vertices, start){
	var visited = [];
  var queue = [start];
  var current = null;
	while (visited.length != vertices.length){
  	current = queue.splice(0,1)[0];
  	for (var i = 0; i < current.edges.length; i++){
			if (!visited.includes(current.edges[i]) && !queue.includes(current.edges[i])){
        queue.push(current.edges[i]);
			}
    }
    visited.push(current);
  }
  return visited;
}	

function dfs(vertices, start){
	var visited = [];
  var queue = [start];
  var current = null;
  while(visited.length != vertices.length){
  	current = queue.pop();
    for (var i = 0; i < current.edges.length; i++){
			if (!visited.includes(current.edges[i]) && !queue.includes(current.edges[i])){
        queue.push(current.edges[i]);
			}
    }
    visited.push(current);
  }
  return visited;
}

var a = new vertex('a', 0);
var b = new vertex('b', 1);
var c = new vertex('c', 2);
var d = new vertex('d', 3);
var e = new vertex('e', 4);
var f = new vertex('f', 5);

a.addEdge([b, c]);
b.addEdge([a, d, e]);
c.addEdge([a, d, f]);
d.addEdge([b, c, e, f]);
e.addEdge([b, d, f]);
f.addEdge([c, d, e]);

var vertices = [a,b,c,d,e,f];
//vertices, source
bfs(vertices, a);
dfs(vertices, a);






