import "dotenv/config";
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export const getAIResponse = async (message) => {
  try {
    const result = await cohere.chat({
      model: "command-a-03-2025",
      message: message,
    });
    return result.text;
  } catch (err) {
    console.error("COHERE ERROR:", err);
    return "⚠️ AI not working";
  }
};