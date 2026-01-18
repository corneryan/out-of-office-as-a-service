export const oooMessages: {
  corporate: Array<{ value: string; weight: number }>;
  human: Array<{ value: string; weight: number }>;
  boundary: Array<{ value: string; weight: number }>;
  feral: Array<{ value: string; weight: number }>;
};

export type Reason = "rest" | "focus" | "travel" | "unspecified";

export declare const honestyWeights: {
  low: { corporate: number; human: number; boundary: number; feral: number };
  medium: { corporate: number; human: number; boundary: number; feral: number };
  high: { corporate: number; human: number; boundary: number; feral: number };
  feral: { corporate: number; human: number; boundary: number; feral: number };
};
export declare const reasonBias: {
  rest: { human: number; boundary: number; corporate: number };
  focus: { boundary: number; human: number; corporate: number };
  travel: { corporate: number; human: number; boundary: number };
  unspecified: { corporate: number; human: number; boundary: number };
};
