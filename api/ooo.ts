import type { VercelRequest, VercelResponse } from "@vercel/node";
import { weightedPick, pickCategory } from "../src/weightedPick.js";
import { oooMessages, honestyWeights, reasonBias } from "../src/ooo.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const honesty =
      typeof req.query.honesty === "string" &&
      ["low", "medium", "high", "feral"].includes(req.query.honesty)
        ? (req.query.honesty as keyof typeof honestyWeights)
        : "medium";
    const reason =
      typeof req.query.reason === "string" &&
      ["rest", "focus", "travel", "unspecified"].includes(req.query.reason)
        ? (req.query.reason as keyof typeof reasonBias)
        : "unspecified";
    const plain =
      typeof req.query.plain === "string" && req.query.plain === "true";

    if (Math.random() < 0.01) {
      const text = "You already know the answer.";
      return plain ? res.send(text) : res.json({ ooo: text });
    }

    if (!oooMessages) {
      throw new Error("oooMessages not loaded");
    }

    const category = pickCategory({
      corporate:
        honestyWeights[honesty].corporate + reasonBias[reason].corporate,
      human: honestyWeights[honesty].human + reasonBias[reason].human,
      boundary: honestyWeights[honesty].boundary + reasonBias[reason].boundary,
      feral: honestyWeights[honesty].feral,
    });

    const message = weightedPick(oooMessages[category]);

    if (plain) {
      return res.send(`${message}\n`);
    }

    res.json({ message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal error" });
  }
}
