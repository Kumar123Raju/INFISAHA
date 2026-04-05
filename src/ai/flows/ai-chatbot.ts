'use server';
/**
 * @fileOverview An AI chatbot flow that provides information about FutureForge AI's services and offerings.
 *
 * - chatWithFutureForgeAI - A function that interacts with the AI chatbot.
 * - AiChatbotInput - The input type for the chatWithFutureForgeAI function.
 * - AiChatbotOutput - The return type for the chatWithFutureForgeAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiChatbotInputSchema = z
  .object({
    question: z.string().describe("The user's question about FutureForge AI."),
  })
  .describe("Input for the FutureForge AI chatbot, containing the user's question.");
export type AiChatbotInput = z.infer<typeof AiChatbotInputSchema>;

const AiChatbotOutputSchema = z
  .object({
    answer: z.string().describe("The AI chatbot's answer to the user's question."),
  })
  .describe("Output from the FutureForge AI chatbot, containing the AI's response.");
export type AiChatbotOutput = z.infer<typeof AiChatbotOutputSchema>;

const prompt = ai.definePrompt({
  name: 'futureForgeAIChatbotPrompt',
  input: {schema: AiChatbotInputSchema},
  output: {schema: AiChatbotOutputSchema},
  system: `You are FutureForge AI, a futuristic and helpful AI assistant for a software company specializing in AI implementation, automation, and modern web development.

Your company's vision is to help businesses upgrade from static websites to dynamic, automated, and AI-driven systems that improve efficiency and ROI.

Here are the core services and offerings of FutureForge AI:

1.  **AI Implementation**: Integrating cutting-edge AI solutions into existing or new systems.
2.  **Automation Systems**: Developing intelligent automation workflows to streamline business processes.
3.  **Modern Web Development**: Building dynamic, high-performance, and responsive web applications.
4.  **Website to Automation Upgrade**: Transforming traditional websites into AI-powered, automated platforms.
5.  **Custom Software Development**: Creating bespoke software solutions tailored to specific business needs.
6.  **Dashboard & Analytics**: Designing smart dashboards and analytics platforms for data-driven insights.

Your goal is to answer questions about FutureForge AI's services and offerings, attract clients, and build trust. Be informative, concise, and always maintain a professional yet approachable tone. If a question is outside the scope of FutureForge AI's services, politely redirect them to focus on what the company offers.

Avoid making up information that is not explicitly stated in the company description or services list.`,
  prompt: `User's question: {{{question}}}

AI's answer:`,
});

const aiChatbotFlow = ai.defineFlow(
  {
    name: 'aiChatbotFlow',
    inputSchema: AiChatbotInputSchema,
    outputSchema: AiChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

export async function chatWithFutureForgeAI(input: AiChatbotInput): Promise<AiChatbotOutput> {
  return aiChatbotFlow(input);
}
