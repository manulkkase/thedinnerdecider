// New foods for Phase 1 expansion (merged with ALL_FOODS)
import { FoodItem } from '../types';

export const NEW_FOODS: FoodItem[] = [
    // === KOREAN (8) ===
    {
        id: 101, name: 'Bulgogi', imageUrl: '/images/Bulgogi.webp', tags: ['korean', 'gluten-free'], mood: ['comfort'],
        funFact: 'Bulgogi means "fire meat" in Korean, referring to the grilling method used to cook this marinated beef.',
        checklist: ['Thinly sliced marinated beef', 'Sweet and savory soy-based marinade', 'Grilled to perfection with slight char'],
        pairings: [{ type: 'Side', suggestion: 'Rice and lettuce wraps for ssam.', icon: '🥬' }]
    },
    {
        id: 102, name: 'Samgyeopsal', imageUrl: '/images/Samgyeopsal.webp', tags: ['korean', 'gluten-free'], mood: ['comfort'],
        funFact: 'Samgyeopsal literally means "three-layered meat," referring to the layers of pork belly.',
        checklist: ['Thick-cut pork belly slices', 'Grilled at the table', 'Wrapped in lettuce with ssamjang'],
        pairings: [{ type: 'Drink', suggestion: 'Soju is the classic pairing.', icon: '🍶' }]
    },
    {
        id: 103, name: 'Sundubu Jjigae', imageUrl: '/images/Sundubu Jjigae.webp', tags: ['korean', 'vegetarian'], mood: ['spicy', 'comfort'],
        funFact: 'This spicy soft tofu stew is often served bubbling hot, still cooking at your table.',
        checklist: ['Silky soft tofu in spicy broth', 'Served bubbling hot', 'Often topped with a raw egg'],
        pairings: [{ type: 'Side', suggestion: 'Steamed rice is essential.', icon: '🍚' }]
    },
    {
        id: 104, name: 'Kimchi Jjigae', imageUrl: '/images/Kimchi Jjigae.webp', tags: ['korean'], mood: ['spicy', 'comfort'],
        funFact: 'This stew is traditionally made with aged kimchi, which gives it a deeper, more complex flavor.',
        checklist: ['Fermented kimchi in spicy pork broth', 'Tender chunks of pork or tofu', 'Rich, tangy, and warming'],
        pairings: [{ type: 'Side', suggestion: 'Best with a bowl of hot rice.', icon: '🍚' }]
    },
    {
        id: 105, name: 'Jajangmyeon', imageUrl: '/images/Jajangmyeon.webp', tags: ['korean'], mood: ['comfort'],
        funFact: 'This Korean-Chinese black bean noodle dish is traditionally eaten on Black Day (April 14th) by singles.',
        checklist: ['Chewy noodles with black bean sauce', 'Diced pork and vegetables', 'Sweet and savory umami flavor'],
        pairings: [{ type: 'Side', suggestion: 'Yellow pickled radish (danmuji).', icon: '💛' }]
    },
    {
        id: 106, name: 'Dakgalbi', imageUrl: '/images/Dakgalbi.webp', tags: ['korean'], mood: ['spicy'],
        funFact: 'Dakgalbi originated in Chuncheon, South Korea, and is often cooked at the table in a large pan.',
        checklist: ['Spicy marinated chicken', 'Stir-fried with vegetables and rice cakes', 'Often topped with cheese'],
        pairings: [{ type: 'Addition', suggestion: 'Add cheese and fried rice at the end.', icon: '🧀' }]
    },
    {
        id: 107, name: 'Galbi', imageUrl: '/images/Galbi.webp', tags: ['korean', 'gluten-free'], mood: ['comfort'],
        funFact: 'Galbi refers to grilled short ribs, a staple of Korean BBQ cuisine.',
        checklist: ['Marinated beef short ribs', 'Sweet soy-sesame glaze', 'Grilled until caramelized'],
        pairings: [{ type: 'Side', suggestion: 'Lettuce, garlic, and ssamjang for wrapping.', icon: '🥬' }]
    },
    {
        id: 108, name: 'Budae Jjigae', imageUrl: '/images/Budae Jjigae.webp', tags: ['korean'], mood: ['comfort', 'late-night'],
        funFact: 'Known as "Army Stew," this dish was created after the Korean War using surplus American ingredients.',
        checklist: ['Spicy broth with spam and hot dogs', 'Instant noodles and cheese', 'A fusion of Korean and American flavors'],
        pairings: [{ type: 'Addition', suggestion: 'Add extra ramen noodles and cheese.', icon: '🍜' }]
    },
    // === SOUTHEAST ASIAN (7) ===
    {
        id: 109, name: 'Laksa', imageUrl: '/images/Laksa.webp', tags: ['malaysian'], mood: ['spicy', 'comfort'],
        funFact: 'There are many types of laksa, but the creamy curry version from Penang and Singapore is most famous.',
        checklist: ['Rich coconut curry broth', 'Rice noodles or vermicelli', 'Prawns, tofu puffs, and bean sprouts'],
        pairings: [{ type: 'Addition', suggestion: 'Add extra chili paste for more heat.', icon: '🌶️' }]
    },
    {
        id: 110, name: 'Nasi Goreng', imageUrl: '/images/Nasi Goreng.webp', tags: ['indonesian'], mood: ['comfort'],
        funFact: 'Nasi Goreng is Indonesia\'s national dish and means "fried rice" in Indonesian.',
        checklist: ['Wok-fried rice with sweet soy sauce', 'Topped with a fried egg', 'Served with prawn crackers'],
        pairings: [{ type: 'Side', suggestion: 'Kerupuk (prawn crackers) are essential.', icon: '🦐' }]
    },
    {
        id: 111, name: 'Char Kway Teow', imageUrl: '/images/Char Kway Teow.webp', tags: ['malaysian'], mood: ['comfort'],
        funFact: 'This smoky stir-fried noodle dish gets its distinctive flavor from cooking over high heat in a seasoned wok.',
        checklist: ['Flat rice noodles with dark soy', 'Prawns, cockles, and Chinese sausage', 'Smoky wok hei flavor'],
        pairings: [{ type: 'Note', suggestion: 'The smoky "wok hei" is the key.', icon: '🔥' }]
    },
    {
        id: 112, name: 'Beef Rendang', imageUrl: '/images/Beef Rendang.webp', tags: ['indonesian', 'gluten-free'], mood: ['spicy', 'comfort'],
        funFact: 'Rendang was voted the world\'s most delicious food in a CNN poll.',
        checklist: ['Slow-cooked beef in coconut and spices', 'Rich, dry curry coating', 'Incredibly tender meat'],
        pairings: [{ type: 'Side', suggestion: 'Steamed jasmine rice.', icon: '🍚' }]
    },
    {
        id: 113, name: 'Hainanese Chicken Rice', imageUrl: '/images/Hainanese Chicken Rice.webp', tags: ['singaporean', 'gluten-free'], mood: ['light', 'comfort'],
        funFact: 'This dish is considered the national dish of Singapore, though it originated from Hainan, China.',
        checklist: ['Silky poached chicken', 'Fragrant rice cooked in chicken fat', 'Served with chili and ginger sauce'],
        pairings: [{ type: 'Sauce', suggestion: 'Don\'t skip the ginger and chili sauces.', icon: '🌶️' }]
    },
    {
        id: 114, name: 'Nasi Lemak', imageUrl: '/images/Nasi Lemak.webp', tags: ['malaysian'], mood: ['comfort'],
        funFact: 'Nasi Lemak is Malaysia\'s national dish, traditionally eaten for breakfast but enjoyed any time.',
        checklist: ['Coconut rice with sambal', 'Fried anchovies and peanuts', 'Cucumber, egg, and often fried chicken'],
        pairings: [{ type: 'Condiment', suggestion: 'The spicy sambal is the star.', icon: '🌶️' }]
    },
    {
        id: 115, name: 'Pad See Ew', imageUrl: '/images/Pad See Ew.webp', tags: ['thai'], mood: ['comfort'],
        funFact: 'Pad See Ew means "stir-fried soy sauce" in Thai, and it\'s a popular street food dish.',
        checklist: ['Wide rice noodles with dark soy', 'Chinese broccoli and egg', 'Slightly sweet and smoky'],
        pairings: [{ type: 'Addition', suggestion: 'Add chili flakes and vinegar.', icon: '🌶️' }]
    },
    // === CHINESE/JAPANESE (5) ===
    {
        id: 116, name: 'Char Siu', imageUrl: '/images/Char Siu.webp', tags: ['chinese'], mood: ['comfort'],
        funFact: 'Char Siu means "fork roasted" in Cantonese, referring to the traditional cooking method.',
        checklist: ['Sweet and sticky glazed pork', 'Caramelized red edges', 'Tender and juicy inside'],
        pairings: [{ type: 'Side', suggestion: 'Over rice or in ramen.', icon: '🍚' }]
    },
    {
        id: 117, name: 'Dan Dan Noodles', imageUrl: '/images/Dan Dan Noodles.webp', tags: ['chinese'], mood: ['spicy'],
        funFact: 'Named after the carrying pole ("dan dan") that street vendors used to sell this Sichuan street food.',
        checklist: ['Spicy Sichuan peppercorn sauce', 'Minced pork with preserved vegetables', 'Numbing and spicy flavor'],
        pairings: [{ type: 'Note', suggestion: 'Expect a tingly, numbing sensation from Sichuan peppercorns.', icon: '🌶️' }]
    },
    {
        id: 118, name: 'Okonomiyaki', imageUrl: '/images/Okonomiyaki.webp', tags: ['japanese'], mood: ['comfort', 'trendy'],
        funFact: 'Okonomiyaki means "grilled as you like it" - you can customize the fillings to your preference.',
        checklist: ['Savory cabbage pancake', 'Topped with mayo and okonomiyaki sauce', 'Often contains pork belly or seafood'],
        pairings: [{ type: 'Topping', suggestion: 'Bonito flakes and seaweed.', icon: '🐟' }]
    },
    {
        id: 119, name: 'Yakitori Platter', imageUrl: '/images/Yakitori Platter.webp', tags: ['japanese', 'gluten-free'], mood: ['light'],
        funFact: 'Yakitori literally means "grilled bird" and originated as a way to use every part of the chicken.',
        checklist: ['Grilled chicken skewers', 'Glazed with tare or salted', 'Various cuts including thigh, skin, and heart'],
        pairings: [{ type: 'Drink', suggestion: 'Ice cold beer or highball.', icon: '🍺' }]
    },
    {
        id: 120, name: 'Udon Noodle Soup', imageUrl: '/images/Udon Noodle Soup.webp', tags: ['japanese'], mood: ['comfort', 'light'],
        funFact: 'Sanuki udon from Kagawa prefecture is considered the finest, with thick, chewy noodles.',
        checklist: ['Thick, chewy wheat noodles', 'Light dashi-based broth', 'Simple toppings like tempura or egg'],
        pairings: [{ type: 'Addition', suggestion: 'Add a crispy tempura for texture.', icon: '🍤' }]
    },
    // === LATE NIGHT (15) ===
    {
        id: 121, name: 'Loaded Cheese Fries', imageUrl: '/images/Loaded Cheese Fries.webp', tags: ['american', 'vegetarian'], mood: ['late-night', 'comfort'],
        funFact: 'Loaded fries became an American diner staple in the 1980s.',
        checklist: ['Crispy fries piled high', 'Melted cheese and toppings', 'Often with bacon and jalapeños'],
        pairings: [{ type: 'Drink', suggestion: 'An ice cold soda or beer.', icon: '🍺' }]
    },
    {
        id: 122, name: 'Döner Kebab Plate', imageUrl: '/images/Döner Kebab Plate.webp', tags: ['mediterranean'], mood: ['late-night'],
        funFact: 'The modern döner kebab was popularized in Berlin by Turkish immigrants in the 1970s.',
        checklist: ['Shaved meat from vertical spit', 'Served with rice and salad', 'Garlic and chili sauces'],
        pairings: [{ type: 'Sauce', suggestion: 'Both garlic and chili sauce are essential.', icon: '🧄' }]
    },
    {
        id: 123, name: 'Cheese Toastie Deluxe', imageUrl: '/images/Cheese Toastie Deluxe.webp', tags: ['australian', 'vegetarian'], mood: ['late-night', 'comfort'],
        funFact: 'The humble cheese toastie has been an Australian comfort food staple for generations.',
        checklist: ['Perfectly golden crispy bread', 'Gooey melted cheese inside', 'Optional add-ins like ham or tomato'],
        pairings: [{ type: 'Side', suggestion: 'Tomato soup for dunking.', icon: '🍅' }]
    },
    {
        id: 124, name: 'Pad Kee Mao', imageUrl: '/images/Pad Kee Mao.webp', tags: ['thai'], mood: ['late-night', 'spicy'],
        funFact: 'Also known as "Drunken Noodles," this dish is said to be a perfect late-night cure.',
        checklist: ['Wide rice noodles with Thai basil', 'Spicy stir-fry with vegetables', 'Smoky and aromatic'],
        pairings: [{ type: 'Note', suggestion: 'The holy basil gives its distinctive aroma.', icon: '🌿' }]
    },
    {
        id: 125, name: 'Garlic Butter Pasta', imageUrl: '/images/Garlic Butter Pasta.webp', tags: ['italian', 'vegetarian'], mood: ['late-night', 'comfort'],
        funFact: 'This simple pasta is a late-night favorite for its quick preparation and satisfying flavor.',
        checklist: ['Al dente pasta', 'Generous garlic butter sauce', 'Finished with parmesan and parsley'],
        pairings: [{ type: 'Addition', suggestion: 'Add chili flakes for heat.', icon: '🌶️' }]
    },
    {
        id: 126, name: 'Poutine', imageUrl: '/images/Poutine.webp', tags: ['american', 'vegetarian'], mood: ['late-night', 'comfort'],
        funFact: 'Poutine originated in Quebec, Canada in the late 1950s.',
        checklist: ['Crispy fries with cheese curds', 'Smothered in hot gravy', 'Curds must be fresh and squeaky'],
        pairings: [{ type: 'Note', suggestion: 'Authentic poutine uses fresh cheese curds that squeak.', icon: '🧀' }]
    },
    {
        id: 127, name: 'Bacon & Egg Roll', imageUrl: '/images/Bacon & Egg Roll.webp', tags: ['australian'], mood: ['late-night', 'comfort'],
        funFact: 'The bacon and egg roll is an Australian breakfast institution, perfect for any time of day.',
        checklist: ['Crispy bacon in a soft roll', 'Fried egg with runny yolk', 'BBQ or tomato sauce'],
        pairings: [{ type: 'Drink', suggestion: 'A flat white coffee.', icon: '☕' }]
    },
    {
        id: 128, name: 'Fried Rice Special', imageUrl: '/images/Fried Rice Special.webp', tags: ['chinese'], mood: ['late-night'],
        funFact: 'Fried rice was created as a way to use leftover rice and vegetables.',
        checklist: ['Day-old rice stir-fried with egg', 'Mixed vegetables and protein', 'Seasoned with soy sauce'],
        pairings: [{ type: 'Side', suggestion: 'Prawn crackers on the side.', icon: '🦐' }]
    },
    {
        id: 129, name: 'Chicken Wrap', imageUrl: '/images/Chicken Wrap.webp', tags: ['american'], mood: ['late-night', 'light'],
        funFact: 'The wrap became popular in the 1990s as a healthier alternative to sandwiches.',
        checklist: ['Grilled chicken in a tortilla', 'Fresh lettuce and sauce', 'Easy to eat on the go'],
        pairings: [{ type: 'Sauce', suggestion: 'Ranch or garlic aioli.', icon: '🥛' }]
    },
    {
        id: 130, name: 'Lamb Souvlaki', imageUrl: '/images/Lamb Souvlaki.webp', tags: ['greek'], mood: ['late-night'],
        funFact: 'Souvlaki shops are the Greek equivalent of late-night kebab shops.',
        checklist: ['Grilled lamb in pita', 'Tzatziki and fresh vegetables', 'Wrapped for easy eating'],
        pairings: [{ type: 'Sauce', suggestion: 'Extra tzatziki.', icon: '🥛' }]
    },
    {
        id: 131, name: 'Beef Burrito', imageUrl: '/images/Beef Burrito.webp', tags: ['mexican'], mood: ['late-night', 'comfort'],
        funFact: 'The burrito as we know it today was popularized in San Francisco in the 1960s.',
        checklist: ['Large flour tortilla with beef', 'Rice, beans, cheese, and salsa', 'Wrapped tight for eating'],
        pairings: [{ type: 'Side', suggestion: 'Chips and guac.', icon: '🥑' }]
    },
    {
        id: 132, name: 'Butter Chicken Wrap', imageUrl: '/images/Butter Chicken Wrap.webp', tags: ['indian'], mood: ['late-night', 'comfort'],
        funFact: 'A fusion creation combining the beloved butter chicken with portable wrap format.',
        checklist: ['Creamy butter chicken filling', 'In a warm naan or tortilla', 'Quick and portable'],
        pairings: [{ type: 'Sauce', suggestion: 'Mint chutney.', icon: '🌿' }]
    },
    {
        id: 133, name: 'Cheesy Garlic Bread', imageUrl: '/images/Cheesy Garlic Bread.webp', tags: ['italian', 'vegetarian'], mood: ['late-night', 'comfort'],
        funFact: 'Garlic bread as a side dish is largely an American-Italian invention.',
        checklist: ['Crispy baguette with garlic butter', 'Topped with melted mozzarella', 'Golden and bubbling'],
        pairings: [{ type: 'Note', suggestion: 'Great as a side or snack.', icon: '🍕' }]
    },
    {
        id: 134, name: 'Chicken Nuggets', imageUrl: '/images/Chicken Nuggets.webp', tags: ['american'], mood: ['late-night', 'comfort'],
        funFact: 'The chicken nugget was invented in the 1950s by Robert C. Baker at Cornell University.',
        checklist: ['Crispy breaded chicken pieces', 'Golden brown exterior', 'Perfect for dipping'],
        pairings: [{ type: 'Sauce', suggestion: 'BBQ, honey mustard, or sweet chili.', icon: '🍯' }]
    },
    {
        id: 135, name: 'Mozzarella Sticks', imageUrl: '/images/Mozzarella Sticks.webp', tags: ['american', 'vegetarian'], mood: ['late-night'],
        funFact: 'Mozzarella sticks became a popular appetizer in American restaurants during the 1970s.',
        checklist: ['Breaded and fried mozzarella', 'Stretchy cheese pull inside', 'Served with marinara'],
        pairings: [{ type: 'Sauce', suggestion: 'Marinara sauce for dipping.', icon: '🍅' }]
    },
    // === TRENDY (10) ===
    {
        id: 136, name: 'Birria Tacos', imageUrl: '/images/Birria Tacos.webp', tags: ['mexican'], mood: ['trendy', 'comfort'],
        funFact: 'Birria tacos went viral on social media, often dipped in consommé for extra flavor.',
        checklist: ['Slow-cooked beef in adobo', 'Crispy cheese-crusted tortilla', 'Served with rich consommé for dipping'],
        pairings: [{ type: 'Note', suggestion: 'The dipping consommé is essential.', icon: '🍲' }]
    },
    {
        id: 137, name: 'Korean Corn Dog', imageUrl: '/images/Korean Corn Dog.webp', tags: ['korean'], mood: ['trendy'],
        funFact: 'Korean corn dogs come with various coatings like potato cubes, ramen, or rice puffs.',
        checklist: ['Cheese or sausage on a stick', 'Crispy batter coating', 'Often rolled in sugar'],
        pairings: [{ type: 'Sauce', suggestion: 'Ketchup and mustard.', icon: '🌭' }]
    },
    {
        id: 138, name: 'Bao Buns', imageUrl: '/images/Bao Buns.webp', tags: ['chinese'], mood: ['trendy'],
        funFact: 'Gua bao (folded buns) became a global trend after appearing at hip restaurants worldwide.',
        checklist: ['Fluffy steamed bun', 'Filled with braised pork belly', 'Topped with pickled vegetables'],
        pairings: [{ type: 'Note', suggestion: 'The pillowy texture is key.', icon: '☁️' }]
    },
    {
        id: 139, name: 'Xiao Long Bao', imageUrl: '/images/Xiao Long Bao.webp', tags: ['chinese'], mood: ['trendy'],
        funFact: 'These soup dumplings contain gelatinized broth that melts when steamed.',
        checklist: ['Thin wrapper with soup inside', 'Carefully pleated top', 'Must be eaten with care to avoid spilling'],
        pairings: [{ type: 'Technique', suggestion: 'Bite carefully - there is hot soup inside!', icon: '🥟' }]
    },
    {
        id: 140, name: 'Smash Burger', imageUrl: '/images/Smash Burger.webp', tags: ['american'], mood: ['trendy', 'comfort'],
        funFact: 'Smash burgers are pressed thin on the griddle to maximize crispy, caramelized edges.',
        checklist: ['Thin patty smashed on griddle', 'Crispy lacy edges', 'Simple toppings, often double stacked'],
        pairings: [{ type: 'Side', suggestion: 'Crispy fries.', icon: '🍟' }]
    },
    {
        id: 141, name: 'Nashville Hot Chicken', imageUrl: '/images/Nashville Hot Chicken.webp', tags: ['american'], mood: ['trendy', 'spicy'],
        funFact: 'This fiery dish originated in Nashville as a revenge dish - now it\'s a beloved specialty.',
        checklist: ['Crispy fried chicken', 'Coated in cayenne pepper paste', 'Served on white bread with pickles'],
        pairings: [{ type: 'Note', suggestion: 'The heat level can be extreme - choose wisely!', icon: '🔥' }]
    },
    {
        id: 142, name: 'Crispy Pork Belly', imageUrl: '/images/Crispy Pork Belly.webp', tags: ['chinese'], mood: ['trendy', 'comfort'],
        funFact: 'The crackling skin is achieved by thoroughly drying the skin before roasting at high heat.',
        checklist: ['Crackling crispy skin', 'Tender meat underneath', 'Layer of rendered fat'],
        pairings: [{ type: 'Side', suggestion: 'Steamed rice and greens.', icon: '🍚' }]
    },
    {
        id: 143, name: 'Ramen Burger', imageUrl: '/images/Ramen Burger.webp', tags: ['japanese'], mood: ['trendy'],
        funFact: 'Created in Brooklyn in 2013, the ramen burger uses compressed ramen noodles as the bun.',
        checklist: ['Ramen noodle "bun"', 'Beef patty with soy glaze', 'Arugula and scallion topping'],
        pairings: [{ type: 'Note', suggestion: 'A creative fusion of two favorites.', icon: '🍜' }]
    },
    {
        id: 144, name: 'Truffle Fries', imageUrl: '/images/Truffle Fries.webp', tags: ['french', 'vegetarian'], mood: ['trendy'],
        funFact: 'Truffle fries became a gastropub staple in the 2010s.',
        checklist: ['Crispy fries with truffle oil', 'Sprinkled with parmesan', 'Aromatic and indulgent'],
        pairings: [{ type: 'Note', suggestion: 'The truffle aroma should be fragrant, not overpowering.', icon: '🍟' }]
    },
    {
        id: 145, name: 'Wagyu Beef Bowl', imageUrl: '/images/Wagyu Beef Bowl.webp', tags: ['japanese'], mood: ['trendy'],
        funFact: 'Wagyu refers to Japanese cattle breeds known for their intense marbling.',
        checklist: ['Thinly sliced premium wagyu', 'Over seasoned rice', 'Often with egg yolk'],
        pairings: [{ type: 'Note', suggestion: 'The marbling should be visible.', icon: '🥩' }]
    },
    // === HEALTHY (5) ===
    {
        id: 146, name: 'Salmon Poke Bowl', imageUrl: '/images/Salmon Poke Bowl.webp', tags: ['japanese', 'gluten-free'], mood: ['light', 'trendy'],
        funFact: 'Poke originated in Hawaii and means "to slice" in Hawaiian.',
        checklist: ['Fresh cubed salmon', 'Over sushi rice or salad', 'Topped with avocado and edamame'],
        pairings: [{ type: 'Sauce', suggestion: 'Soy sauce or spicy mayo.', icon: '🥢' }]
    },
    {
        id: 147, name: 'Buddha Bowl', imageUrl: '/images/Buddha Bowl.webp', tags: ['vegetarian', 'vegan', 'gluten-free'], mood: ['light'],
        funFact: 'Buddha bowls are named for their rounded, full appearance resembling Buddha\'s belly.',
        checklist: ['Grains, greens, and proteins', 'Colorful vegetables', 'Topped with a flavorful dressing'],
        pairings: [{ type: 'Dressing', suggestion: 'Tahini or peanut dressing.', icon: '🥜' }]
    },
    {
        id: 148, name: 'Cauliflower Rice Bowl', imageUrl: '/images/Cauliflower Rice Bowl.webp', tags: ['vegetarian', 'gluten-free'], mood: ['light'],
        funFact: 'Cauliflower rice became popular as a low-carb alternative to traditional rice.',
        checklist: ['Riced cauliflower base', 'Grilled proteins or tofu', 'Fresh vegetables and dressing'],
        pairings: [{ type: 'Note', suggestion: 'A great low-carb option.', icon: '🥦' }]
    },
    {
        id: 149, name: 'Grilled Chicken Salad', imageUrl: '/images/Grilled Chicken Salad.webp', tags: ['gluten-free'], mood: ['light'],
        funFact: 'The addition of grilled chicken to salads became popular in the health-conscious 1980s.',
        checklist: ['Juicy grilled chicken breast', 'Fresh mixed greens', 'Light vinaigrette dressing'],
        pairings: [{ type: 'Topping', suggestion: 'Avocado or feta cheese.', icon: '🥑' }]
    },
    {
        id: 150, name: 'Zucchini Noodles', imageUrl: '/images/Zucchini Noodles.webp', tags: ['vegetarian', 'gluten-free', 'vegan'], mood: ['light'],
        funFact: 'Zoodles became a diet trend as a pasta substitute for low-carb eating.',
        checklist: ['Spiralized zucchini noodles', 'Light sauce or pesto', 'Topped with vegetables or protein'],
        pairings: [{ type: 'Sauce', suggestion: 'Marinara or pesto.', icon: '🍅' }]
    },
];
