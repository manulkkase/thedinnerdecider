import { ResultContent } from '../types/tarotTypes';
import { tarotReadings, CardReading } from '../data/tarotReadings';

// This function now generates results locally, removing the need for an API key.
export const generateResult = async (c1: string, c2: string, c3: string): Promise<ResultContent> => {
    
    // Simulate a network delay for a better user experience
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
        const energyReading: CardReading = tarotReadings.energy[c1];
        const methodReading: CardReading = tarotReadings.method[c2];
        const flavorReading: CardReading = tarotReadings.flavor[c3];

        if (!energyReading || !methodReading || !flavorReading) {
            throw new Error("Invalid card selection.");
        }

        // Combine fragments to create a unique reading
        const headline = `${energyReading.headline} ${methodReading.headline}`;
        const body = `${energyReading.body} ${methodReading.body} ${flavorReading.body}`;
        const menu = `${flavorReading.menuAdjective} ${energyReading.menuNoun} with ${methodReading.menuMethod}`;

        // Combine and deduplicate tags
        const allTags = [...energyReading.tags, ...methodReading.tags, ...flavorReading.tags];
        const uniqueTags = [...new Set(allTags)];

        const result: ResultContent = {
            headline,
            body,
            menu,
            tags: uniqueTags,
        };

        return result;

    } catch (error) {
        console.error("Error generating local result:", error);
        throw new Error("The celestial channels are cloudy. Please try again.");
    }
};
