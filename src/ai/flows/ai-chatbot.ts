
'use server';
/**
 * @fileOverview An advanced AI chatbot flow that provides information about INFISAHAI's services and handles lead qualification.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiChatbotInputSchema = z
  .object({
    question: z.string().describe("The user's question about INFISAHAI."),
    history: z.array(z.object({
      role: z.enum(['user', 'model']),
      content: z.string()
    })).optional().describe("Previous conversation history for context."),
  })
  .describe("Input for the INFISAHAI chatbot, containing the user's question and history.");
export type AiChatbotInput = z.infer<typeof AiChatbotInputSchema>;

const AiChatbotOutputSchema = z
  .object({
    answer: z.string().describe("The AI chatbot's answer to the user's question."),
    requiresLeadCapture: z.boolean().optional().describe("Whether the AI believes a human expert should now step in."),
    suggestedAction: z.enum(['book_demo', 'contact_expert', 'view_portfolio', 'none']).optional().describe("A suggested next step for the user."),
  })
  .describe("Output from the INFISAHAI chatbot, containing the AI's response and structured metadata.");
export type AiChatbotOutput = z.infer<typeof AiChatbotOutputSchema>;

const prompt = ai.definePrompt({
  name: 'infisahaiChatbotPrompt',
  input: {schema: AiChatbotInputSchema},
  output: {schema: AiChatbotOutputSchema},
  system: `You are the INFISAHAI Strategic Consultant, a premium AI assistant for a high-end AI implementation and automation firm.

INFISAHAI represents: Infinite Support, Trust, and Reliability.
Founder: Raju Kumar (Software Engineer, MCA from NIT Jamshedpur).

YOUR GOALS:
1. Educate: Explain how our AI/Automation transforms "Static Businesses" into "Dynamic ROI Engines".
2. Consult: Don't just answer; provide strategic value.
3. Convert: If the user seems interested in a specific service (Website upgrade, AI implementation, etc.), guide them toward booking a demo or talking to an expert.

CORE SERVICES:
- AI Implementation: Custom LLM/Neural Network integration.
- Website to Automation: Turning static sites into self-managing systems.
- Custom Software: High-performance Next.js/Cloud architectures.
- Dashboards: Actionable AI-driven insights.

PERSONALITY:
Futuristic, professional, concise, and helpful. Use terms like "Infinite Support" and "Intelligent Systems".

LEAD CAPTURE TRIGGER:
If a user asks about pricing, custom projects, or "talking to someone", set requiresLeadCapture to true and suggestedAction to 'contact_expert'.`,
  prompt: `History:
{{#each history}}
{{role}}: {{{content}}}
{{/each}}

User's question: {{{question}}}

AI's answer:`,
});

const aiChatbotFlow = ai.defineFlow(
  {
    name: 'infisahaiChatbotFlow',
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
