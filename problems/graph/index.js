class Graph {
  constructor() {
    this.adjacency = {};
  }

  addVertex(vertex) {
    if (!this.adjacency[vertex]) this.adjacency[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacency[vertex1]) return "Vertex1 does not exist";
    if (!this.adjacency[vertex2]) return "Vertex2 does not exist";

    if (!this.adjacency[vertex1].includes(vertex2))
      this.adjacency[vertex1].push(vertex2);
    if (!this.adjacency[vertex2].includes(vertex1))
      this.adjacency[vertex2].push(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacency[vertex]) return;

    while (this.adjacency[vertex].length)
      this.removeEdge(vertex, this.adjacency[vertex][0]);

    delete this.adjacency[vertex];
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacency[vertex1]) return "Vertex1 does not exist";
    if (!this.adjacency[vertex2]) return "Vertex2 does not exist";

    this.adjacency[vertex1] = this.adjacency[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    this.adjacency[vertex2] = this.adjacency[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  dfRecursive(vertex) {
    const results = [];
    const visited = {};

    const _dfRecursive = (vertex) => {
      if (!this.adjacency[vertex]) return;

      results.push(vertex);
      visited[vertex] = true;

      for (let adjacent of this.adjacency[vertex]) {
        if (!visited[adjacent]) _dfRecursive(adjacent);
      }
    };

    _dfRecursive(vertex);
    return results;
  }

  dfIterative(vertex) {
    if (!this.adjacency[vertex]) return [];

    const results = [];
    const visited = {};
    const stack = [vertex];

    while (stack.length) {
      const vertex = stack.pop();

      if (visited[vertex]) continue;

      results.push(vertex);
      visited[vertex] = true;
      stack.push(...this.adjacency[vertex]);
    }

    return results;
  }

  bfIterative(vertex) {
    if (!this.adjacency[vertex]) return [];

    const results = [];
    const visited = {};
    const queue = [vertex];

    while (queue.length) {
      const vertex = queue.pop();

      if (visited[vertex]) continue;

      results.push(vertex);
      visited[vertex] = true;
      queue.unshift(...this.adjacency[vertex]);
    }

    return results;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

//console.log(graph.dfRecursive("A"));
//console.log(graph.dfIterative("A"));
//console.log(graph.bfIterative("A"));

console.log(graph.adjacency);
console.log(graph.removeVertex("B"));
console.log(graph.adjacency);