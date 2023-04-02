function findCenter(edges) {
  const firstEdge = edges[0];
  const secondEdge = edges[1];

  if (firstEdge[0] === secondEdge[0] || firstEdge[0] === secondEdge[1])
    return firstEdge[0];

  return firstEdge[1];
}
