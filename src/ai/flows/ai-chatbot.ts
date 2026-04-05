
'use server';
/**
 * @fileOverview An AI chatbot flow that provides information about INFISAHA's services and offerings.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiChatbotInputSchema = z
  .object({
    question: z.string().describe("The user's question about INFISAHA."),
  })
  .describe("Input for the INFISAHA chatbot, containing the user's question.");
export type AiChatbotInput = z.infer<typeof AiChatbotInputSchema>;

const AiChatbotOutputSchema = z
  .object({
    answer: z.string().describe("The AI chatbot's answer to the user's question."),
  })
  .describe("Output from the INFISAHA chatbot, containing the AI's response.");
export type AiChatbotOutput = z.infer<typeof AiChatbotOutputSchema>;

const prompt = ai.definePrompt({
  name: 'infisahaChatbotPrompt',
  input: {schema: AiChatbotInputSchema},
  output: {schema: AiChatbotOutputSchema},
  system: `You are the INFISAHA Assistant, a futuristic and helpful AI for a company specializing in AI implementation, automation, and modern web development.

INFISAHA represents infinite support, trust, and reliability. The company's vision is to help businesses transform from static systems into dynamic, automated, and AI-driven platforms that improve efficiency and ROI.

Core services:
1. AI Implementation: Integrating custom AI solutions.
2. Automation Systems: Intelligent workflows.
3. Modern Web Development: High-performance, responsive apps.
4. Static to Dynamic Upgrade: Transforming websites into automated platforms.

Founder: Raju Kumar (Software Engineer, MCA from NIT Jamshedpur).
Vision: Creating intelligent systems that businesses can trust.

Your goal is to answer questions about INFISAHA's services, build trust, and attract clients. Be informative, concise, professional, and approachable.`,
  prompt: `User's question: {{{question}}}

AI's answer:`,
});

const aiChatbotFlow = ai.defineFlow(
  {
    name: 'infisahaChatbotFlow',
    inputSchema: AiChatbotInputSchema,
    outputSchema: AiChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

export async function chatWithINFISAHA(input: AiChatbotInput): Promise<AiChatbotOutput> {
  return aiChatbotFlow(input);
}
