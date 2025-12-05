import { GoogleGenAI } from "@google/genai";
import { PROMPT_TEMPLATE, SYSTEM_INSTRUCTION } from "../constants";
import { InteractionResult } from "../types";

export const analyzeAbstract = async (abstract: string): Promise<InteractionResult> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing. Please set the API_KEY environment variable.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Format the prompt by injecting the abstract
  const fullPrompt = PROMPT_TEMPLATE.replace('{paper_abstract}', abstract);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2, // Low temperature for stability as recommended in PDF
        responseMimeType: "application/json",
      },
    });

    const text = response.text;
    
    if (!text) {
      throw new Error("No response generated from the model.");
    }

    // Parse the JSON response
    // The model is instructed to return JSON, but we add safety parsing just in case
    let parsedResult: InteractionResult;
    try {
      parsedResult = JSON.parse(text);
    } catch (e) {
      // Fallback: try to find JSON block if the model added extra text
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResult = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Failed to parse JSON response.");
      }
    }

    return parsedResult;

  } catch (error) {
    console.error("Analysis failed:", error);
    throw error;
  }
};