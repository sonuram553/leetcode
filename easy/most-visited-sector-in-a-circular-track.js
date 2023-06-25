export function mostVisited(n, rounds) {
  const tracks = new Array(n).fill(0);
  tracks[rounds[0] - 1] = 1; // First sector in rounds is visited once

  for (let i = 0; i < rounds.length - 1; i++) {
    const firstSector = rounds[i];
    const secSector = rounds[i + 1];

    if (firstSector < secSector) {
      for (let j = firstSector; j < secSector; j++) {
        tracks[j]++;
      }
    } else {
      for (let j = firstSector; j < n; j++) tracks[j]++;
      for (let j = 0; j < secSector; j++) tracks[j]++;
    }
  }

  // Find most visited sector
  const maxVisited = Math.max(...tracks);
  return tracks.reduce((result, value, index) => {
    if (value === maxVisited) result.push(index + 1);
    return result;
  }, []);
}
