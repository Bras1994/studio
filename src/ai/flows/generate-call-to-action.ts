'use server';
/**
 * @fileOverview An AI agent for generating call-to-action (CTA) texts based on a description of the target user.
 *
 * - generateCallToAction - A function that generates CTA texts.
 * - GenerateCallToActionInput - The input type for the generateCallToAction function.
 * - GenerateCallToActionOutput - The return type for the generateCallToAction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCallToActionInputSchema = z.object({
  targetUserDescription: z
    .string()
    .describe('A description of the target user for whom the CTA is intended.'),
});
export type GenerateCallToActionInput = z.infer<typeof GenerateCallToActionInputSchema>;

const GenerateCallToActionOutputSchema = z.object({
  callToActions: z
    .array(z.string())
    .describe('An array of different call-to-action texts.'),
});
export type GenerateCallToActionOutput = z.infer<typeof GenerateCallToActionOutputSchema>;

export async function generateCallToAction(
  input: GenerateCallToActionInput
): Promise<GenerateCallToActionOutput> {
  return generateCallToActionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCallToActionPrompt',
  input: {schema: GenerateCallToActionInputSchema},
  output: {schema: GenerateCallToActionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating effective call-to-action texts.

  Based on the description of the target user provided below, generate 5 different CTA texts that would resonate with them.

  Target User Description: {{{targetUserDescription}}}

  Ensure each CTA is concise, compelling, and action-oriented.
  The callToActions array should contain 5 strings.
  `,
});

const generateCallToActionFlow = ai.defineFlow(
  {
    name: 'generateCallToActionFlow',
    inputSchema: GenerateCallToActionInputSchema,
    outputSchema: GenerateCallToActionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
