import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_API_GEMINI_KEY;
console.log(apiKey, 'apyKey');

async function chat(prompt) {
  const ai = new GoogleGenAI({ apiKey });

  const config = {
    thinkingConfig: { thinkingBudget: -1 },
    tools: [{ googleSearch: {} }],
    responseMimeType: 'text/plain',
  };

  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  const response = await ai.models.generateContentStream({
    model: 'gemini-2.5-pro',
    config,
    contents,
  });

  let finalText = '';
  for await (const chunk of response) {
    finalText += chunk.text;
  }

  return finalText;
}

export default chat;
