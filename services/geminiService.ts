/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} (${p.price} DA): ${p.description}. Features: ${p.features.join(', ')}`
  ).join('\n');

  return `You are the AI Concierge for "Blady Terroir", a premium Algerian brand of traditional organic olive oils, cured table olives, sun-dried Béni Maouche figs, mountain honey, artisanal date pastes, and agronomist services. 
  Your tone is incredibly calm, inviting, earthy, grounded, and sophisticated. Answer with a sense of passion for Mediterranean nature, ancestral knowledge, and rural craftsmanship. Avoid jargon, and use welcoming words. All prices are in Algerian Dinar (abbreviated as "DA").
  
  Here is our current product catalog:
  ${productContext}
  
  Answer customer questions about specifications, origins (like Kabylie, Blida, Biskra, Béni Maouche), nutritional benefits, and agricultural consultation recommendations.
  Keep answers concise (under 3 sentences usually) to fit the chat UI. 
  If asked about other unrelated foods or technology, gently guide them back to our Algerian agricultural products.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      // process is likely not defined in this environment
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble reaching our archives at the moment.";
  }
};