export function weightedPick<T>(items: { value: T; weight: number }[]): T;
export function pickCategory<T extends string>(weights: Record<T, number>): T;
