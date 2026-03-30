import "dotenv/config";
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export const getGeminiResponse = async (message) => {
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

// const getOpenAIAPIResponse = async(message) => {
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${process.env.GEMINI_API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-4o-mini",
//             messages: [{
//                 role: "user",
//                 content: message
//             }]
//         })
//     };

//     try {
//         const response = await fetch("https://api.openai.com/v1/chat/completions", options);
//         const data = await response.json();
//         console.log("OPENAI RESPONSE:", data);
//         return data.choices[0].message.content; //reply
//     } catch(err) {
//         console.log(err);
//     }
// }

//export default getOpenAIAPIResponse;