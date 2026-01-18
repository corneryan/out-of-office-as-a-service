export function weightedPick(items) {
  const total = items.reduce((sum, i) => sum + i.weight, 0);
  let rand = Math.random() * total;

  for (const item of items) {
    if (rand < item.weight) return item.value;
    rand -= item.weight;
  }

  return items[items.length - 1].value;
}

export function pickCategory(weights) {
  const entries = Object.entries(weights).filter(([, weight]) => weight > 0);

  const total = entries.reduce((sum, [, w]) => sum + w, 0);
  let rand = Math.random() * total;

  for (const [key, weight] of entries) {
    if (rand < weight) return key;
    rand -= weight;
  }

  return entries[entries.length - 1][0];
}
