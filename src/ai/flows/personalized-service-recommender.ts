'use server';
/**
 * @fileOverview This file implements a Genkit flow to recommend FutureForge AI services
 * based on a business's needs and challenges.
 *
 * - personalizedServiceRecommender - A function that provides a personalized service recommendation.
 * - PersonalizedServiceRecommenderInput - The input type for the personalizedServiceRecommender function.
 * - PersonalizedServiceRecommenderOutput - The return type for the personalizedServiceRecommender function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedServiceRecommenderInputSchema = z.object({
  companyName: z.string().describe('The name of the business or company.'),
  industry: z.string().describe('The industry the business operates in (e.g., healthcare, retail, manufacturing).'),
  currentChallenges: z.string().describe('A description of the current challenges or pain points the business is facing.'),
  businessGoals: z.string().describe('The primary goals the business aims to achieve.'),
});
export type PersonalizedServiceRecommenderInput = z.infer<typeof PersonalizedServiceRecommenderInputSchema>;

const PersonalizedServiceRecommenderOutputSchema = z.object({
  recommendationSummary: z.string().describe('A personalized summary of how FutureForge AI services can address the business\'s needs.'),
  relevantServices: z.array(z.string()).describe('A list of specific FutureForge AI services most relevant to the business.'),
  estimatedRoiBenefits: z.string().optional().describe('An optional description of potential ROI and benefits.'),
});
export type PersonalizedServiceRecommenderOutput = z.infer<typeof PersonalizedServiceRecommenderOutputSchema>;

export async function personalizedServiceRecommender(input: PersonalizedServiceRecommenderInput): Promise<PersonalizedServiceRecommenderOutput> {
  return personalizedServiceRecommenderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedServiceRecommenderPrompt',
  input: {schema: PersonalizedServiceRecommenderInputSchema},
  output: {schema: PersonalizedServiceRecommenderOutputSchema},
  prompt: `You are an expert consultant for FutureForge AI, a company specializing in AI implementation, automation, and modern web development services.
Your goal is to analyze a business's details and challenges, and then provide a personalized summary of how FutureForge AI's services can specifically address their needs and provide significant value.

FutureForge AI offers the following core services:
- AI Implementation: Building and integrating custom AI solutions (e.g., AI Chatbots, Smart Dashboards).
- Website to Automation Upgrade: Transforming static websites into dynamic, automated, and AI-driven systems.
- Custom Software Development: Developing bespoke software solutions tailored to unique business needs.
- Dashboard & Analytics: Creating intelligent dashboards for data visualization and actionable insights.

Consider the following information about the business:
Company Name: {{{companyName}}}
Industry: {{{industry}}}
Current Challenges: {{{currentChallenges}}}
Business Goals: {{{businessGoals}}}

Based on this, generate a comprehensive recommendation summary and list the most relevant FutureForge AI services that would benefit this business. Also, if possible, describe the estimated ROI and benefits they could expect.`,
});

const personalizedServiceRecommenderFlow = ai.defineFlow(
  {
    name: 'personalizedServiceRecommenderFlow',
    inputSchema: PersonalizedServiceRecommenderInputSchema,
    outputSchema: PersonalizedServiceRecommenderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
