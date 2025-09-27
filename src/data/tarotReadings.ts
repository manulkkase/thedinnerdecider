export interface CardReading {
    headline: string;
    body: string;
    menuNoun: string;
    menuMethod: string;
    menuAdjective: string;
    tags: string[];
}

interface TarotReadings {
    energy: Record<string, CardReading>;
    method: Record<string, CardReading>;
    flavor: Record<string, CardReading>;
}

export const tarotReadings: TarotReadings = {
    energy: {
        sun: {
            headline: "Bright & Bold Energy",
            body: "You're filled with a vibrant, powerful energy, calling for a meal that's bold, bright, and celebratory. Your spirit seeks exciting flavors that shine with confidence and make you feel alive. It's time to feast!",
            menuNoun: "Feast",
            menuMethod: "",
            menuAdjective: "",
            tags: ['spicy', 'bbq', 'mexican', 'grilled', 'citrus', 'american']
        },
        moon: {
            headline: "The Moon's Cozy Comfort",
            body: "The Moon's gentle glow suggests you're craving comfort and a touch of nostalgia. It's time for a meal that feels like a warm hug—something nourishing, soothing, and deeply satisfying. Let your food be your comfort tonight.",
            menuNoun: "Comfort",
            menuMethod: "",
            menuAdjective: "",
            tags: ['comfort-food', 'soup', 'italian', 'pasta', 'creamy', 'slow-cooked']
        },
        star: {
            headline: "A Dash of Cosmic Magic",
            body: "The Star inspires a sense of wonder and possibility! You're ready for a culinary adventure. The cards point to something new and exciting—a creative, surprising, and delightfully unique meal. Let your taste buds explore the unknown!",
            menuNoun: "Wonder",
            menuMethod: "",
            menuAdjective: "",
            tags: ['fusion', 'exotic', 'vietnamese', 'thai', 'dessert', 'unique', 'japanese']
        },
    },
    method: {
        wok: {
            headline: "A Whirlwind of Flavor",
            body: "Get ready for quick, high-energy action! The Wok is all about a fast and fiery cooking process. Imagine a sizzling dance of ingredients tossed in intense heat, their flavors coming together in a flash. It's dynamic, exciting, and delicious.",
            menuNoun: "",
            menuMethod: "a Fiery Stir",
            menuAdjective: "",
            tags: ['stir-fry', 'chinese', 'thai', 'quick', 'asian', 'noodles']
        },
        pot: {
            headline: "The Magic of a Slow Simmer",
            body: "Good things come to those who wait. The Pot represents the magic of slow, patient cooking. Flavors will gently simmer, deepening and blending into a rich, soulful meal that warms you from the inside out. It's all about deep, developed taste.",
            menuNoun: "",
            menuMethod: "a Hearty Simmer",
            menuAdjective: "",
            tags: ['stew', 'soup', 'curry', 'indian', 'slow-cooked', 'hearty']
        },
        knife: {
            headline: "Fresh, Crisp & Clear",
            body: "This reading is all about freshness and precision. The Knife points to a meal made with crisp, clean ingredients, carefully assembled to highlight their natural tastes. Expect pure flavors and satisfying textures, simple yet elegant.",
            menuNoun: "",
            menuMethod: "a Crisp Assembly",
            menuAdjective: "",
            tags: ['fresh', 'salad', 'sushi', 'japanese', 'sandwich', 'raw', 'tacos']
        },
    },
    flavor: {
        spice: {
            headline: "A Spark of Fiery Spice",
            body: "Your meal is destined for a kick of spice! It's time to awaken your senses with some heat and complexity. This flavor will add a spark of excitement to your dish, leaving a memorable warmth that lingers. Get ready for a little fire.",
            menuNoun: "",
            menuMethod: "",
            menuAdjective: "Spiced",
            tags: ['spicy', 'hot', 'indian', 'mexican', 'thai', 'korean']
        },
        herb: {
            headline: "A Touch of Fresh Herbs",
            body: "Your culinary path is blessed with the fresh aroma of herbs. This calls for a touch of green, earthy flavor to brighten your dish. It's a subtle yet beautiful addition that cleanses the palate and adds a natural, fragrant touch.",
            menuNoun: "",
            menuMethod: "",
            menuAdjective: "Herbed",
            tags: ['fresh', 'herbal', 'mediterranean', 'italian', 'vietnamese', 'light', 'salad']
        },
        sugar: {
            headline: "A Hint of Sweet Indulgence",
            body: "To complete your reading, a touch of sweetness is in your future. Your destiny calls for a hint of sugar to provide a delightful, satisfying endnote. Whether it's a sweet glaze or a full dessert, it's time to treat yourself.",
            menuNoun: "",
            menuMethod: "",
            menuAdjective: "Sweet",
            tags: ['sweet', 'dessert', 'baking', 'thai', 'sweet-and-sour']
        },
    }
};