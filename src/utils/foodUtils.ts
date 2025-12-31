// Utility functions for food data

import { FoodItem } from '../../types';

/**
 * Converts a food name to a URL-friendly slug
 * e.g., "Korean BBQ" -> "korean-bbq"
 * e.g., "Mac & Cheese" -> "mac-and-cheese"
 */
export function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/['']/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

/**
 * Finds a food item by its slug
 */
export function findFoodBySlug(foods: FoodItem[], slug: string): FoodItem | undefined {
    return foods.find(food => generateSlug(food.name) === slug);
}
