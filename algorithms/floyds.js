function vertex(name, index){
  this.name = name;
  this.index = index;
  this.edges = [];
  this.addEdge = function(edge){
    this.edges.push(edge)
  }
  this.checkEdge = function(v){
  	for (var i = 0; i < this.edges.length; i++){
    	if (this.edges[i].v == v)
      	return this.edges[i].distance
      else
      	return Infinity
    }
  }
}

function edge(u, v, distance){
	this.u = u;
	this.v = v;
  this.distance = distance;
}

// create bi-directional graph
function graph(vertices){
	this.vertices = vertices;
  this.edges = [];
  this.dist = new Array(this.vertices.length).fill(Infinity).map(()=>new Array(this.vertices.length).fill(Infinity));
 	this.addEdge = function(u, v, distance){
    this.vertices[this.vertices.indexOf(u)].addEdge(new edge(u, v, distance));
  }
  this.init = function(){
  	var vs = this.vertices;
  	for (var i = 0; i < vs.length; i++){
      this.dist[i][i] = 0;
      for (var j = 0; j < vs[i].edges.length; j++){
      	var e = vs[i].edges[j]
      	this.dist[e.u.index][e.v.index] = e.distance;
      }
		}
  }
  this.floyd = function(){
    for (var k = 0; k < this.vertices.length; k++){
      for (var i = 0; i < this.vertices.length; i++){
        for (var j = 0; j < this.vertices.length; j++){
          if (this.dist[i][j] > this.dist[i][k] + this.dist[k][j])
            this.dist[i][j] = this.dist[i][k] + this.dist[k][j];
        }
      }
    }
  }

  this.toString = function(){
		for (var i = 0; i < this.dist.length; i++){
      var row = ""
    	for (var j = 0; j < this.dist.length; j++){
      	row += this.dist[i][j] + "|"
      }
      console.log(row);
    }
  }
}

var a = new vertex('a', 0);
var b = new vertex('b', 1);
var c = new vertex('c', 2);
var d = new vertex('d', 3);
var vertices = [a,b,c,d];
// initialize graph
var g = new graph(vertices);
// add edges to the graph
g.addEdge(a,c,-2);
g.addEdge(b,a,4);
g.addEdge(b,c,3);
g.addEdge(c,d,2);
g.addEdge(d,b,-1);
// Initialize
g.init();
// Run Floyd's algorithm
g.floyd();
// Final Result
g.toString();