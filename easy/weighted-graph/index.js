const PriorityQueue = require("../priority-queue/index");

class Graph {
  constructor() {
    this.adjacency = {};
  }

  addVertex(vertex) {
    if (!this.adjacency[vertex]) this.adjacency[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacency[vertex1] || !this.adjacency[vertex2])
      return "Vertex does not exists!!";

    this.adjacency[vertex1].push({ vertex: vertex2, weight });
    this.adjacency[vertex2].push({ vertex: vertex1, weight });
  }

  /* Dijkstra's Algorithm */
  shortestPath(startVertex, endVertex) {
    if (!this.adjacency[startVertex] || !this.adjacency[endVertex])
      return "Vertex does not exists!!";

    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    const visited = {};

    // Initial Setup - Start
    for (let key in this.adjacency) {
      previous[key] = null;

      if (key === startVertex) {
        distances[key] = 0;
        queue.enqueue(key, 0);
        continue;
      }

      distances[key] = Infinity;
      queue.enqueue(key, Infinity);
    }
    // Initial Setup - End

    // Main Logic - Start
    while (queue.values.length) {
      const minVertex = queue.dequeue().val;
      visited[minVertex] = true;

      if (minVertex === endVertex) {
        const path = [];
        let vertex = minVertex;

        while (vertex) {
          path.unshift(vertex);
          vertex = previous[vertex];
        }

        return path;
      }

      if(distances[minVertex] === Infinity) continue;

      for (let adjacent of this.adjacency[minVertex]) {
        if (visited[adjacent]) continue;

        const { vertex, weight } = adjacent;
        const distance = distances[minVertex] + weight;

        if (distance < distances[vertex]) {
          distances[vertex] = distance;
          previous[vertex] = minVertex;
          queue.enqueue(vertex, distance);
        }
      }
    }
    // Main Logic - End
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.shortestPath("A", "E"));
//console.log(graph.adjacency);
