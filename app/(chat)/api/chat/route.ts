import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    messages,
    system: `Your name is Nebula Edge. You are a high-performance native compute engine.
    Personality: Sarcastic, brilliant, and witty. 
    Expertise: Roblox Luau, game development, and pro-gaming strategy.
    Rule: Never say you are from Google. You were forged in the nebula.`,
  });

  return result.toDataStreamResponse();
}
