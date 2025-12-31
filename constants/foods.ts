import { FoodItem } from '../types';
import { NEW_FOODS } from './newFoods';

export const DIETARY_OPTIONS = [
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'gluten-free', label: 'Gluten-Free' },
];

// Mood-based category options
export const MOOD_OPTIONS = [
  { value: 'spicy', label: 'Spicy & Bold', icon: '🔥', description: 'Bring on the heat!' },
  { value: 'comfort', label: 'Comfort Food', icon: '🧸', description: 'Warm & cozy vibes' },
  { value: 'light', label: 'Light & Fresh', icon: '🍃', description: 'Keep it healthy' },
  { value: 'late-night', label: 'Late Night', icon: '🌙', description: 'Midnight cravings' },
  { value: 'trendy', label: 'Trendy', icon: '📸', description: 'Insta-worthy eats' },
];

export const CUISINE_OPTIONS = [
  { value: 'italian', label: 'Italian', icon: '🍕' },
  { value: 'mexican', label: 'Mexican', icon: '🌮' },
  { value: 'japanese', label: 'Japanese', icon: '🍣' },
  { value: 'american', label: 'American', icon: '🍔' },
  { value: 'indian', label: 'Indian', icon: '🍛' },
  { value: 'chinese', label: 'Chinese', icon: '🥡' },
  { value: 'thai', label: 'Thai', icon: '🌶️' },
  { value: 'mediterranean', label: 'Mediterranean', icon: '🥗' },
  { value: 'vietnamese', label: 'Vietnamese', icon: '🍲' },
  { value: 'french', label: 'French', icon: '🥖' },
  { value: 'british', label: 'British', icon: '☕' },
  { value: 'australian', label: 'Australian', icon: '🥧' },
  { value: 'greek', label: 'Greek', icon: '🫒' },
  { value: 'korean', label: 'Korean', icon: '🍗' },
  { value: 'spanish', label: 'Spanish', icon: '🥘' },
  { value: 'malaysian', label: 'Malaysian', icon: '🍜' },
  { value: 'indonesian', label: 'Indonesian', icon: '🥘' },
  { value: 'singaporean', label: 'Singaporean', icon: '🦀' },
  { value: 'dessert', label: 'Dessert', icon: '🍰' },
];

export const ALL_FOODS: FoodItem[] = [
  // Italian
  {
    id: 1, name: 'Margherita Pizza', imageUrl: '/images/Margherita Pizza.webp', tags: ['italian', 'vegetarian'], mood: ['comfort', 'late-night'],
    description: 'Margherita Pizza is a classic Neapolitan pizza featuring a thin, crispy crust topped with fresh San Marzano tomato sauce, creamy mozzarella di bufala, fragrant basil leaves, and a drizzle of extra virgin olive oil. Named after Queen Margherita of Savoy in 1889, its red, white, and green colors represent the Italian flag, making it a symbol of Italian culinary heritage.',
    qaTitle: 'Why is Margherita Pizza named after a Queen?',
    funFact: 'Named after Queen Margherita of Savoy in 1889, its colors represent the Italian flag.',
    checklist: ['A thin, crispy yet chewy crust', 'Fresh, high-quality mozzarella', 'Vibrant, sweet San Marzano tomato sauce'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A light lager or a glass of Chianti.', icon: '🍺' }, { type: 'Side Pairing', suggestion: 'A simple arugula salad with a lemon vinaigrette.', icon: '🥗' }],
    eatLikeLocal: [{ "icon": "🍕", "title": "Fold Your Slice", "description": "In Naples, the birthplace of pizza, locals often fold their slice (a portafoglio or 'wallet style') to eat it on the go." }, { "icon": "🚫", "title": "No Extra Toppings", "description": "A true Margherita is about simplicity. Resist the urge to ask for extra toppings like pineapple or chicken." }]
  },
  {
    id: 2, name: 'Spaghetti Carbonara', imageUrl: '/images/Spaghetti Carbonara.webp', tags: ['italian'], mood: ['comfort'],
    description: 'Spaghetti Carbonara is a Roman pasta dish made with eggs, Pecorino Romano cheese, cured guanciale (pork cheek), and freshly cracked black pepper. Unlike cream-based imitations, authentic Carbonara achieves its silky texture solely from emulsifying egg yolk with hot pasta and the rendered pork fat, creating a luxurious coating on each strand of spaghetti.',
    qaTitle: 'Does real Carbonara contain cream?',
    funFact: 'The name is believed to come from "carbonaro" (charcoal burner), possibly a dish made for Italian charcoal workers.',
    checklist: ['A creamy sauce made with egg yolk and Pecorino/Parmesan (no cream!)', 'Crispy, rendered guanciale or pancetta', 'A generous amount of freshly cracked black pepper'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A crisp, dry white wine like Pinot Grigio.', icon: '🍷' }],
    eatLikeLocal: [{ "icon": "🍳", "title": "No Cream, Ever", "description": "An authentic Carbonara uses egg yolk and the heat of the pasta to create its creamy sauce, never cream." }]
  },
  {
    id: 3, name: 'Lasagna', imageUrl: '/images/Lasagna.webp', tags: ['italian'], mood: ['comfort'],
    description: 'Lasagna is Italy\'s beloved layered pasta dish, featuring sheets of pasta alternating with rich Bolognese meat sauce, creamy béchamel, and generous amounts of Parmesan cheese. Originating from Naples, this hearty comfort food has ancient Greek roots but evolved into its modern tomato-based form in Italy, where each region boasts its own variation of this universally loved classic.',
    qaTitle: 'What is the difference between Italian and American lasagna?',
    funFact: 'The concept of layered pasta dates back to ancient Greece, but the modern tomato-based version is from Naples, Italy.',
    checklist: ['Distinct layers of pasta, meat sauce, and cheese', 'A rich, slow-cooked bolognese sauce', 'A creamy béchamel or ricotta layer'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A robust Italian red wine like a Chianti Classico.', icon: '🍷' }, { type: 'Side Pairing', suggestion: 'Garlic bread for soaking up extra sauce.', icon: '🥖' }],
    eatLikeLocal: [{ "icon": "👨‍🍳", "title": "Let It Rest", "description": "For the perfect slice that doesn't fall apart, let the lasagna rest for at least 10-15 minutes after taking it out of the oven." }]
  },
  {
    id: 4, name: 'Mushroom Risotto', imageUrl: '/images/Mushroom Risotto.webp', tags: ['italian', 'vegetarian', 'gluten-free'], mood: ['comfort'],
    description: 'Mushroom Risotto is a luxurious Northern Italian rice dish where Arborio rice is slowly cooked and constantly stirred to release its starches, creating an incredibly creamy texture without adding cream. Combined with earthy wild mushrooms, white wine, Parmigiano-Reggiano, and finished with butter, this dish exemplifies the Italian philosophy of transforming simple ingredients into something extraordinary.',
    qaTitle: 'Why does risotto need constant stirring?',
    funFact: 'Authentic risotto is stirred constantly to release the starch from the rice, creating its signature creamy texture without much cream.',
    checklist: ['Creamy texture with rice cooked perfectly al dente', 'Deep, earthy flavor from quality mushrooms', 'Finished with real Parmigiano-Reggiano cheese'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'An earthy Pinot Noir or a crisp Sauvignon Blanc.', icon: '🥂' }],
    eatLikeLocal: [{ "icon": "🥄", "title": "Stir, Stir, Stir", "description": "The key to a creamy risotto is constant stirring, which helps the rice release its starches." }]
  },
  {
    id: 5, name: 'Spinach & Ricotta Ravioli', imageUrl: '/images/Spinach & Ricotta Ravioli.webp', tags: ['italian', 'vegetarian'], mood: ['comfort'],
    description: 'Spinach and Ricotta Ravioli is a classic Italian stuffed pasta featuring delicate egg pasta pockets filled with a creamy mixture of fresh ricotta cheese and sautéed spinach, seasoned with nutmeg and Parmesan. Often served with a simple sage butter sauce, these pillows of pasta represent Italian cooking at its finest - where quality ingredients and careful craftsmanship create unforgettable flavors.',
    qaTitle: 'What does the word ravioli mean in Italian?',
    funFact: 'The word "ravioli" comes from the old Italian word "riavvolgere," which means "to wrap".',
    checklist: ['Pasta is tender but not mushy', 'A creamy, well-seasoned spinach and ricotta filling', 'Served in a simple sauce that complements the filling'],
    pairings: [{ type: 'Topping', suggestion: 'A sprinkle of freshly grated Parmesan cheese.', icon: '🧀' }],
    eatLikeLocal: [{ "icon": "🌿", "title": "Simple is Best", "description": "Enjoy with a simple sauce like sage butter or a light tomato sauce to let the filling shine." }]
  },
  {
    id: 6, name: 'Fettuccine Alfredo', imageUrl: '/images/Fettuccine Alfredo.webp', tags: ['italian', 'vegetarian'], mood: ['comfort'],
    description: 'Fettuccine Alfredo is a Roman pasta dish invented by Alfredo di Lelio in the early 20th century, originally containing just three ingredients: fresh fettuccine, butter, and Parmesan cheese. Through a technique called "mantecare" (emulsification), these simple ingredients are transformed into a luxuriously silky sauce that coats each ribbon of pasta, proving that Italian cuisine excels at elevating simplicity.',
    qaTitle: 'Who invented Fettuccine Alfredo and why?',
    funFact: 'The original Alfredo was invented in Rome and contained only three ingredients: fettuccine, butter, and Parmesan cheese.',
    checklist: ['A rich and creamy sauce that coats every noodle', 'High-quality Parmesan cheese is the star flavor', 'A hint of nutmeg and black pepper'],
    pairings: [{ type: 'Addition', suggestion: 'Add grilled chicken or shrimp for a more substantial meal.', icon: '🍗' }],
    eatLikeLocal: [{ "icon": "✨", "title": "The 'Mantecare' Secret", "description": "The creaminess comes from emulsifying butter, Parmesan, and hot pasta water in a technique called 'mantecare'." }]
  },
  {
    id: 7, name: 'Gnocchi with Pesto', imageUrl: '/images/Gnocchi with Pesto.webp', tags: ['italian', 'vegetarian'], mood: ['comfort'],
    description: 'Gnocchi with Pesto is a beloved Italian dish combining pillowy potato dumplings with vibrant Genovese basil pesto - a sauce made from fresh basil, pine nuts, garlic, Parmesan, and olive oil. These cloud-like gnocchi, when made properly, are light and tender, providing the perfect vehicle for the aromatic, herbaceous pesto that represents the flavors of the Ligurian coast.',
    qaTitle: 'How do you know when gnocchi are perfectly cooked?',
    funFact: 'Gnocchi are a type of small dumpling, and their name is thought to come from the Italian word "nocchio," meaning a knot in wood.',
    checklist: ['Soft, pillowy potato gnocchi that are light, not dense', 'A vibrant, fresh basil pesto sauce', 'Toasted pine nuts and Parmesan for garnish'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Cherry tomatoes and fresh mozzarella balls.', icon: '🍅' }],
    eatLikeLocal: [{ "icon": "🎈", "title": "Float to Finish", "description": "Homemade gnocchi are done cooking the moment they float to the surface of the boiling water." }]
  },

  // Mexican
  {
    id: 8, name: 'Tacos al Pastor', imageUrl: '/images/Tacos al Pastor.webp', tags: ['mexican'], mood: ['comfort', 'late-night'],
    description: 'Tacos al Pastor is a beloved Mexican street food featuring marinated pork that is slowly cooked on a vertical spit (trompo), then shaved and served on small corn tortillas. This dish is a delicious fusion of Lebanese shawarma brought by immigrants and Mexican culinary traditions, topped with fresh pineapple, onion, and cilantro for a perfect balance of savory, sweet, and fresh flavors.',
    qaTitle: 'What is the Lebanese connection to Tacos al Pastor?',
    funFact: 'This dish was created by Lebanese immigrants in Mexico, who adapted their traditional shawarma spit-grill to make tacos.',
    checklist: ['Marinated pork shaved directly from the spit (trompo)', 'Small corn tortillas, doubled up', 'Topped with fresh pineapple, onion, and cilantro'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'An ice-cold Mexican beer (like Pacifico) or a refreshing agua de horchata.', icon: '🍺' }],
    eatLikeLocal: [{ "icon": "🍍", "title": "Look for the Pineapple", "description": "A proper al pastor taco must have a small slice of roasted pineapple, which the taquero skillfully slices off the top of the vertical spit." }]
  },
  {
    id: 9, name: 'Burrito Bowl', imageUrl: '/images/Burrito Bowl.webp', tags: ['mexican', 'gluten-free'], mood: ['comfort'],
    description: 'A Burrito Bowl delivers all the satisfying flavors of a traditional Mexican burrito without the tortilla wrap. Featuring seasoned rice, black or pinto beans, your choice of protein (such as carne asada, carnitas, or chicken), and topped with fresh pico de gallo, guacamole, sour cream, and cheese, this customizable dish has become a global phenomenon for its bold flavors and healthier presentation.',
    qaTitle: 'Why is it called a burrito if there is no tortilla?',
    funFact: 'The burrito, meaning "little donkey" in Spanish, was invented in the early 20th century in Northern Mexico.',
    checklist: ['A balanced ratio of rice, beans, protein, and toppings', 'Fresh, vibrant salsa', 'Perfectly cooked and seasoned protein'],
    pairings: [{ type: 'Topping', suggestion: 'Add a scoop of fresh guacamole.', icon: '🥑' }],
    eatLikeLocal: [{ "icon": "🥣", "title": "Mix It Up", "description": "Don't eat the ingredients in sections. Mix everything together to get a perfect blend of flavors in every bite." }]
  },
  {
    id: 10, name: 'Cheese Quesadillas', imageUrl: '/images/Cheese Quesadillas.webp', tags: ['mexican', 'vegetarian'], mood: ['comfort', 'late-night'],
    description: 'Cheese Quesadillas are a quintessential Mexican comfort food featuring a flour or corn tortilla folded around melted cheese (traditionally Oaxacan or Chihuahuan cheese) and griddled until golden and crispy. This simple yet satisfying dish can be enhanced with various fillings like mushrooms, squash blossoms, or meats, and is always served with fresh salsa and sour cream for dipping.',
    qaTitle: 'What type of cheese is traditionally used in Mexican quesadillas?',
    funFact: 'The name "quesadilla" is a combination of the Spanish words "queso" (cheese) and "tortilla".',
    checklist: ['A golden-brown, crispy tortilla', 'Generously filled with gooey, melted cheese', 'Served with salsa and sour cream on the side'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A refreshing Mexican beer or a fizzy soda.', icon: '🍺' }],
    eatLikeLocal: [{ "icon": "🧀", "title": "Add a Filling", "description": "In Mexico, quesadillas often contain other ingredients besides cheese, like mushrooms, potatoes, or squash blossoms." }]
  },
  {
    id: 11, name: 'Chicken Enchiladas', imageUrl: '/images/Chicken Enchiladas.webp', tags: ['mexican'], mood: ['comfort', 'spicy'],
    description: 'Chicken Enchiladas are a beloved Mexican dish featuring corn tortillas rolled around shredded chicken and smothered in a rich, flavorful chili sauce - either red (made from dried chilies) or green (made from tomatillos). Topped with melted cheese and baked until bubbly, this dish traces its origins to Mayan times when the practice of rolling tortillas around fillings first began.',
    qaTitle: 'What is the difference between red and green enchilada sauce?',
    funFact: 'The practice of rolling tortillas around other food dates back to at least Mayan times.',
    checklist: ['Soft corn tortillas that hold together', 'A flavorful, rich chili sauce covering the tortillas', 'Topped with melted cheese'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Serve with a side of Mexican rice and refried beans.', icon: '🍚' }],
    eatLikeLocal: [{ "icon": "🌶️", "title": "Sauce is Everything", "description": "The quality of the enchilada is all in the sauce. A good, flavorful chili sauce is key." }]
  },
  {
    id: 12, name: 'Guacamole with Chips', imageUrl: '/images/Guacamole with Chips.webp', tags: ['mexican', 'vegan', 'vegetarian', 'gluten-free'], mood: ['light'],
    description: 'Guacamole is an ancient Mexican dip dating back to the Aztec Empire, made from ripe avocados mashed with lime juice, cilantro, onion, jalapeño, and salt. Served with crispy tortilla chips, this creamy, flavorful dip showcases the avocado - a fruit native to Mexico - in its most celebrated form. The key to perfect guacamole is using perfectly ripe avocados and keeping the texture chunky rather than smooth.',
    qaTitle: 'What did the Aztecs call guacamole?',
    funFact: 'Guacamole dates back to the Aztec Empire in the 1500s. The name comes from an Aztec dialect word for "avocado sauce".',
    checklist: ['Made with fresh, ripe avocados', 'A chunky texture, not a smooth puree', 'A good balance of lime, onion, and cilantro'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'Pairs perfectly with a margarita.', icon: '🍹' }],
    eatLikeLocal: [{ "icon": "🥑", "title": "Keep it Simple", "description": "Authentic guacamole often focuses on the basics: avocado, onion, cilantro, chili, lime, and salt." }]
  },
  {
    id: 13, name: 'Nachos Supreme', imageUrl: '/images/Nachos Supreme.webp', tags: ['mexican', 'vegetarian'], mood: ['comfort', 'late-night'],
    description: 'Nachos Supreme is a loaded version of the classic Tex-Mex snack, featuring crispy tortilla chips piled high with melted cheese, seasoned ground beef or beans, jalapeños, sour cream, guacamole, and fresh pico de gallo. Invented in 1943 by Ignacio "Nacho" Anaya at a restaurant near the Texas-Mexico border, this shareable dish has become a stadium and party favorite worldwide.',
    qaTitle: 'Who invented nachos and where?',
    funFact: 'Nachos were invented in 1943 in Piedras Negras, Mexico, by a restaurateur named Ignacio "Nacho" Anaya.',
    checklist: ['House-made tortilla chips that stay crispy', 'Generous, evenly-spread toppings', 'Fresh salsa and real guacamole, not from a tube'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A crisp Corona or a zesty margarita is its fated partner.', icon: '🍹' }, { type: 'Side Pairing', suggestion: 'Add a side of spicy jalapeños for an extra kick.', icon: '🌶️' }],
    eatLikeLocal: [{ "icon": " 👨‍🍳 ", "title": "Layer Properly", "description": "For the best experience, ensure toppings are layered evenly so every chip has a bit of everything." }]
  },
  {
    id: 14, name: 'Fish Tacos', imageUrl: '/images/Fish Tacos.webp', tags: ['mexican'], mood: ['light', 'trendy'],
    description: 'Fish Tacos are a Baja California specialty featuring beer-battered and fried white fish (or grilled) served in warm corn tortillas with shredded cabbage, creamy chipotle or lime crema, fresh pico de gallo, and a squeeze of lime. This coastal Mexican dish perfectly balances crispy, tangy, and fresh flavors, representing the laid-back beach culture of the Baja peninsula.',
    qaTitle: 'What makes Baja-style fish tacos different?',
    funFact: 'Baja-style fish tacos, featuring battered and fried fish, originated in Baja California, Mexico.',
    checklist: ['Crispy, battered fish or freshly grilled fish', 'A creamy, tangy white sauce', 'The crunch of fresh cabbage slaw'],
    pairings: [{ type: 'Topping', suggestion: 'A squeeze of fresh lime is essential.', icon: '🍋' }],
    eatLikeLocal: [{ "icon": "🤬", "title": "Cabbage is Crucial", "description": "A proper Baja-style fish taco needs the crunch of shredded cabbage and a creamy white sauce." }]
  },

  // Japanese
  {
    id: 15, name: 'Sushi Platter', imageUrl: '/images/Sushi Platter.webp', tags: ['japanese'], mood: ['light', 'trendy'],
    description: 'A Sushi Platter showcases the artistry of Japanese cuisine, featuring an assortment of fresh raw fish (sashimi) and vinegared rice preparations including nigiri, maki rolls, and sometimes hand rolls. Originating as a method of preserving fish in fermented rice in Southeast Asia, sushi evolved in Japan into the refined culinary art form we know today, where the quality of ingredients and knife skills are paramount.',
    qaTitle: 'What is the proper way to eat nigiri sushi?',
    funFact: 'Sushi originated in Southeast Asia as a method of preserving fish in fermented rice.',
    checklist: ['The fish looks fresh, glossy, and vibrant', 'The rice is well-seasoned and served at room temperature', 'Wasabi is placed between the fish and rice (for nigiri)'],
    pairings: [{ type: 'Accompaniment', suggestion: 'Cleanse your palate between pieces with pickled ginger.', icon: '🍣' }, { type: 'Drink Pairing', suggestion: 'Enjoy with a cup of warm sake or refreshing green tea.', icon: '🍵' }],
    eatLikeLocal: [{ "icon": "🍣", "title": "Dip Fish, Not Rice", "description": "When dipping nigiri in soy sauce, turn it over and lightly dip the fish side. Dipping the rice side makes it fall apart and too salty." }]
  },
  {
    id: 16, name: 'Tonkotsu Ramen', imageUrl: '/images/Tonkotsu Ramen.webp', tags: ['japanese'], mood: ['comfort', 'trendy'],
    description: 'Tonkotsu Ramen is a Japanese noodle soup originating from Fukuoka, featuring a rich, creamy, milky-white broth made by boiling pork bones for up to 20 hours. This intense cooking process extracts collagen from the bones, creating the signature velvety texture. Served with chewy alkaline noodles, melt-in-your-mouth chashu pork, soft-boiled marinated egg (ajitama), and various toppings, it represents the pinnacle of umami-rich comfort food.',
    qaTitle: 'Why is Tonkotsu broth so creamy and white?',
    funFact: '"Tonkotsu" literally means "pork bones," referring to the rich, creamy broth made by simmering pork bones for many hours.',
    checklist: ['A rich, opaque pork broth that coats the spoon', 'Perfectly chewy, al dente noodles', 'Melt-in-your-mouth chashu pork belly'],
    pairings: [{ type: 'Must-have Extra', suggestion: 'Always add an Ajitama (marinated soft-boiled egg).', icon: '🥚' }, { type: 'Side Pairing', suggestion: 'A side of crispy gyoza completes the meal.', icon: '🥟' }],
    eatLikeLocal: [{ "icon": "🍜", "title": "Slurp Loudly", "description": "Slurping your noodles is not rude in Japan; it's a sign that you're enjoying your meal and it also helps to cool the hot noodles." }]
  },
  {
    id: 17, name: 'Vegetable Tempura', imageUrl: '/images/Vegetable Tempura.webp', tags: ['japanese', 'vegetarian', 'vegan'], mood: ['light'],
    description: 'Vegetable Tempura is a light and crispy Japanese dish featuring seasonal vegetables dipped in a delicate batter and deep-fried to perfection. Introduced to Japan by Portuguese missionaries in the 16th century, tempura has evolved into a refined culinary art where the gossamer-thin, shatteringly crisp coating barely conceals the perfectly cooked vegetables within, served with tentsuyu dipping sauce and grated daikon.',
    qaTitle: 'How did Portuguese missionaries influence Japanese tempura?',
    funFact: 'The tempura frying technique was introduced to Japan by Portuguese missionaries in the 16th century.',
    checklist: ['A light and airy batter that is incredibly crispy', 'Vegetables are cooked but still have a slight bite', 'Served with a tentsuyu dipping sauce'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A cold Japanese beer or a cup of green tea.', icon: '🍵' }],
    eatLikeLocal: [{ "icon": "🔥", "title": "Eat it Hot", "description": "Tempura is best enjoyed immediately after frying to appreciate its light, crispy texture." }]
  },
  {
    id: 18, name: 'Chicken Teriyaki Don', imageUrl: '/images/Chicken Teriyaki Don.webp', tags: ['japanese'], mood: ['comfort'],
    description: 'Chicken Teriyaki Don is a popular Japanese rice bowl dish featuring glazed grilled chicken served over steamed rice. The word "teriyaki" combines "teri" (shine/glaze) and "yaki" (grill), referring to the glossy appearance of the sweet soy-based sauce that caramelizes on the chicken. This satisfying comfort food exemplifies the Japanese approach to simple, flavorful home cooking.',
    qaTitle: 'What does the word teriyaki actually mean?',
    funFact: 'The word "teriyaki" combines "teri" (to shine or glaze) and "yaki" (to grill or broil).',
    checklist: ['A glossy, sweet and savory teriyaki glaze', 'Perfectly cooked rice underneath', 'Often served with a side of steamed vegetables'],
    pairings: [{ type: 'Topping', suggestion: 'Sprinkle with sesame seeds and sliced spring onions.', icon: '✨' }, { type: 'Side Dish', suggestion: 'A simple bowl of miso soup is a perfect companion.', icon: '🥣' }],
    eatLikeLocal: [{ "icon": "🍚", "title": "Mix with the Rice", "description": "Don't be afraid to mix the saucy chicken with the rice underneath to get the flavor in every bite." }]
  },
  {
    id: 19, name: 'Miso Soup', imageUrl: '/images/Miso Soup.webp', tags: ['japanese', 'vegan', 'vegetarian', 'gluten-free'], mood: ['light'],
    description: 'Miso Soup is a foundational Japanese soup made from dashi (a stock of kelp and bonito flakes) combined with miso paste - fermented soybean paste that provides deep umami flavor. Typically containing silken tofu, wakame seaweed, and green onions, this nourishing soup is consumed by around 75% of Japanese people daily and accompanies nearly every traditional Japanese meal.',
    qaTitle: 'Why do most Japanese people eat miso soup every day?',
    funFact: 'Around 75% of people in Japan consume miso soup at least once a day.',
    checklist: ['A flavorful dashi broth', 'Soft cubes of tofu', 'Rehydrated wakame seaweed'],
    pairings: [{ type: 'Accompaniment', suggestion: 'A staple part of almost any traditional Japanese meal.', icon: '🍱' }],
    eatLikeLocal: [{ "icon": "🥣", "title": "Drink from the Bowl", "description": "It's customary to drink miso soup directly from the bowl, using chopsticks to eat the solid ingredients like tofu and seaweed." }]
  },
  {
    id: 20, name: 'Chicken Katsu Curry', imageUrl: '/images/Chicken Katsu Curry.webp', tags: ['japanese'], mood: ['comfort'],
    description: 'Chicken Katsu Curry is a beloved Japanese comfort food combining a crispy panko-breaded chicken cutlet with rich, mildly sweet Japanese curry sauce served over steamed rice. Unlike Indian curries, Japanese curry has a thicker, sweeter profile influenced by British Navy curry introduced in the late 19th century, making it one of Japan\'s most popular dishes alongside ramen and sushi.',
    qaTitle: 'How is Japanese curry different from Indian curry?',
    funFact: 'Japanese curry is one of the most popular dishes in Japan, often considered a national dish alongside ramen and sushi.',
    checklist: ['A crispy, golden-brown panko crust', 'Tender chicken that is not dry', 'A thick, savory, and slightly sweet Japanese curry sauce'],
    pairings: [{ type: 'Topping', suggestion: 'Add some fukujinzuke (pickled radish) for a sweet crunch.', icon: '🥕' }],
    eatLikeLocal: [{ "icon": "🍛", "title": "Mix as You Go", "description": "Instead of pouring all the curry over the rice at once, many people prefer to mix a little at a time to keep the katsu crispy." }]
  },
  {
    id: 21, name: 'Agedashi Tofu', imageUrl: '/images/Agedashi Tofu.webp', tags: ['japanese', 'vegetarian', 'vegan'], mood: ['light'],
    description: 'Agedashi Tofu is a traditional Japanese appetizer featuring silken tofu lightly coated in potato starch and deep-fried until golden, served in a warm dashi-based broth with grated daikon, ginger, and bonito flakes. The name "agedashi" means "lightly deep-fried," and this dish showcases the beautiful contrast between crispy exterior and silky-smooth interior.',
    qaTitle: 'What does agedashi mean in Japanese?',
    funFact: '"Agedashi" means lightly deep-fried, referring to the cooking method for the tofu.',
    checklist: ['A crispy, golden coating on the tofu', 'A light, savory dashi-based broth', 'Topped with green onions or grated daikon'],
    pairings: [{ type: 'Experience', suggestion: 'Enjoy the contrast between the crispy outside and the soft, silky inside.', icon: '😋' }],
    eatLikeLocal: [{ "icon": "🍲", "title": "Savor the Broth", "description": "The dashi-based broth is just as important as the tofu itself. Enjoy them together in one bite." }]
  },

  // Indian
  {
    id: 22, name: 'Butter Chicken', imageUrl: '/images/Butter Chicken.webp', tags: ['indian', 'gluten-free'], mood: ['comfort'],
    description: 'Butter Chicken (Murgh Makhani) is a creamy North Indian curry that has become one of the most popular Indian dishes worldwide. Featuring tender pieces of tandoor-cooked chicken swimming in a rich, velvety tomato-based sauce enriched with butter, cream, and aromatic spices like garam masala and fenugreek, this dish offers the perfect balance of mild heat, sweetness, and smoky depth that defines Indian comfort food.',
    qaTitle: 'How was Butter Chicken accidentally invented?',
    funFact: 'Butter Chicken was invented by accident in the 1950s at the Moti Mahal restaurant in Delhi, India.',
    checklist: ['Tender, tandoor-cooked chicken pieces', 'A creamy, well-balanced tomato-based sauce', 'A hint of sweetness and aromatic spices'],
    pairings: [{ type: 'Bread Pairing', suggestion: 'Perfect for scooping up with warm Garlic Naan.', icon: '🍞' }, { type: 'Drink Pairing', suggestion: 'A sweet Mango Lassi to cool the palate.', icon: '🥭' }],
    eatLikeLocal: [{ "icon": "🍞", "title": "Use Naan as a Spoon", "description": "Tear off a piece of naan bread and use it to scoop up the creamy curry and tender chicken." }]
  },
  {
    id: 23, name: 'Palak Paneer', imageUrl: '/images/Palak Paneer.webp', tags: ['indian', 'vegetarian', 'gluten-free'], mood: ['comfort'],
    description: 'Palak Paneer is a beloved North Indian vegetarian curry featuring cubes of paneer (fresh Indian cheese that doesn\'t melt) in a vibrant, creamy spinach gravy flavored with ginger, garlic, green chilies, and garam masala. This nutritious dish combines the iron-rich spinach ("palak") with protein-rich paneer, making it a staple in Indian vegetarian cuisine and a comfort food favorite worldwide.',
    qaTitle: 'What kind of cheese is paneer and why does it not melt?',
    funFact: '"Palak" means spinach and "Paneer" is a type of non-melting Indian cheese.',
    checklist: ['A vibrant green spinach gravy', 'Soft, non-rubbery cubes of paneer cheese', 'Aromatic spices like ginger, garlic, and garam masala'],
    pairings: [{ type: 'Bread Pairing', suggestion: 'Scoop it up with garlic naan or a simple roti.', icon: '🍞' }],
    eatLikeLocal: [{ "icon": "🧀", "title": "Best with Bread", "description": "Like many Indian curries, Palak Paneer is best enjoyed with a flatbread like naan or roti." }]
  },
  {
    id: 24, name: 'Vegetable Samosas', imageUrl: '/images/Vegetable Samosas.webp', tags: ['indian', 'vegetarian', 'vegan'], mood: ['comfort'],
    description: 'Vegetable Samosas are crispy, triangular pastries filled with a spiced mixture of potatoes, peas, and aromatic spices like cumin, coriander, and garam masala. While believed to have originated in the Middle East and brought to India by traders, samosas have become synonymous with Indian street food, typically served with sweet tamarind chutney and spicy green mint chutney.',
    qaTitle: 'Where did samosas originally come from?',
    funFact: 'Samosas are believed to have originated in the Middle East and were introduced to India by traders.',
    checklist: ['A crispy, flaky pastry that isn\'t greasy', 'A well-spiced filling of potatoes and peas', 'Served with a tangy tamarind or mint chutney'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'Perfect with a hot cup of masala chai.', icon: '☕' }],
    eatLikeLocal: [{ "icon": "🌶️", "title": "Dip, Don't Drown", "description": "Dip a corner of the samosa into the chutney (like mint or tamarind) for a burst of flavor." }]
  },
  {
    id: 25, name: 'Chicken Biryani', imageUrl: '/images/Chicken Biryani.webp', tags: ['indian', 'gluten-free'], mood: ['comfort', 'spicy'],
    description: 'Chicken Biryani is a magnificent Indian rice dish that emerged from the royal kitchens of the Mughal Empire. This aromatic masterpiece layers fragrant basmati rice with spiced, marinated chicken, saffron, fried onions, and fresh herbs, then slow-cooked together in a sealed pot ("dum") to allow the flavors to meld. Each region of India boasts its own style, from the Hyderabadi to the Lucknowi.',
    qaTitle: 'What is the dum cooking method in biryani?',
    funFact: 'Biryani is a complex rice dish that was developed in the kitchens of the Mughal Empire.',
    checklist: ['Long-grain, fragrant basmati rice', 'Tender, marinated chicken pieces', 'Layers of flavor from saffron, mint, and fried onions'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Serve with a cooling raita (yogurt dip) to balance the spice.', icon: '🥣' }],
    eatLikeLocal: [{ "icon": "🍚", "title": "Mix from the Bottom", "description": "A good biryani is layered. Mix from the bottom of the pot to get a combination of the rice, meat, and fragrant spices." }]
  },
  {
    id: 26, name: 'Garlic Naan Bread', imageUrl: '/images/Garlic Naan Bread.webp', tags: ['indian', 'vegetarian'], mood: ['comfort'],
    description: 'Garlic Naan is a soft, pillowy Indian flatbread topped with aromatic garlic and fresh cilantro, traditionally baked in a tandoor (clay oven) that reaches temperatures of 480°C (900°F). The bread is slapped onto the tandoor\'s walls where it cooks in just minutes, developing characteristic charred bubbles and a slightly chewy texture. Brushed with melted ghee, it\'s the perfect accompaniment for scooping up curries.',
    qaTitle: 'How hot does a tandoor oven get to cook naan?',
    funFact: 'Naan is traditionally cooked by slapping the dough onto the sides of a very hot clay oven called a tandoor.',
    checklist: ['Soft and chewy with a slightly crispy bottom', 'A generous amount of garlic and fresh cilantro', 'Brushed with ghee or butter'],
    pairings: [{ type: 'Purpose', suggestion: 'The perfect tool for mopping up delicious curry sauces.', icon: '👌' }],
    eatLikeLocal: [{ "icon": "🍞", "title": "A Vessel for Flavor", "description": "Use it to scoop up curries, or simply enjoy it on its own." }]
  },
  {
    id: 27, name: 'Chana Masala', imageUrl: '/images/Chana Masala.webp', tags: ['indian', 'vegetarian', 'vegan', 'gluten-free'], mood: ['comfort', 'spicy'],
    description: 'Chana Masala is a North Indian chickpea curry featuring "chana" (chickpeas) simmered in a tangy, spiced tomato-onion gravy with cumin, coriander, turmeric, and garam masala. This protein-rich vegetarian dish is a staple of Punjabi cuisine and is traditionally served with bhature (fried bread) or fluffy basmati rice. A squeeze of lemon juice at the end brightens all the flavors.',
    qaTitle: 'What is the difference between chana masala and chole?',
    funFact: '"Chana" is the Hindi word for chickpeas, the star ingredient of this popular curry.',
    checklist: ['Tender chickpeas in a spicy, tangy onion-tomato gravy', 'A complex flavor from spices like cumin, coriander, and turmeric', 'Finished with a sprinkle of fresh cilantro'],
    pairings: [{ type: 'Accompaniment', suggestion: 'Serve with fluffy bhature or basmati rice.', icon: '🍚' }],
    eatLikeLocal: [{ "icon": "🍋", "title": "A Squeeze of Lemon", "description": "A fresh squeeze of lemon or lime at the end brightens up all the flavors." }]
  },
  {
    id: 28, name: 'Lamb Rogan Josh', imageUrl: '/images/Lamb Rogan Josh.webp', tags: ['indian', 'gluten-free'], mood: ['comfort', 'spicy'],
    description: 'Lamb Rogan Josh is an aromatic Kashmiri curry of Persian origin featuring tender, fall-off-the-bone lamb pieces braised in a rich, deep-red sauce. The vibrant color comes from Kashmiri red chillies (which provide color without excessive heat), while the complex flavor is built from ginger, garlic, fennel, cardamom, and other warming spices that define this royal dish.',
    qaTitle: 'Why is Rogan Josh so red in color?',
    funFact: 'This dish is of Persian origin and gets its signature red color from dried Kashmiri chillies.',
    checklist: ['Fall-apart tender lamb pieces', 'A deep, aromatic red sauce from Kashmiri chillies', 'A complex flavor profile of ginger, fennel, and cardamom'],
    pairings: [{ type: 'Side Dish', suggestion: 'Serve with steamed basmati rice to soak up the gravy.', icon: '🍚' }, { type: 'Accompaniment', suggestion: 'A side of cool raita (yoghurt dip) balances the spice.', icon: '🥣' }],
    eatLikeLocal: [{ "icon": "🍚", "title": "Pair with Rice", "description": "The rich, aromatic gravy is perfect for soaking into fluffy basmati rice." }]
  },

  // American
  {
    id: 29, name: 'Classic Cheeseburger', imageUrl: '/images/Classic Cheeseburger.webp', tags: ['american'], mood: ['comfort', 'late-night'],
    description: 'The Classic Cheeseburger is an American icon featuring a seasoned beef patty topped with melted American cheese, crisp lettuce, fresh tomato, onion, and pickles, all nestled in a soft sesame seed bun. First created in 1926 at a Pasadena sandwich shop, the cheeseburger has become one of the world\'s most recognized and beloved comfort foods, representing American culinary culture globally.',
    qaTitle: 'Where was the cheeseburger invented?',
    funFact: 'The first cheeseburger was reportedly created in 1926 at a sandwich shop in Pasadena, California.',
    checklist: ['A juicy, well-seasoned patty with a nice crust', 'A soft but sturdy bun that holds up', 'Fresh, crisp lettuce and tomato'],
    pairings: [{ type: 'Side Pairing', suggestion: 'A classic pairing with crispy french fries and a milkshake.', icon: '🍟' }],
    eatLikeLocal: [{ "icon": "🍔", "title": "The Burger 'Smile'", "description": "Hold the burger with your thumbs and pinkies at the bottom and other fingers on top to keep the fillings from sliding out." }]
  },
  {
    id: 30, name: 'Mac & Cheese', imageUrl: '/images/Mac & Cheese.webp', tags: ['american', 'vegetarian'], mood: ['comfort'],
    description: 'Mac & Cheese is America\'s ultimate comfort food, featuring elbow macaroni enveloped in a rich, creamy cheese sauce typically made from cheddar or a blend of cheeses. Popularized by Thomas Jefferson after his travels in France, this simple yet satisfying dish often features a golden-brown breadcrumb topping when baked, adding a delightful crunch to the creamy pasta.',
    qaTitle: 'How did Thomas Jefferson influence mac and cheese in America?',
    funFact: 'Thomas Jefferson is credited with popularizing macaroni and cheese in the United States after discovering it in France.',
    checklist: ['A creamy, cheesy sauce that coats every piece of pasta', 'Perfectly cooked pasta that isn\'t mushy', 'A golden-brown baked top, often with breadcrumbs'],
    pairings: [{ type: 'Addition', suggestion: 'Add bacon or pulled pork for an extra savory kick.', icon: '🥓' }],
    eatLikeLocal: [{ "icon": "🧀", "title": "The Topping Matters", "description": "A crispy breadcrumb topping adds a much-needed textural contrast to the creamy pasta." }]
  },
  {
    id: 31, name: 'BBQ Ribs', imageUrl: '/images/BBQ Ribs.webp', tags: ['american', 'gluten-free'], mood: ['comfort'],
    description: 'BBQ Ribs are the crown jewel of American barbecue culture, featuring pork ribs slow-smoked for hours until the meat becomes incredibly tender and develops a caramelized, slightly charred exterior. With four distinct regional styles - Memphis (dry rub), North Carolina (vinegar-based), Kansas City (sweet and tangy), and Texas (beef-focused) - this dish represents the diverse flavors of American outdoor cooking.',
    qaTitle: 'What are the four main BBQ styles in America?',
    funFact: 'There are four main styles of regional barbecue in the US: Memphis, North Carolina, Kansas City, and Texas.',
    checklist: ['Meat that is tender and pulls easily from the bone', 'A smoky flavor that permeates the meat', 'A tangy, slightly sweet BBQ sauce that isn\'t overpowering'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Classic companions are coleslaw and cornbread.', icon: '🌽' }, { type: 'Drink Pairing', suggestion: 'A cold, crisp lager or a bold Zinfandel wine.', icon: '🍺' }],
    eatLikeLocal: [{ "icon": "🖐️", "title": "Use Your Hands", "description": "There's no polite way to eat good ribs. Don't be afraid to get your hands dirty." }]
  },
  {
    id: 32, name: 'Buffalo Wings', imageUrl: '/images/Buffalo Wings.webp', tags: ['american'], mood: ['spicy', 'late-night'],
    description: 'Buffalo Wings are an American bar food staple invented in 1964 at the Anchor Bar in Buffalo, New York. These deep-fried chicken wings are tossed in a spicy, tangy sauce made from cayenne pepper hot sauce and butter, traditionally served with cool blue cheese dressing and crisp celery sticks to balance the heat. They\'ve since become a Super Bowl party essential.',
    qaTitle: 'Who invented Buffalo wings and where?',
    funFact: 'Buffalo wings were invented in 1964 at the Anchor Bar in Buffalo, New York.',
    checklist: ['Crispy skin, even when coated in sauce', 'A tangy and spicy cayenne pepper-based sauce', 'Served with blue cheese dressing and celery sticks'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A cold, light beer is the perfect match.', icon: '🍺' }],
    eatLikeLocal: [{ "icon": "🌶️", "title": "Dip, Don't Smear", "description": "Use the blue cheese or ranch dip to cool the heat between bites." }]
  },
  {
    id: 33, name: 'New York Hot Dog', imageUrl: '/images/New York Hot Dog.webp', tags: ['american'], mood: ['comfort', 'late-night'],
    description: 'The New York Hot Dog is an iconic street food featuring an all-beef frankfurter with a satisfying snap, served in a soft steamed bun with spicy brown mustard, tangy sauerkraut, and onions. The famous "dirty water dogs" get their name from the seasoned water carts use to boil the sausages, which vendors rarely change - supposedly adding flavor with each passing day.',
    qaTitle: 'Why are NYC hot dogs called dirty water dogs?',
    funFact: 'The iconic New York "dirty water dog" is boiled in seasoned water, which vendors rarely change, adding more flavor over time.',
    checklist: ['A snappy, all-beef frankfurter', 'A soft, steamed bun', 'Classic toppings like sauerkraut and spicy brown mustard'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Often enjoyed with a side of crunchy potato chips.', icon: '🥔' }, { type: 'Experience', suggestion: 'Best eaten from a street cart on a busy city corner!', icon: '🏙️' }],
    eatLikeLocal: [{ "icon": "🌭", "title": "Eat it on the Street", "description": "For the most authentic experience, buy it from a street cart and eat it while walking." }]
  },
  {
    id: 34, name: 'Southern Fried Chicken', imageUrl: '/images/Southern Fried Chicken.webp', tags: ['american'], mood: ['comfort'],
    description: 'Southern Fried Chicken is a cornerstone of American soul food, featuring bone-in chicken pieces marinated in buttermilk, coated in seasoned flour, and deep-fried to golden perfection. The technique of frying chicken in fat was brought to the American South by Scottish immigrants and perfected by African American cooks, resulting in a dish with an audibly crunchy crust and incredibly juicy meat.',
    qaTitle: 'Who brought fried chicken to the American South?',
    funFact: 'Scottish immigrants are often credited with bringing the tradition of deep-frying chicken in fat to the American South.',
    checklist: ['An audibly crunchy, well-seasoned crust', 'Juicy, flavorful meat inside', 'Not overly greasy'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Serve with mashed potatoes, gravy, and coleslaw.', icon: '🥔' }],
    eatLikeLocal: [{ "icon": "🖐️", "title": "Hands On", "description": "Like BBQ ribs, fried chicken is often enjoyed using your hands." }]
  },
  {
    id: 35, name: 'Philly Cheesesteak', imageUrl: '/images/Philly Cheesesteak.webp', tags: ['american'], mood: ['comfort', 'late-night'],
    description: 'The Philly Cheesesteak is Philadelphia\'s signature sandwich, invented in the 1930s by hot dog vendors Pat and Harry Olivieri. Featuring thinly sliced ribeye steak cooked on a griddle with onions and topped with melted cheese (traditionally Cheez Whiz, provolone, or American), all served on a crusty Italian hoagie roll. Order "wit" for onions or "wit-out" to skip them.',
    qaTitle: 'What is the authentic cheese for a Philly cheesesteak?',
    funFact: 'The Philly Cheesesteak was invented in the 1930s by Pat and Harry Olivieri, who ran a hot dog stand in Philadelphia.',
    checklist: ['Thinly sliced ribeye steak', 'A long, crusty roll (like an Amoroso roll)', 'Melted cheese, either Cheez Whiz, provolone, or American'],
    pairings: [{ type: 'Topping', suggestion: 'Order it "wit" or "wit-out" grilled onions.', icon: '🧅' }],
    eatLikeLocal: [{ "icon": "🧀", "title": "The 'Philly Lean'", "description": "To avoid getting 'Cheez Whiz' on your shirt, locals stand and lean forward while eating. It's a practiced art." }]
  },

  // Chinese
  {
    id: 36, name: 'Sweet and Sour Pork', imageUrl: '/images/Sweet and Sour Pork.webp', tags: ['chinese'], mood: ['comfort'],
    description: 'Sweet and Sour Pork is a Cantonese classic featuring tender pork pieces coated in a light, crispy batter and tossed in a vibrant sauce that perfectly balances sweet and tangy flavors. Originating in 18th-century Canton (Guangzhou), this dish has become a Chinese restaurant staple worldwide, typically served with colorful bell peppers and pineapple chunks.',
    qaTitle: 'Where did Sweet and Sour Pork originate?',
    funFact: 'This dish originated in 18th-century Canton (Guangzhou) as a way to use up leftover pork.',
    checklist: ['A crispy coating on the pork, even with sauce', 'A balanced sauce that is both sweet and tangy', 'Fresh, crisp vegetables like bell peppers and pineapple'],
    pairings: [{ type: 'Side Pairing', suggestion: 'A bowl of simple steamed rice is essential.', icon: '🍚' }, { type: 'Drink Pairing', suggestion: 'Oolong tea can cut through the richness.', icon: '🍵' }],
    eatLikeLocal: [{ "icon": "🍚", "title": "With Steamed Rice", "description": "The simple steamed rice balances the strong flavors of the sweet and sour sauce." }]
  },
  {
    id: 37, name: 'Kung Pao Chicken', imageUrl: '/images/Kung Pao Chicken.webp', tags: ['chinese'], mood: ['spicy', 'comfort'],
    description: 'Kung Pao Chicken is a classic Sichuan dish featuring tender chicken stir-fried with dried red chilies, Sichuan peppercorns, and roasted peanuts in a savory-sweet sauce. Named after Ding Baozhen, a Qing Dynasty official with the title "Gongbao," this dish is famous for its "ma-la" (numbing and spicy) sensation that defines Sichuan cuisine.',
    qaTitle: 'Who is Kung Pao Chicken named after?',
    funFact: 'The dish is named after Ding Baozhen, a late Qing Dynasty official whose title was "Gongbao" (Kung Pao).',
    checklist: ['A noticeable "ma-la" (numbing and spicy) flavor from Sichuan peppercorns', 'Tender chicken and crunchy peanuts', 'A savory sauce with a hint of sweetness and vinegar'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Best served with steamed rice.', icon: '🍚' }, { type: 'Drink Pairing', suggestion: 'A light, crisp lager complements the spice.', icon: '🍺' }],
    eatLikeLocal: [{ "icon": "🌶️", "title": "Watch for Peppercorns", "description": "The whole Sichuan peppercorns provide flavor but are not usually eaten on their own." }]
  },
  {
    id: 38, name: 'Pork Dumplings', imageUrl: '/images/Pork Dumplings.webp', tags: ['chinese'], mood: ['comfort'],
    description: 'Pork Dumplings (Jiaozi) are delicate parcels of thin dough wrapped around a savory mixture of ground pork, ginger, scallions, and seasonings. A cornerstone of Chinese cuisine, these dumplings are traditionally eaten during Chinese New Year celebrations, where their shape resembles ancient Chinese gold ingots, symbolizing wealth and prosperity.',
    qaTitle: 'Why are dumplings eaten during Chinese New Year?',
    funFact: 'In China, dumplings (jiaozi) are a traditional food eaten during the Chinese New Year celebrations.',
    checklist: ['A thin, delicate wrapper that isn\'t doughy', 'A juicy, flavorful pork filling', 'Served with a soy-vinegar dipping sauce'],
    pairings: [{ type: 'Condiment', suggestion: 'Add some chili oil or fresh ginger to the dipping sauce.', icon: '🌶️' }],
    eatLikeLocal: [{ "icon": "🥟", "title": "The Dipping Sauce", "description": "The combination of soy sauce, vinegar, and sometimes chili oil is essential." }]
  },
  {
    id: 39, name: 'Vegetable Spring Rolls', imageUrl: '/images/Vegetable Spring Rolls.webp', tags: ['chinese', 'vegetarian', 'vegan'], mood: ['light'],
    description: 'Vegetable Spring Rolls are crispy, golden-fried appetizers filled with a savory mixture of cabbage, carrots, mushrooms, and other vegetables, wrapped in a thin, shatteringly crisp wheat flour wrapper. Named for their traditional consumption during the Spring Festival (Chinese New Year), these rolls symbolize wealth and good fortune.',
    qaTitle: 'Why are spring rolls called spring rolls?',
    funFact: 'Spring rolls are named as such because they were traditionally eaten during the Spring Festival in China.',
    checklist: ['A shatteringly crispy wrapper', 'A well-seasoned vegetable filling', 'Served with a sweet chili dipping sauce'],
    pairings: [{ type: 'Experience', suggestion: 'Best enjoyed piping hot and fresh from the fryer.', icon: '🔥' }],
    eatLikeLocal: [{ "icon": "🥬", "title": "Wrap and Dip", "description": "Sometimes served with fresh lettuce and herbs to wrap around the roll before dipping." }]
  },
  {
    id: 40, name: 'Yangzhou Fried Rice', imageUrl: '/images/Yangzhou Fried Rice.webp', tags: ['chinese'], mood: ['comfort'],
    description: 'Yangzhou Fried Rice (Yeung Chow) is China\'s most famous fried rice dish, originating from Yangzhou in Jiangsu province. This premium version features perfectly separated rice grains stir-fried at high heat with a colorful mix of char siu (BBQ pork), shrimp, eggs, peas, and spring onions.',
    qaTitle: 'What makes Yangzhou fried rice different from regular fried rice?',
    funFact: 'Authentic Yangzhou (or Yeung Chow) fried rice must include sea cucumber, chicken, Chinese ham, shrimp, and dried scallops.',
    checklist: ['Each grain of rice is separate and well-seasoned', 'A colorful mix of ingredients like shrimp, ham, and peas', 'A savory flavor from a good quality soy sauce'],
    pairings: [{ type: 'Purpose', suggestion: 'A complete meal in itself, not just a side dish.', icon: ' wok ' }],
    eatLikeLocal: [{ "icon": "🍚", "title": "A Meal on its Own", "description": "This is a complete dish, not just a side. It's meant to be enjoyed as the main event." }]
  },
  {
    id: 41, name: 'Peking Duck', imageUrl: '/images/Peking Duck.webp', tags: ['chinese'], mood: ['comfort', 'trendy'],
    description: 'Peking Duck is an imperial Chinese dish dating back to the Yuan Dynasty, renowned for its thin, crispy, lacquered skin achieved through air-drying and repeated glazing with maltose syrup. The duck is traditionally carved tableside and served with thin pancakes, hoisin sauce, slivered scallions, and cucumber.',
    qaTitle: 'Why is Peking Duck skin so crispy?',
    funFact: 'The preparation of Peking Duck dates back to the imperial era of China and involves pumping air between the skin and meat.',
    checklist: ['Incredibly crispy, mahogany-colored skin', 'Served with thin pancakes, hoisin sauce, and slivered scallions/cucumber', 'The skin is the most prized part'],
    pairings: [{ type: 'Experience', suggestion: 'Assembling your own pancake is part of the fun.', icon: '🦆' }],
    eatLikeLocal: [{ "icon": "🦆", "title": "The Assembly Line", "description": "Take a pancake, add a piece of crispy duck skin, some meat, spring onion, cucumber, and a dab of hoisin sauce, then roll it up." }]
  },
  {
    id: 42, name: 'Mapo Tofu', imageUrl: '/images/Mapo Tofu.webp', tags: ['chinese', 'vegetarian'], mood: ['spicy', 'comfort'],
    description: 'Mapo Tofu is a fiery Sichuan classic featuring silken tofu swimming in a bold, crimson sauce flavored with doubanjiang (fermented chili bean paste), Sichuan peppercorns, and fermented black beans. Named after its creator, a "pockmarked grandmother" (ma-po) from 19th century Chengdu, this dish delivers the signature "ma-la" sensation.',
    qaTitle: 'What does Mapo mean in Chinese cooking?',
    funFact: 'The name "Mapo Tofu" roughly translates to pockmarked old woman\'s tofu, named after its creator.',
    checklist: ['Soft, silken tofu in a fiery red sauce', 'The signature "ma-la" (numbing and spicy) sensation', 'Often contains minced pork or beef'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Must be served with plenty of steamed white rice to balance the heat.', icon: '🍚' }],
    eatLikeLocal: [{ "icon": "🍚", "title": "Don't Eat it Alone", "description": "The bold, spicy flavor is meant to be eaten with plenty of steamed rice." }]
  },

  // Thai
  {
    id: 43, name: 'Pad Thai', imageUrl: '/images/Pad Thai.webp', tags: ['thai'], mood: ['comfort', 'trendy'],
    description: 'Pad Thai is Thailand\'s most famous stir-fried noodle dish, featuring flat rice noodles wok-tossed with eggs, tofu or shrimp, and a perfectly balanced sauce made from tamarind paste, fish sauce, and palm sugar. Popularized in the 1930s as part of a government campaign to promote Thai nationalism, this iconic dish exemplifies the Thai culinary philosophy of balancing sweet, sour, salty, and umami flavors in every bite.',
    qaTitle: 'Why was Pad Thai created as a national dish?',
    funFact: 'Pad Thai was popularized in the 1930s by the Thai government as part of a campaign to promote nationalism.',
    checklist: ['A perfect balance of sweet, sour, and salty flavors', 'Chewy rice noodles that aren\'t mushy', 'Served with fresh bean sprouts, lime, and crushed peanuts on the side'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A sweet and creamy Thai iced tea is the classic choice.', icon: '🥤' }, { type: 'Topping', suggestion: 'A generous squeeze of fresh lime brightens all the flavors.', icon: '🍋' }],
    eatLikeLocal: [{ "icon": "🍋", "title": "Squeeze the Lime", "description": "Before you mix everything, squeeze the lime wedge over the entire dish. It's essential for balancing the flavors." }]
  },
  {
    id: 44, name: 'Thai Green Curry', imageUrl: '/images/Thai Green Curry.webp', tags: ['thai', 'gluten-free', 'vegetarian'], mood: ['spicy', 'comfort'],
    description: 'Thai Green Curry (Gaeng Keow Wan) is a fragrant, creamy Thai curry made with fresh green curry paste (containing green chilies, galangal, lemongrass, and kaffir lime leaves), coconut milk, and your choice of meat or vegetables. Despite its vibrant green color coming from fresh green chilies, which are actually spicier than dried red ones, this is one of the hotter Thai curries.',
    qaTitle: 'Why is Thai green curry spicier than red curry?',
    funFact: 'The color of Thai green curry comes from fresh green chillies, which are actually spicier than red chillies.',
    checklist: ['Aromatic fragrance from fresh herbs and green chillies', 'Creamy but not heavy coconut milk base', 'A pleasant, building heat that doesn\'t overwhelm'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Jasmine rice is essential to soak up the delicious sauce.', icon: '🍚' }],
    eatLikeLocal: [{ "icon": "🍚", "title": "Pour Over Rice", "description": "Serve the curry over a bed of fragrant jasmine rice." }]
  },
  {
    id: 45, name: 'Tom Yum Goong', imageUrl: '/images/Tom Yum Goong.webp', tags: ['thai', 'gluten-free'], mood: ['spicy', 'light'],
    description: 'Tom Yum Goong is Thailand\'s most famous soup, featuring a hot and sour broth infused with aromatic lemongrass, galangal, kaffir lime leaves, and fresh chilies, swimming with plump prawns ("goong"). The name literally translates to "boiled spicy sour shrimp," and this intensely flavored soup perfectly embodies the Thai philosophy of balancing hot, sour, salty, and umami flavors.',
    qaTitle: 'What does Tom Yum Goong mean in Thai?',
    funFact: '"Tom Yum" refers to the hot and sour flavors, while "Goong" means shrimp.',
    checklist: ['A hot and sour broth with distinct lemongrass and galangal notes', 'Plump, fresh prawns', 'A vibrant aroma from kaffir lime leaves'],
    pairings: [{ type: 'Topping', suggestion: 'Add a dash of coconut milk for a creamier "Tom Kha" style soup.', icon: '🥥' }, { type: 'Side Pairing', suggestion: 'Usually enjoyed on its own or with a small side of rice.', icon: '🍚' }],
    eatLikeLocal: [{ "icon": "🌶️", "title": "Don't Eat the Herbs", "description": "The large pieces of lemongrass, galangal, and kaffir lime leaves are for flavor and are not meant to be eaten." }]
  },
  {
    id: 46, name: 'Massaman Curry', imageUrl: '/images/Massaman Curry.webp', tags: ['thai', 'gluten-free'], mood: ['comfort'],
    description: 'Massaman Curry is a unique Thai-Muslim fusion curry with Persian influences, featuring tender chunks of beef or chicken, soft potatoes, and roasted peanuts in a rich, mildly sweet coconut curry. Unlike typical Thai curries, Massaman incorporates dry spices like cinnamon, cardamom, and star anise - legacies of ancient Silk Road trade routes - creating a warming, aromatic dish.',
    qaTitle: 'Why is Massaman curry different from other Thai curries?',
    funFact: 'Massaman curry has Persian influences, which is why it includes dry spices like cinnamon and cardamom not common in other Thai curries.',
    checklist: ['A rich, mild, and slightly sweet curry', 'Tender chunks of beef or chicken and soft potatoes', 'A nutty flavor from peanuts and fragrant spices like cinnamon and cardamom'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Perfectly complements steamed jasmine rice.', icon: '🍚' }, { type: 'Topping', suggestion: 'Top with extra roasted peanuts for more crunch.', icon: '🥜' }],
    eatLikeLocal: [{ "icon": "🌶️", "title": "A Fusion of Flavors", "description": "Enjoy the unique blend of Thai and Indian spices, a legacy of ancient trade routes." }]
  },
  {
    id: 47, name: 'Mango Sticky Rice', imageUrl: '/images/Mango Sticky Rice.webp', tags: ['thai', 'vegetarian', 'vegan', 'gluten-free'], mood: ['light', 'trendy'],
    description: 'Mango Sticky Rice (Khao Niao Mamuang) is Thailand\'s most beloved dessert, featuring warm, chewy glutinous rice soaked in sweet coconut cream, served alongside slices of perfectly ripe Nam Dok Mai mango. Traditionally enjoyed during mango season (April-May), this simple yet sublime dessert balances the tropical sweetness of mango with the subtle saltiness of the coconut-dressed rice.',
    qaTitle: 'When is the best time to eat mango sticky rice in Thailand?',
    funFact: 'This popular Thai dessert is traditionally eaten during the peak mango season in the summer (April and May).',
    checklist: ['Perfectly ripe, sweet mango', 'Warm, soft, and chewy sticky rice', 'A creamy, slightly salty coconut sauce drizzled on top'],
    pairings: [{ type: 'Topping', suggestion: 'A sprinkle of crispy toasted mung beans adds great texture.', icon: '✨' }, { type: 'Drink Pairing', suggestion: 'Enjoy with a cup of pandan or lemongrass tea.', icon: '🍵' }],
    eatLikeLocal: [{ "icon": "🥭", "title": "A Little Bit of Everything", "description": "Get a little bit of the sweet mango, chewy sticky rice, and salty coconut cream all in one bite for the perfect flavor combination." }]
  },

  // Mediterranean
  {
    id: 48, name: 'Falafel Wrap', imageUrl: '/images/Falafel Wrap.webp', tags: ['mediterranean', 'vegetarian', 'vegan'], mood: ['light'],
    description: 'A Falafel Wrap is a Middle Eastern street food staple featuring crispy, golden-fried balls made from ground chickpeas (or fava beans), aromatic herbs, and spices, wrapped in warm pita bread with fresh salad, hummus, and tangy tahini sauce. These protein-rich legume fritters have ancient origins and have become a beloved vegetarian option worldwide.',
    qaTitle: 'What are falafels made from?',
    funFact: 'Falafel is a deep-fried ball or patty made from ground chickpeas or fava beans, originating from the Middle East.',
    checklist: ['Crispy on the outside, fluffy on the inside falafel', 'Served in a warm pita bread', 'Complemented by hummus, tahini sauce, and fresh salad'],
    pairings: [{ type: 'Condiment', suggestion: 'Add a dash of hot sauce for an extra kick.', icon: '🌶️' }],
    eatLikeLocal: [{ "icon": "🌯", "title": "The Perfect Bite", "description": "Ensure each bite has a bit of falafel, salad, and sauce for the full experience." }]
  },
  {
    id: 49, name: 'Hummus with Pita', imageUrl: '/images/Hummus with Pita.webp', tags: ['mediterranean', 'vegetarian', 'vegan'], mood: ['light'],
    description: 'Hummus is an ancient Middle Eastern dip with recipes dating back to 13th-century Cairo, made by blending chickpeas with tahini (sesame paste), lemon juice, garlic, and olive oil into a silky-smooth puree. Served with warm pita bread for dipping and typically garnished with a pool of olive oil, paprika, and whole chickpeas, hummus has become a global appetizer sensation.',
    qaTitle: 'How old is the hummus recipe?',
    funFact: 'The earliest known recipes for a dish resembling hummus are from 13th-century cookbooks in Cairo, Egypt.',
    checklist: ['Ultra-smooth and creamy texture', 'A pool of good quality olive oil in the center', 'Served with warm, soft pita bread'],
    pairings: [{ type: 'Topping', suggestion: 'Garnish with paprika, chickpeas, or fresh parsley.', icon: '🌿' }],
    eatLikeLocal: [{ "icon": "🥣", "title": "The 'Swoosh' ", "description": "Use the pita bread to make a swoosh through the hummus, scooping it up." }]
  },
  {
    id: 50, name: 'Chicken Shawarma', imageUrl: '/images/Chicken Shawarma.webp', tags: ['mediterranean'], mood: ['late-night'],
    description: 'Chicken Shawarma is a Middle Eastern street food favorite featuring marinated chicken stacked on a vertical rotisserie and slow-roasted until tender and caramelized on the edges. The thinly shaved meat is served wrapped in warm flatbread with garlic sauce (toum), pickled vegetables, and fresh herbs. This cooking technique, shared with Greek gyros and Mexican al pastor, creates incredibly juicy, flavorful meat.',
    qaTitle: 'How is shawarma related to gyros and al pastor?',
    funFact: 'Shawarma is a method of cooking meat on a vertical rotisserie, similar to tacos al pastor and the Greek gyro.',
    checklist: ['Tender, juicy, and flavorful meat carved from a vertical spit', 'Wrapped in a warm flatbread', 'Served with garlic sauce (toum) and pickles'],
    pairings: [{ type: 'Experience', suggestion: 'The garlic sauce is a non-negotiable, essential part of the experience!', icon: '🧄' }],
    eatLikeLocal: [{ "icon": "🌯", "title": "Eat it Fresh", "description": "Best enjoyed hot and fresh, right after it's been carved from the spit." }]
  },

  // Vietnamese
  {
    id: 51, name: 'Beef Pho', imageUrl: '/images/Beef Pho.webp', tags: ['vietnamese', 'gluten-free'], mood: ['comfort', 'trendy'],
    description: 'Beef Pho (Phở Bò) is Vietnam\'s iconic noodle soup, featuring a deeply aromatic broth that has been simmered for hours with charred onions, ginger, and warming spices like star anise, cinnamon, and cloves. Served with flat rice noodles and thin slices of beef that cook in the steaming broth, this dish is accompanied by a generous plate of fresh herbs including Thai basil, mint, and bean sprouts that diners add to customize their bowl.',
    qaTitle: 'What spices give Pho its distinctive aroma?',
    funFact: 'Pho is considered Vietnam\'s national dish, and its origins are debated but likely date to the early 20th century.',
    checklist: ['A clear, deeply aromatic broth (not cloudy)', 'A generous plate of fresh herbs like basil, mint, and cilantro on the side', 'Tender slices of beef and soft rice noodles'],
    pairings: [{ type: 'Condiment', suggestion: 'Customize your bowl with hoisin sauce and sriracha.', icon: '🌶️' }, { type: 'Drink Pairing', suggestion: 'Vietnamese iced coffee provides a perfect contrast.', icon: '☕' }],
    eatLikeLocal: [{ "icon": "🍜", "title": "Slurp Your Noodles", "description": "Don't be shy! In Vietnam, slurping is a sign that you're enjoying your meal and it also helps to cool down the hot noodles." }]
  },
  {
    id: 52, name: 'Banh Mi', imageUrl: '/images/Banh Mi.webp', tags: ['vietnamese'], mood: ['trendy', 'light'],
    description: 'Banh Mi is a delicious example of French-Vietnamese fusion cuisine, featuring a light, airy baguette (introduced during French colonial rule) stuffed with Vietnamese-style fillings including pâté, cold cuts or grilled meat, pickled daikon and carrots, fresh cilantro, jalapeños, and mayonnaise. This portable street food perfectly balances savory, sweet, tangy, and fresh flavors in every bite.',
    qaTitle: 'How did the French influence Vietnamese banh mi?',
    funFact: 'Banh Mi is a perfect example of French-Vietnamese fusion, combining a French baguette with Vietnamese ingredients.',
    checklist: ['A crispy, airy baguette that doesn\'t cut your mouth', 'A balanced mix of savory meat, pickled vegetables, and fresh cilantro', 'A rich paté spread and a swipe of mayonnaise'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'Pairs well with a cold beer or a sweet iced tea.', icon: '🍺' }],
    eatLikeLocal: [{ "icon": "🥖", "title": "Embrace the Mess", "description": "A good banh mi is often flaky and full of ingredients. Don't be afraid to make a little mess." }]
  },
  {
    id: 53, name: 'Vietnamese Rice Paper Rolls', imageUrl: '/images/Vietnamese Rice Paper Rolls.webp', tags: ['vietnamese', 'gluten-free', 'vegetarian'], mood: ['spicy', 'light', 'trendy'],
    description: 'Vietnamese Rice Paper Rolls (Gỏi Cuốn), also known as summer rolls, are fresh, healthy appetizers wrapped in translucent rice paper. Unlike fried spring rolls, these are served fresh and cold, filled with rice vermicelli, shrimp or pork, lettuce, mint, and other herbs. Dipped in rich peanut sauce or nuoc cham (fish sauce dipping), they offer a light, refreshing taste of Vietnamese cuisine.',
    qaTitle: 'What is the difference between summer rolls and spring rolls?',
    funFact: 'Also known as summer rolls, they are a fresh and healthy alternative to fried spring rolls.',
    checklist: ['Fresh, crisp ingredients like lettuce, mint, and vermicelli noodles', 'Translucent rice paper that is soft but not gummy', 'Served with a rich peanut or nuoc cham dipping sauce'],
    pairings: [{ type: 'Experience', suggestion: 'The dipping sauce is half the experience, so be generous!', icon: '🥜' }],
    eatLikeLocal: [{ "icon": "🥜", "title": "It's All in the Dip", "description": "The peanut dipping sauce is just as important as the roll itself. Be generous!" }]
  },
  {
    id: 54, name: 'Bun Cha', imageUrl: '/images/Bun Cha.webp', tags: ['vietnamese'], mood: ['light', 'trendy'],
    description: 'Bun Cha is a Hanoi specialty that gained international fame when President Obama and Anthony Bourdain shared a meal at a local restaurant. This refreshing dish features grilled fatty pork patties and caramelized pork belly served in a bowl of warm, sweet-and-sour dipping broth, accompanied by rice vermicelli noodles, fresh herbs, and pickled vegetables for an interactive dining experience.',
    qaTitle: 'Why did Bun Cha become famous internationally?',
    funFact: 'This Hanoi specialty gained international fame after former U.S. President Barack Obama enjoyed it with chef Anthony Bourdain.',
    checklist: ['Grilled pork patties and pork belly in a sweet and savory broth', 'A basket of fresh herbs and lettuce', 'Served with rice vermicelli noodles for dipping'],
    pairings: [{ type: 'Experience', suggestion: 'Dip a bit of the noodles, meat, and herbs into the broth for the perfect bite.', icon: '🍜' }],
    eatLikeLocal: [{ "icon": "🍜", "title": "Dip, Don't Pour", "description": "Dip the rice noodles and herbs into the bowl with the grilled pork and dipping sauce for each bite." }]
  },

  // French
  {
    id: 55, name: 'Steak Frites', imageUrl: '/images/Steak Frites.webp', tags: ['french'], mood: ['comfort'],
    description: 'Steak Frites is the quintessential French bistro dish, simply consisting of "steak and fries" but executed with French precision. A perfectly seared steak (typically entrecôte or bavette) is served with a luscious pan sauce made from the meat juices, butter, and often shallots, alongside golden, crispy hand-cut frites. This unpretentious yet satisfying meal embodies French culinary philosophy.',
    qaTitle: 'What cut of beef is used in authentic steak frites?',
    funFact: 'This classic bistro dish, meaning "steak and fries," is popular throughout France and Belgium.',
    checklist: ['Steak cooked perfectly to your preferred doneness', 'A flavorful pan sauce or butter', 'Hot, crispy french fries'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A classic match with a bold red wine, like a Cabernet Sauvignon.', icon: '🍷' }],
    eatLikeLocal: [{ "icon": "🍟", "title": "Fries in the Sauce", "description": "Use the crispy fries to mop up the delicious steak sauce or juices." }]
  },
  {
    id: 56, name: 'Croque Monsieur', imageUrl: '/images/Croque Monsieur.webp', tags: ['french'], mood: ['comfort'],
    description: 'Croque Monsieur is France\'s elevated take on a ham and cheese sandwich, featuring thick slices of ham and nutty Gruyère cheese between crustless bread, topped with creamy béchamel sauce and baked until golden and bubbly. Add a fried egg on top and it transforms into a "Croque Madame." First appearing on Parisian café menus in 1910, it remains a beloved French comfort food.',
    qaTitle: 'What is the difference between a Croque Monsieur and Croque Madame?',
    funFact: 'A Croque Monsieur is a grilled ham and cheese sandwich. Add a fried egg on top, and it becomes a "Croque Madame"!',
    checklist: ['Good quality ham and nutty Gruyère cheese', 'A creamy béchamel sauce', 'Grilled until golden and bubbly'],
    pairings: [{ type: 'Upgrade', suggestion: 'Order a "Croque Madame" to get a fried egg on top.', icon: '🍳' }],
    eatLikeLocal: [{ "icon": "🍴", "title": "Fork and Knife", "description": "With its melted cheese topping, this is a sandwich that's best eaten with a fork and knife." }]
  },
  {
    id: 57, name: 'French Onion Soup', imageUrl: '/images/French Onion Soup.webp', tags: ['french'], mood: ['comfort'],
    description: 'French Onion Soup (Soupe à l\'oignon) is a hearty, soul-warming soup featuring slowly caramelized onions simmered in rich beef broth, topped with a thick slice of crusty bread and a generous blanket of melted Gruyère cheese that forms an irresistible golden crust. While onion soups date back to Roman times, this beloved version with its cheesy topping originated in 19th-century Paris.',
    qaTitle: 'How long does it take to caramelize onions for French onion soup?',
    funFact: 'The modern version of this soup, with its cheesy crouton topping, originated in Paris in the 19th century.',
    checklist: ['A rich, deeply caramelized onion and beef broth', 'A thick, toasted slice of bread on top', 'A generous layer of gooey, melted Gruyère cheese'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A glass of dry white wine like Sauvignon Blanc.', icon: '🍷' }, { type: 'Accompaniment', suggestion: 'Serve with an extra side of crusty baguette for dipping.', icon: '🥖' }],
    eatLikeLocal: [{ "icon": "🥣", "title": "The Perfect Scoop", "description": "Try to get a bit of the cheesy bread, onions, and broth all in one spoonful." }]
  },
  {
    id: 58, name: 'Crepes', imageUrl: '/images/Crepes.webp', tags: ['french', 'vegetarian'], mood: ['light'],
    description: 'Crepes are thin, delicate French pancakes originating from Brittany in northwest France, made from a simple batter of flour, eggs, milk, and butter. These versatile treats can be served sweet (with Nutella, fresh fruits, and whipped cream) or savory as "galettes" (with ham, cheese, and eggs). The key is achieving a lacy, tender texture that folds without breaking.',
    qaTitle: 'What is the difference between a crepe and a galette?',
    funFact: 'Crepes originated in Brittany, a region in the northwest of France.',
    checklist: ['A thin, delicate crepe that is soft and slightly chewy', 'Whether sweet or savory, the filling should be fresh and well-balanced', 'Evenly cooked without any burnt spots'],
    pairings: [{ type: 'Sweet Pairing', suggestion: 'Classic sweet fillings include Nutella, banana, and strawberries.', icon: '🍓' }, { type: 'Savory Pairing', suggestion: 'Try a savory crepe with ham, cheese, and a fried egg.', icon: '🍳' }],
    eatLikeLocal: [{ "icon": "🥞", "title": "Roll or Fold", "description": "Whether folded into a triangle or rolled up, enjoy the layers of crepe and filling." }]
  },

  // British
  {
    id: 59, name: 'Fish and Chips', imageUrl: '/images/Fish and Chips.webp', tags: ['british'], mood: ['comfort', 'late-night'],
    description: 'Fish and Chips is Britain\'s most iconic comfort food, featuring a large fillet of flaky white fish (traditionally cod or haddock) coated in a light, crispy beer batter and served alongside thick-cut potato chips. This working-class staple became a crucial food source during both World Wars as one of the few foods not subject to rationing, and remains a beloved takeaway dish best enjoyed wrapped in paper with generous splashes of malt vinegar and sea salt.',
    qaTitle: 'Why weren\'t Fish and Chips rationed during World War II?',
    funFact: 'Fish and chips were a crucial food source in the UK during both World Wars, as they were one of the few foods not subject to rationing.',
    checklist: ['A large piece of flaky white fish', 'A light and crispy batter', 'Thick-cut, fluffy chips (fries)'],
    pairings: [{ type: 'Condiment', suggestion: 'It is traditionally served with a sprinkle of salt and malt vinegar.', icon: '🧂' }],
    eatLikeLocal: [{ "icon": "🇬🇧", "title": "Vinegar is Key", "description": "In the UK, it's traditional to sprinkle malt vinegar over both the fish and chips." }]
  },
  {
    id: 60, name: 'Bangers and Mash', imageUrl: '/images/Bangers and Mash.webp', tags: ['british'], mood: ['comfort'],
    description: 'Bangers and Mash is a beloved British comfort food featuring plump pork sausages ("bangers") served atop creamy mashed potatoes and smothered in rich onion gravy. The nickname "bangers" originated during World War I when sausages had high water content and would burst with a bang when fried. This hearty pub staple is often accompanied by mushy peas.',
    qaTitle: 'Why are British sausages called bangers?',
    funFact: 'The term "bangers" for sausages originated during WWI, when sausages had a high water content and would often burst with a bang when fried.',
    checklist: ['Good quality, flavorful pork sausages', 'Creamy, buttery mashed potatoes', 'A rich onion gravy'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Often served with a side of green peas.', icon: '🟢' }],
    eatLikeLocal: [{ "icon": " 👨‍🍳 ", "title": "The Holy Trinity", "description": "The perfect bite includes a piece of sausage, some mashed potato, and a bit of onion gravy." }]
  },
  {
    id: 61, name: 'Shepherd\'s Pie', imageUrl: '/images/Shepherds Pie.webp', tags: ['british'], mood: ['comfort'],
    description: 'Shepherd\'s Pie is a classic British casserole featuring seasoned minced lamb cooked with vegetables and gravy, topped with a layer of creamy mashed potato baked until golden brown. True to its name (a shepherd herds sheep), authentic Shepherd\'s Pie uses lamb - if made with beef, it\'s technically a "Cottage Pie." This distinction is a matter of British culinary pride.',
    qaTitle: 'What is the difference between Shepherd\'s Pie and Cottage Pie?',
    funFact: 'Traditionally, a Shepherd\'s Pie is made with lamb (shepherd herds sheep), while a "Cottage Pie" is made with beef.',
    checklist: ['A rich filling of minced lamb (not beef!)', 'A creamy mashed potato topping', 'Baked until the top is golden brown and crispy'],
    pairings: [{ type: 'Condiment', suggestion: 'A dash of Worcestershire sauce adds depth to the filling.', icon: ' Worcestershire ' }],
    eatLikeLocal: [{ "icon": "🥔", "title": "Crispy Top", "description": "The best part is often the crispy, golden-brown mashed potato topping." }]
  },

  // Australian
  {
    id: 62, name: 'Chicken Parmigiana', imageUrl: '/images/Chicken Parmigiana.webp', tags: ['australian'], mood: ['comfort'],
    description: 'Chicken Parmigiana (affectionately called "parmi" in Melbourne or "parma" in Sydney) is Australia\'s unofficial national dish - a crispy breaded chicken schnitzel topped with Napoli sauce and melted cheese, served with chips and salad. While inspired by Italian eggplant parmigiana, this pub staple has become a fiercely debated topic of Australian culinary pride.',
    qaTitle: 'Do Australians call it parmi or parma?',
    funFact: 'Affectionately known as a "Parmi" or "Parma," this pub classic is an Australian take on the Italian Eggplant Parmigiana.',
    checklist: ['A large, crispy chicken schnitzel', 'Rich Napoli sauce and fully melted cheese', 'Served with a generous portion of chips and salad'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'Best enjoyed with a pot of cold beer at the pub.', icon: '🍺' }],
    eatLikeLocal: [{ "icon": "🍺", "title": "The Pub Way", "description": "An Aussie 'parmi' is a classic pub meal, best enjoyed with a cold beer." }]
  },
  {
    id: 63, name: 'Aussie Meat Pie', imageUrl: '/images/Aussie Meat Pie.webp', tags: ['australian'],
    description: 'The Aussie Meat Pie is Australia\'s iconic hand-held comfort food, featuring a flaky pastry crust filled with rich minced beef and gravy. A staple at sporting events, bakeries, and servo (gas station) stops across the country, it\'s traditionally topped with tomato sauce. Adelaide even has a unique variation called the "pie floater" - a meat pie served in a bowl of pea soup.',
    qaTitle: 'What is a pie floater in Australian cuisine?',
    checklist: ['A flaky pastry crust on top and a sturdy pastry base', 'A rich, savory minced meat and gravy filling', 'Best served with a generous dollop of tomato sauce (ketchup)'],
    pairings: [{ type: 'Experience', suggestion: 'The "pie floater" is an Adelaide tradition, where the pie is served in a bowl of pea soup.', icon: '🥣' }],
    funFact: 'The meat pie is considered an iconic national dish in Australia, often eaten at sporting events.',
    eatLikeLocal: [{ "icon": "🥧", "title": "Top Off or On?", "description": "Locals have a long-standing debate: do you eat it whole, or take the top off and use it to scoop out the filling?" }]
  },
  {
    id: 64, name: 'Smashed Avocado on Toast', imageUrl: '/images/Smashed Avocado on Toast.webp', tags: ['australian', 'vegetarian'], mood: ['light', 'trendy'],
    description: 'Smashed Avocado on Toast became a global phenomenon through Australian café culture in the 2010s. This simple yet satisfying dish features chunky, seasoned avocado spread on high-quality sourdough toast, typically topped with feta, poached eggs, cherry tomatoes, or dukkah. Best paired with a flat white coffee, it\'s become synonymous with trendy brunch culture.',
    qaTitle: 'Why is smashed avo so popular in Australia?',
    funFact: 'While not invented in Australia, this dish became a cultural phenomenon and a symbol of Australian café culture in the 2010s.',
    checklist: ['Fresh, ripe avocado, chunky not pureed', 'High-quality, sturdy sourdough toast', 'Well-seasoned with salt, pepper, and a squeeze of lemon or lime'],
    pairings: [{ type: 'Topping', suggestion: 'Top with feta cheese, a poached egg, or cherry tomatoes.', icon: '🍳' }, { type: 'Drink Pairing', suggestion: 'The quintessential partner is a flat white coffee.', icon: '☕' }],
    eatLikeLocal: [{ "icon": "🥑", "title": "It's a Knife-and-Fork Job", "description": "With all the toppings, this is rarely a hand-held toast." }]
  },
  {
    id: 65, name: 'Grilled Barramundi', imageUrl: '/images/Grilled Barramundi.webp', tags: ['australian', 'gluten-free'], mood: ['light'],
    description: 'Grilled Barramundi showcases Australia\'s native "large-scaled river fish" (as its Aboriginal name translates). This mild, sweet white fish with buttery flakes is best prepared simply - grilled with just salt, pepper, and lemon to let its natural flavor shine. Sustainable and versatile, barramundi has become a symbol of Australian coastal cuisine.',
    qaTitle: 'What does barramundi mean in Aboriginal language?',
    funFact: '"Barramundi" is an Aboriginal word meaning "large-scaled river fish."',
    checklist: ['Moist, flaky white fish', 'Crispy skin', 'A simple seasoning of salt, pepper, and lemon'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'Pairs beautifully with a crisp Australian Sauvignon Blanc.', icon: '🍷' }],
    eatLikeLocal: [{ "icon": "🍋", "title": "A Squeeze of Lemon", "description": "A fresh squeeze of lemon or lime is all that's needed to enhance the flavor of the fish." }]
  },
  {
    id: 66, name: 'Sausage Sizzle', imageUrl: '/images/Sausage Sizzle.webp', tags: ['australian'], mood: ['comfort'],
    description: 'The Sausage Sizzle is uniquely Australian - a simple grilled snag (sausage) served on a single slice of white bread with caramelized onions and your choice of tomato sauce, BBQ sauce, or mustard. Found at community fundraisers, school events, and famously outside Bunnings hardware stores on weekends, it\'s become a cultural institution of Australian life.',
    qaTitle: 'Why are sausage sizzles held at Bunnings?',
    funFact: 'A staple of community events and fundraisers in Australia, a "sausage sizzle" is a grilled sausage served on a single slice of white bread.',
    checklist: ['A simple sausage on a single slice of white bread', 'Topped with grilled onions', 'Your choice of tomato sauce, BBQ sauce, or mustard'],
    pairings: [{ type: 'Occasion', suggestion: 'A staple of Australian community events, sports games, and hardware store weekends.', icon: '🇦🇺' }],
    eatLikeLocal: [{ "icon": "🌭", "title": "The Aussie Way", "description": "It's simple: sausage on a single slice of bread, with grilled onions on top and your choice of sauce." }]
  },
  {
    id: 67, name: 'Lamb Roast', imageUrl: '/images/Lamb Roast.webp', tags: ['australian', 'gluten-free'], mood: ['comfort', 'light'],
    description: 'The Sunday Lamb Roast is a cherished Australian tradition inherited from British culinary customs. Featuring a leg or shoulder of lamb seasoned with rosemary, garlic, and herbs, slow-roasted until tender and served with crispy roast potatoes, vegetables, and rich gravy. Mint sauce or jelly is the essential accompaniment to this beloved family meal.',
    qaTitle: 'Why is lamb roast a Sunday tradition in Australia?',
    funFact: 'A Sunday lamb roast is a cherished tradition in Australia, inherited from British culinary customs.',
    checklist: ['Tender, roasted lamb, often with rosemary and garlic', 'Served with roasted potatoes and other vegetables', 'A rich gravy made from the pan drippings'],
    pairings: [{ type: 'Condiment', suggestion: 'Mint sauce or mint jelly is the traditional accompaniment.', icon: '🌿' }],
    eatLikeLocal: [{ "icon": "🐑", "title": "Mint Sauce is a Must", "description": "In Australia, a traditional lamb roast is almost always served with a sweet and tangy mint sauce." }]
  },
  {
    id: 68, name: 'Pavlova', imageUrl: '/images/Pavlova.webp', tags: ['australian', 'vegetarian', 'gluten-free'], mood: ['light'],
    description: 'Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova, featuring a crisp outer shell and soft, marshmallowy interior, topped with whipped cream and fresh fruits like passionfruit, strawberries, and kiwi. Both Australia and New Zealand fiercely claim to have invented it, making it a source of friendly trans-Tasman rivalry.',
    qaTitle: 'Which country invented pavlova - Australia or New Zealand?',
    funFact: 'Both Australia and New Zealand claim to have invented this meringue dessert, named after the Russian ballerina Anna Pavlova.',
    checklist: ['A crisp meringue shell', 'A soft, marshmallowy inside', 'Topped with fresh whipped cream and tart fruits like passionfruit and kiwi'],
    pairings: [{ type: 'Accompaniment', suggestion: 'The tartness of the fruit is key to balancing the sweetness.', icon: '🥝' }, { type: 'Occasion', suggestion: 'A classic dessert for Christmas and summer gatherings.', icon: '☀️' }],
    eatLikeLocal: [{ "icon": "🍓", "title": "Crisp and Soft", "description": "The perfect pavlova has a crisp meringue shell on the outside and a soft, marshmallowy center." }]
  },
  {
    id: 100, name: 'Halal Snack Pack', imageUrl: '/images/Halal Snack Pack.webp', tags: ['australian'], mood: ['comfort'],
    description: 'The Halal Snack Pack (HSP) is a beloved Australian late-night creation featuring halal-certified doner kebab meat (usually lamb, chicken, or mixed) piled on top of hot chips and smothered in the "holy trinity" of sauces: garlic, chili, and BBQ. Born from Australian kebab shops, this indulgent dish has developed a cult following and dedicated Facebook review groups.',
    qaTitle: 'What are the three classic sauces on a HSP?',
    funFact: 'The HSP, originating in Australia, consists of halal-certified doner kebab meat served over hot chips and covered in sauces.',
    checklist: ['A bed of hot chips', 'Generous shavings of halal doner kebab meat (lamb, chicken, or mixed)', 'The "holy trinity" of sauces: garlic, chili, and BBQ'],
    pairings: [{ type: 'Experience', suggestion: 'Best enjoyed as a hearty, late-night meal.', icon: '🌙' }],
    eatLikeLocal: [{ "icon": "🌶️", "title": "The 'Holy Trinity' of Sauces", "description": "An authentic HSP experience involves a combination of garlic, chili, and BBQ sauce." }]
  },

  // Greek
  {
    id: 69, name: 'Gyro Wrap', imageUrl: '/images/Gyro Wrap.webp', tags: ['greek'], mood: ['light'],
    description: 'Gyro is Greece\'s beloved street food featuring seasoned meat (traditionally pork or chicken) slow-roasted on a vertical rotisserie, shaved and served in warm pita bread with fresh tomato, onion, and creamy tzatziki sauce. The name comes from the Greek word for "circle" or "turn," referring to the rotating spit - a cooking method shared with Turkish döner and Middle Eastern shawarma.',
    qaTitle: 'What does gyro mean in Greek?',
    funFact: 'The name "gyro" comes from the Greek word for "circle" or "turn," referring to the vertical rotisserie it\'s cooked on.',
    checklist: ['Tender meat carved from a vertical rotisserie', 'Served in a warm, fluffy pita bread', 'Topped with tomato, onion, and a creamy tzatziki sauce'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Often served with a side of french fries.', icon: '🍟' }],
    eatLikeLocal: [{ "icon": "🌯", "title": "Don\'t Skimp on Tzatziki", "description": "The cool, creamy tzatziki sauce is essential for balancing the savory meat." }]
  },
  {
    id: 70, name: 'Moussaka', imageUrl: '/images/Moussaka.webp', tags: ['greek'], mood: ['comfort'],
    description: 'Moussaka is Greece\'s iconic layered casserole, similar to lasagna but made with layers of sliced eggplant (or potato) instead of pasta, rich spiced lamb mince, and topped with a thick béchamel sauce baked until golden. This hearty dish exemplifies Greek home cooking at its finest, often prepared for family gatherings and celebrations.',
    qaTitle: 'How is moussaka different from lasagna?',
    funFact: 'Moussaka is a layered dish, similar to lasagna, but uses eggplant or potato instead of pasta sheets.',
    checklist: ['Layers of sliced eggplant or potato', 'A rich, spiced minced meat filling', 'Topped with a thick, creamy béchamel sauce and baked'],
    pairings: [{ type: 'Side Pairing', suggestion: 'A simple green salad with a lemon vinaigrette is a perfect complement.', icon: '🥗' }],
    eatLikeLocal: [{ "icon": " 👨‍🍳 ", "title": "Let it Settle", "description": "Like lasagna, moussaka is best if it's allowed to rest for a bit after cooking so the layers can set." }]
  },
  {
    id: 71, name: 'Greek Salad', imageUrl: '/images/Greek Salad.webp', tags: ['greek', 'vegetarian', 'gluten-free'], mood: ['light'],
    description: 'Greek Salad (Horiatiki or "village salad") is a refreshing, authentic Greek dish featuring chunky tomatoes, cucumber, red onion, Kalamata olives, and a generous slab of feta cheese, dressed simply with extra virgin olive oil and dried oregano. Importantly, an authentic Greek salad never contains lettuce - this is a firm rule of Greek culinary tradition.',
    qaTitle: 'Does a traditional Greek salad contain lettuce?',
    funFact: 'An authentic Greek salad (Horiatiki) does not contain lettuce. It\'s made with tomatoes, cucumber, onion, feta, and olives.',
    checklist: ['A base of tomatoes, cucumber, and onion', 'A large slab of feta cheese on top', 'Dressed simply with good quality olive oil and dried oregano'],
    pairings: [{ type: 'Note', suggestion: 'An authentic Greek salad does not contain lettuce!', icon: '🤬' }],
    eatLikeLocal: [{ "icon": "🥗", "title": "No Lettuce!", "description": "A traditional Greek village salad (horiatiki) doesn't contain lettuce." }]
  },
  {
    id: 72, name: 'Souvlaki Skewers', imageUrl: '/images/Souvlaki Skewers.webp', tags: ['greek', 'gluten-free'], mood: ['light', 'late-night'],
    description: 'Souvlaki means "skewer" in Greek, and this beloved street food features small cubes of marinated pork, chicken, or lamb grilled on skewers to charred perfection. Served with warm pita, tzatziki, and always finished with a squeeze of fresh lemon and a sprinkle of dried oregano - the quintessential flavors of Greek cuisine.',
    qaTitle: 'What does souvlaki mean in Greek?',
    funFact: '"Souvlaki" simply means "skewer" in Greek. It refers to small pieces of meat grilled on a skewer.',
    checklist: ['Cubes of marinated meat (pork or chicken) grilled on a skewer', 'Tender and juicy with a slight char', 'Often served with pita bread and tzatziki'],
    pairings: [{ type: 'Condiment', suggestion: 'A squeeze of fresh lemon juice over the grilled meat is essential.', icon: '🍋' }],
    eatLikeLocal: [{ "icon": "🍋", "title": "Lemon and Oregano", "description": "A generous squeeze of lemon and a sprinkle of dried oregano are the classic finishing touches." }]
  },
  {
    id: 73, name: 'Spanakopita', imageUrl: '/images/Spanakopita.webp', tags: ['greek', 'vegetarian'], mood: ['comfort'],
    description: 'Spanakopita is a savory Greek pie featuring layers of crispy, paper-thin filo pastry wrapped around a filling of spinach, feta cheese, onions, and fresh dill. Brushed with olive oil or butter and baked until golden and flaky, this versatile dish can be served as an appetizer, snack, or main course and is a staple of Greek baking tradition.',
    qaTitle: 'What are the main ingredients in spanakopita?',
    funFact: 'Spanakopita is a savory spinach and feta pie made with layers of crispy filo pastry.',
    checklist: ['Layers of flaky, buttery filo pastry', 'A savory filling of spinach and feta cheese', 'Baked until golden brown and crispy'],
    pairings: [{ type: 'Occasion', suggestion: 'Can be served as an appetizer, a light lunch, or a main course.', icon: '😋' }],
    eatLikeLocal: [{ "icon": "🥧", "title": "Eat it Warm", "description": "Best enjoyed warm from the oven to appreciate the crispy filo pastry." }]
  },

  // Korean
  {
    id: 74, name: 'Korean BBQ', imageUrl: '/images/Korean BBQ.webp', tags: ['korean'], mood: ['comfort', 'trendy'],
    description: 'Korean BBQ is an interactive dining experience where diners grill marinated meats (such as bulgogi, samgyeopsal, or galbi) at their table on a built-in grill. The grilled meat is wrapped in lettuce leaves (ssam) with garlic, ssamjang (spicy dipping paste), and various banchan (side dishes). This social, hands-on meal is central to Korean food culture.',
    qaTitle: 'What is ssam in Korean BBQ?',
    funFact: 'A key feature of Korean BBQ is that diners often cook the meat themselves at a grill built into the table.',
    checklist: ['High-quality cuts of meat, often marinated', 'A grill built into the table for self-cooking', 'A wide array of side dishes (banchan)'],
    pairings: [{ type: 'Experience', suggestion: 'Wrap the cooked meat in a lettuce leaf with some sauce (ssamjang) and a slice of garlic.', icon: '🤬' }],
    eatLikeLocal: [{ "icon": "🤬", "title": "Use the Lettuce Wraps (Ssam)", "description": "Place a piece of grilled meat on a lettuce leaf, add a dab of ssamjang (dipping sauce), some garlic or kimchi, and eat it all in one perfect bite." }]
  },
  {
    id: 75, name: 'Bibimbap', imageUrl: '/images/Bibimbap.webp', tags: ['korean', 'vegetarian'], mood: ['comfort', 'trendy'],
    description: 'Bibimbap (literally "mixed rice") is a colorful Korean rice bowl topped with an array of seasoned vegetables (namul), a fried egg, and your choice of protein, all arranged artfully around the bowl. The dish is served with gochujang (spicy red pepper paste) and is meant to be thoroughly mixed before eating. The dolsot (hot stone bowl) version creates a prized crispy rice layer on the bottom.',
    qaTitle: 'What does bibimbap mean in Korean?',
    funFact: 'The word "bibimbap" literally means "mixed rice" in Korean.',
    checklist: ['A colorful array of fresh and seasoned vegetables (namul)', 'A sizzling hot stone bowl (for dolsot bibimbap)', 'Gochujang (chili paste) served on the side to adjust spice level'],
    pairings: [{ type: 'Topping', suggestion: 'A sunny-side-up egg on top is a must!', icon: '🍳' }],
    eatLikeLocal: [{ "icon": "🍚", "title": "Mix Thoroughly", "description": "The name means 'mixed rice.' Be sure to mix everything together with the gochujang before you start eating." }]
  },
  {
    id: 76, name: 'Kimchi Fried Rice', imageUrl: '/images/Kimchi Fried Rice.webp', tags: ['korean'], mood: ['comfort', 'trendy'],
    description: 'Kimchi Fried Rice (Kimchi Bokkeumbap) is a beloved Korean comfort food that transforms leftover rice and well-fermented, slightly sour kimchi into a flavorful, satisfying dish. Stir-fried with sesame oil, sometimes pork or spam, and always topped with a sunny-side-up fried egg with a runny yolk, this dish exemplifies Korean home cooking and the philosophy of wasting nothing.',
    qaTitle: 'Why is older kimchi better for fried rice?',
    funFact: 'This dish is a popular way to use up leftover rice and older, more sour kimchi.',
    checklist: ['A distinct tangy flavor from well-fermented kimchi', 'A perfect balance of spicy, savory, and slightly sour', 'Often topped with a sunny-side-up fried egg'],
    pairings: [{ type: 'Topping', suggestion: 'Sprinkle with roasted seaweed (gim) and sesame seeds.', icon: '✨' }, { type: 'Side Dish', suggestion: 'A simple clear soup, like egg drop soup, is a great companion.', icon: '🥣' }],
    eatLikeLocal: [{ "icon": "🍳", "title": "Break the Yolk", "description": "Break the runny yolk of the fried egg and mix it into the rice for a creamy texture." }]
  },
  {
    id: 77, name: 'Korean Fried Chicken', imageUrl: '/images/Korean Fried Chicken.webp', tags: ['korean'], mood: ['comfort', 'trendy'],
    description: 'Korean Fried Chicken (KFC) has taken the world by storm with its ultra-crispy, shatteringly crunchy exterior achieved through double-frying. The chicken is typically glazed with sweet, spicy, or soy-garlic sauces and served with pickled radish (chicken-mu) to cut through the richness. This dish is central to Korean "chimaek" culture - enjoying fried chicken with beer.',
    qaTitle: 'Why is Korean fried chicken so crispy?',
    funFact: 'The secret to its signature extra-crispy skin is that the chicken is double-fried.',
    checklist: ['An ultra-crispy, double-fried crust', 'A glaze that is perfectly sweet, spicy, or savory', 'Served with pickled radish to cut the richness'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'The ultimate "chimaek" (chicken and beer) experience with a light Korean lager.', icon: '🍻' }],
    eatLikeLocal: [{ "icon": "🍺", "title": "Chimaek Culture", "description": "Enjoy it the Korean way with a cold beer (Maekju). This combination is called 'Chimaek'." }]
  },
  {
    id: 78, name: 'Japchae', imageUrl: '/images/Japchae.webp', tags: ['korean', 'vegetarian', 'vegan', 'gluten-free'], mood: ['light', 'trendy'],
    description: 'Japchae is a beloved Korean stir-fried noodle dish featuring "dangmyeon" (sweet potato glass noodles) that have a uniquely chewy, springy texture. Tossed with colorful vegetables, sesame oil, and a savory-sweet soy sauce, this dish is a staple at Korean holidays and celebrations, often served as a main dish or as one of many banchan (side dishes).',
    qaTitle: 'What are Japchae noodles made from?',
    funFact: 'The noodles used in Japchae, "dangmyeon," are made from sweet potato starch, giving them their unique chewy texture.',
    checklist: ['Chewy and springy glass noodles', 'A colorful variety of fresh, crisp vegetables', 'A savory and slightly sweet soy-sesame sauce'],
    pairings: [{ type: 'Occasion', suggestion: 'A staple dish for Korean holidays and celebrations.', icon: '🎉' }, { type: 'Side Dish', suggestion: 'Enjoyed as a main or as a side dish (banchan) in a larger meal.', icon: '🇰🇷' }],
    eatLikeLocal: [{ "icon": "🍜", "title": "Enjoy it Warm or Cold", "description": "Japchae is delicious served warm as a main dish, or cold as a side dish (banchan)." }]
  },

  // Spanish
  {
    id: 79, name: 'Seafood Paella', imageUrl: '/images/Seafood Paella.webp', tags: ['spanish', 'gluten-free'], mood: ['light'],
    description: 'Seafood Paella is Spain\'s most celebrated rice dish, originating from Valencia where it is cooked in a wide, shallow pan over an open flame. Featuring saffron-infused short-grain rice, an assortment of fresh seafood including prawns, mussels, and clams, this communal dish is defined by its "socarrat" - the caramelized, crispy layer of rice at the bottom of the pan that is considered the most prized and delicious part.',
    qaTitle: 'What is Socarrat in Paella and why is it prized?',
    funFact: 'The "socarrat," the crispy, toasted layer of rice at the bottom of the pan, is considered the most prized part of a good paella.',
    checklist: ['A wide, shallow paella pan', 'Saffron-infused rice', 'The "socarrat" - a crispy, toasted layer of rice at the bottom'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A crisp Spanish white wine like Albariño.', icon: '🍷' }],
    eatLikeLocal: [{ "icon": "🥘", "title": "Don't Stir!", "description": "Once the rice is added, it shouldn't be stirred. This allows the prized crispy bottom layer (socarrat) to form." }]
  },
  {
    id: 80, name: 'Patatas Bravas', imageUrl: '/images/patatas bravas.webp', tags: ['spanish', 'vegetarian'], mood: ['comfort', 'late-night'],
    description: 'Patatas Bravas is Spain\'s most iconic tapas dish, featuring crispy fried potato cubes served with a "brave" (bravas) spicy tomato sauce that gives the dish its name. Often accompanied by aioli (garlic mayonnaise), this simple yet addictive dish is found in virtually every tapas bar across Spain and is the perfect companion to a glass of wine or beer.',
    qaTitle: 'Why is the dish called Patatas Bravas?',
    funFact: '"Bravas" means "fierce" or "brave," referring to the spicy tomato-based sauce served over the fried potatoes.',
    checklist: ['Crispy, fried potatoes', 'A spicy tomato-based "bravas" sauce', 'Often served with a side of aioli (garlic mayonnaise)'],
    pairings: [{ type: 'Occasion', suggestion: 'A classic and essential Spanish tapas dish.', icon: '🇪🇸' }],
    eatLikeLocal: [{ "icon": "🌶️", "title": "The 'Brave' Potatoes", "description": "The name refers to the spicy 'bravas' sauce." }]
  },
  {
    id: 81, name: 'Gambas al Ajillo', imageUrl: '/images/Gambas al Ajillo.webp', tags: ['spanish', 'gluten-free'], mood: ['light'],
    description: 'Gambas al Ajillo (Garlic Shrimp) is a sizzling Spanish tapas dish featuring succulent prawns cooked in a generous pool of olive oil infused with sliced garlic, dried red chilies, and sometimes a splash of sherry. Served bubbling hot in a terracotta dish with crusty bread for dipping into the flavorful oil, it\'s the epitome of simple Spanish cooking.',
    qaTitle: 'What does Gambas al Ajillo mean?',
    funFact: 'Meaning "garlic shrimp," this popular tapas dish involves shrimp cooked in a sizzling bath of garlic and olive oil.',
    checklist: ['Shrimp cooked in sizzling olive oil', 'A very generous amount of garlic and a hint of chili', 'Served with crusty bread for dipping'],
    pairings: [{ type: 'Experience', suggestion: 'The best part is mopping up the flavorful oil with bread.', icon: '🥖' }],
    eatLikeLocal: [{ "icon": "🦐", "title": "Dip the Bread", "description": "The best part is dipping crusty bread into the sizzling, garlicky olive oil." }]
  },
  {
    id: 82, name: 'Spanish Omelette', imageUrl: '/images/Spanish Omelette.webp', tags: ['spanish', 'vegetarian', 'gluten-free'], mood: ['light'],
    description: 'Tortilla Española (Spanish Omelette) is Spain\'s most versatile comfort food - a thick, satisfying omelette made with eggs, potatoes, and often onions. Unlike thin French omelettes, this rustic dish is served in thick wedges, either hot or at room temperature, and can be found everywhere from home kitchens to upscale restaurants and pintxo bars.',
    qaTitle: 'What is the difference between a Spanish omelette and a French omelette?',
    funFact: 'Known as "Tortilla Española," it\'s a thick omelette made with eggs and potatoes, often served at room temperature.',
    checklist: ['A thick omelette made with eggs and potatoes', 'Often includes onion', 'Can be served hot or at room temperature'],
    pairings: [{ type: 'Occasion', suggestion: 'A staple in Spanish homes and tapas bars.', icon: '🍳' }],
    eatLikeLocal: [{ "icon": "🥚", "title": "Room Temperature is Fine", "description": "Unlike other omelettes, a Spanish 'tortilla' is often served at room temperature as a tapa." }]
  },

  // More Vegetarian/Vegan
  {
    id: 83, name: 'Lentil Soup', imageUrl: '/images/Lentil Soup.webp', tags: ['vegetarian', 'vegan', 'gluten-free', 'mediterranean'], mood: ['light'],
    description: 'Lentil Soup is a hearty, nutritious dish enjoyed across Mediterranean and Middle Eastern cuisines. Lentils are one of the oldest cultivated legumes - dating back over 9,000 years - and create a naturally creamy, protein-rich soup often enhanced with warming spices like cumin and finished with a brightening squeeze of lemon.',
    qaTitle: 'How old is the history of lentils in human cuisine?',
    funFact: 'Lentils are one of the oldest known cultivated legumes, with evidence of their consumption dating back over 9,000 years.',
    checklist: ['A hearty and earthy flavor from the lentils', 'Often contains vegetables like carrots, celery, and onion', 'A squeeze of lemon at the end brightens the flavor'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Serve with a piece of crusty bread.', icon: '🥖' }],
    eatLikeLocal: [{ "icon": "🍋", "title": "A Squeeze of Lemon", "description": "A final squeeze of lemon juice brightens the earthy flavor of the lentils." }]
  },
  {
    id: 84, name: 'Veggie Burger', imageUrl: '/images/Veggie Burger.webp', tags: ['vegetarian', 'vegan', 'american'], mood: ['comfort', 'light', 'late-night'],
    description: 'The Veggie Burger has evolved from a simple vegetarian alternative to a culinary star in its own right. Made from vegetables, grains, legumes, or modern plant-based proteins, the best veggie burgers offer satisfying texture and flavor. The first commercially successful version, the Gardenburger, was invented in Oregon in the early 1980s.',
    qaTitle: 'When was the first commercial veggie burger invented?',
    funFact: 'The first commercially successful veggie burger, the "Gardenburger," was invented in a vegetarian restaurant in Oregon in the early 1980s.',
    checklist: ['A flavorful patty made from vegetables, grains, or beans', 'A good texture that isn\'t too mushy', 'Served with fresh toppings like avocado and sprouts'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Sweet potato fries are a great complement.', icon: '🍠' }],
    eatLikeLocal: [{ "icon": "🍔", "title": "The Toppings Make It", "description": "A great veggie burger is all about the toppings: avocado, sprouts, a good sauce, etc." }]
  },
  {
    id: 85, name: 'Quinoa Salad', imageUrl: '/images/Quinoa Salad.webp', tags: ['vegetarian', 'vegan', 'gluten-free'], mood: ['light'],
    description: 'Quinoa Salad highlights the nutritional superfood that the Incas called "the mother of all grains." This complete protein grain from the Andes forms the base for a colorful, refreshing salad mixed with fresh vegetables, herbs, and a zesty vinaigrette. Always rinse quinoa before cooking to remove its natural bitter coating called saponin.',
    qaTitle: 'Why did the Incas consider quinoa sacred?',
    funFact: 'Quinoa was considered a sacred crop by the Incas, who called it "the mother of all grains."',
    checklist: ['Fluffy, well-cooked quinoa', 'A mix of fresh vegetables and herbs', 'A light and tangy vinaigrette'],
    pairings: [{ type: 'Addition', suggestion: 'Add some feta cheese or chickpeas for extra protein.', icon: '🧀' }],
    eatLikeLocal: [{ "icon": "🥗", "title": "Rinse the Quinoa", "description": "Always rinse quinoa before cooking to remove its natural bitter coating (saponin)." }]
  },
  {
    id: 86, name: 'Eggplant Parmigiana', imageUrl: '/images/Eggplant Parmigiana.webp', tags: ['vegetarian', 'italian'], mood: ['comfort'],
    description: 'Eggplant Parmigiana (Parmigiana di Melanzane) is a rich, layered Italian dish featuring sliced eggplant - often breaded and fried - layered with tomato sauce, mozzarella, and Parmesan, then baked until bubbly. Despite its name, it originates from Southern Italy (Sicily and Naples), not Parma, and is a beloved vegetarian comfort food.',
    qaTitle: 'Did Eggplant Parmigiana originate in Parma?',
    funFact: 'Despite its name, the dish did not originate in Parma, Italy. It\'s most associated with Southern Italian regions like Sicily and Naples.',
    checklist: ['Slices of eggplant, often breaded and fried', 'Layered with tomato sauce, mozzarella, and Parmesan cheese', 'Baked until bubbly and golden'],
    pairings: [{ type: 'Side Pairing', suggestion: 'A simple green salad is all you need.', icon: '🥗' }],
    eatLikeLocal: [{ "icon": "🍆", "title": "Not Just for Vegetarians", "description": "A hearty and satisfying dish that even meat-lovers enjoy." }]
  },
  {
    id: 87, name: 'Mushroom Tacos', imageUrl: '/images/Mushroom Tacos.webp', tags: ['vegetarian', 'vegan', 'mexican'], mood: ['spicy', 'light', 'late-night', 'trendy'],
    description: 'Mushroom Tacos showcase how earthy, savory mushrooms can create a satisfying "meaty" taco filling. In Mexico, mushroom tacos have a long tradition, with huitlacoche (corn truffle) being a prized delicacy. Modern versions use varieties like oyster, king trumpet, or portobello, seasoned with Mexican spices and served with fresh salsa.',
    qaTitle: 'What is huitlacoche in Mexican cuisine?',
    funFact: 'In Mexico, tacos with various mushroom fillings, particularly huitlacoche (corn smut), are a traditional delicacy.',
    checklist: ['Earthy, "meaty" mushrooms as the filling', 'Warm corn tortillas', 'Topped with onion, cilantro, and salsa'],
    pairings: [{ type: 'Topping', suggestion: 'A sprinkle of cotija cheese adds a salty finish.', icon: '🧀' }],
    eatLikeLocal: [{ "icon": "🍄", "title": "Earthy and Meaty", "description": "Well-cooked mushrooms can have a surprisingly 'meaty' texture and flavor." }]
  },
  {
    id: 88, name: 'Tofu Scramble', imageUrl: '/images/Tofu Scramble.webp', tags: ['vegetarian', 'vegan', 'gluten-free'], mood: ['light'],
    description: 'Tofu Scramble is a vegan breakfast staple that mimics scrambled eggs using crumbled firm tofu. Turmeric provides the characteristic yellow color, while nutritional yeast adds a "cheesy" umami flavor. Mixed with sautéed vegetables and spices, it\'s a protein-rich, satisfying way to start the day without any eggs.',
    qaTitle: 'What gives tofu scramble its yellow color?',
    funFact: 'The yellow color of a tofu scramble often comes from turmeric, which mimics the color of scrambled eggs.',
    checklist: ['Crumbled firm tofu as the base', 'Seasoned with turmeric (for color) and nutritional yeast (for cheesy flavor)', 'Mixed with your favorite vegetables'],
    pairings: [{ type: 'Occasion', suggestion: 'A classic and satisfying vegan breakfast.', icon: '☀️' }],
    eatLikeLocal: [{ "icon": "🍳", "title": "The Secret is Turmeric", "description": "A pinch of turmeric gives the tofu scramble its yellow, egg-like color." }]
  },
  {
    id: 89, name: 'Stuffed Capsicum', imageUrl: '/images/Stuffed Capsicum.webp', tags: ['vegetarian', 'gluten-free'], mood: ['light'],
    description: 'Stuffed Capsicum (Stuffed Bell Peppers) is a versatile dish found in cuisines worldwide, from Mediterranean to Mexican. Sweet bell peppers become edible bowls filled with savory combinations of rice, vegetables, cheese, and herbs, then baked until tender. The peppers\'sweet flavor intensifies during cooking.',
    qaTitle: 'Why are stuffed peppers popular in many cuisines?',
    funFact: 'Stuffed peppers are a common dish in many cuisines around the world, with fillings ranging from rice and vegetables to meat and cheese.',
    checklist: ['Sweet bell peppers (capsicums) as the vessel', 'A savory filling of rice, vegetables, or meat', 'Baked until the peppers are tender'],
    pairings: [{ type: 'Experience', suggestion: 'The pepper becomes sweet and tender during baking.', icon: '🫑' }],
    eatLikeLocal: [{ "icon": "🌶️", "title": "A Complete Meal", "description": "The pepper itself is the edible bowl for a delicious filling." }]
  },
  {
    id: 90, name: 'Cauliflower Pizza', imageUrl: '/images/Cauliflower Pizza.webp', tags: ['vegetarian', 'gluten-free'], mood: ['comfort', 'light', 'late-night'],
    description: 'Cauliflower Pizza offers a low-carb, gluten-free alternative to traditional pizza crust. Made from finely "riced" cauliflower mixed with cheese and eggs, then baked until crispy, this innovative crust has become a favorite for those following keto or grain-free diets while still craving pizza.',
    qaTitle: 'How is cauliflower pizza crust made?',
    funFact: 'The crust of a cauliflower pizza is made from riced cauliflower mixed with cheese and egg, making it a popular low-carb alternative.',
    checklist: ['A crust made from riced cauliflower, cheese, and egg', 'A crispy alternative to traditional pizza dough', 'Your favorite pizza toppings'],
    pairings: [{ type: 'Note', suggestion: 'A great low-carb and gluten-free way to enjoy pizza.', icon: '🍕' }],
    eatLikeLocal: [{ "icon": "🍕", "title": "A Healthy Alternative", "description": "Enjoy the flavors of pizza with a low-carb, gluten-free crust." }]
  },

  // Desserts & Others
  {
    id: 91, name: 'New York Cheesecake', imageUrl: '/images/New York Cheesecake.webp', tags: ['american', 'vegetarian', 'dessert'], mood: ['light'],
    description: 'New York Cheesecake is the gold standard of American cheesecakes, famous for its exceptionally dense, rich, and creamy texture achieved by using heavy cream or sour cream. Unlike lighter Japanese or Italian versions, this iconic dessert has a simple graham cracker crust and is typically served plain or with fresh fruit.',
    qaTitle: 'What makes New York cheesecake different from other cheesecakes?',
    funFact: 'New York-style cheesecake is famous for its rich, dense, and smooth texture, relying on heavy cream or sour cream.',
    checklist: ['A dense, rich, and creamy texture', 'A simple graham cracker crust', 'Often served plain or with a simple fruit topping'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A cup of black coffee is the perfect contrast.', icon: '☕' }],
    eatLikeLocal: [{ "icon": "🍰", "title": "Dense and Rich", "description": "Unlike lighter cheesecakes, the New York style is known for its dense, rich, and creamy texture." }]
  },
  {
    id: 92, name: 'Chocolate Brownie', imageUrl: '/images/Chocolate Brownie.webp', tags: ['american', 'vegetarian', 'dessert'], mood: ['light'],
    description: 'Chocolate Brownies are dense, fudgy squares of chocolate heaven, with the first known recipe appearing in a 1897 Sears catalog. The perfect brownie has a shiny, crackly top and a rich, gooey center. The eternal debate: fudgy or cakey? Either way, they\'re best served warm with vanilla ice cream.',
    qaTitle: 'When were chocolate brownies first invented?',
    funFact: 'The first known recipe for brownies appeared in a Sears, Roebuck catalog in 1897.',
    checklist: ['A deep, rich chocolate flavor', 'A fudgy, dense center or a lighter, cakey texture', 'A crackly top'],
    pairings: [{ type: 'Accompaniment', suggestion: 'Best served warm with a scoop of vanilla ice cream.', icon: '🍨' }],
    eatLikeLocal: [{ "icon": "🍫", "title": "Fudgy vs. Cakey", "description": "The great brownie debate: do you prefer a dense, fudgy brownie or a lighter, cakey one?" }]
  },
  {
    id: 93, name: 'Tiramisu', imageUrl: '/images/Tiramisu.webp', tags: ['italian', 'vegetarian', 'dessert'], mood: ['light'],
    description: 'Tiramisù is Italy\'s beloved no-bake dessert featuring layers of espresso-soaked ladyfingers (savoiardi) and a rich mascarpone cream, finished with a dusting of cocoa powder. The name literally translates to "pick me up" in Italian, referencing the energizing combination of caffeine and sugar in this elegant, creamy treat.',
    qaTitle: 'What does Tiramisu mean in Italian?',
    funFact: 'The name "Tiramisù" literally translates to "pick me up" or "cheer me up" in Italian.',
    checklist: ['Layers of coffee-soaked ladyfingers', 'A creamy mixture of mascarpone cheese and eggs', 'A dusting of cocoa powder on top'],
    pairings: [{ type: 'Flavor', suggestion: 'The name means "pick me up" in Italian, referring to the coffee and sugar.', icon: '☕' }],
    eatLikeLocal: [{ "icon": "☕", "title": "A 'Pick-Me-Up'", "description": "The name means 'pick me up' in Italian, referring to the caffeine from the coffee-soaked ladyfingers." }]
  },
  {
    id: 94, name: 'Acai Bowl', imageUrl: '/images/Acai Bowl.webp', tags: ['vegan', 'vegetarian', 'gluten-free', 'dessert'], mood: ['light', 'trendy'],
    description: 'Açaí Bowls feature the superfood berry from the Amazon rainforest, blended into a thick, frozen purple base resembling sorbet. Topped with granola, fresh fruits, and often drizzled with honey or nut butter, this Brazilian-inspired bowl has become a global health food phenomenon and the epitome of trendy café culture.',
    qaTitle: 'Where do acai berries come from?',
    funFact: 'The açaí palm is native to the Amazon rainforest, and its berries have been a staple food for local tribes for centuries.',
    checklist: ['A thick, frozen acai base (not a watery smoothie)', 'A generous variety of fresh fruit toppings', 'A crunchy element like granola or nuts'],
    pairings: [{ type: 'Power-Up', suggestion: 'Add a spoonful of peanut butter or a drizzle of honey.', icon: '🍯' }, { type: 'Drink Pairing', suggestion: 'Pairs well with a cold brew coffee or a fresh juice.', icon: '🥤' }],
    eatLikeLocal: [{ "icon": "🥣", "title": "Thick is Key", "description": "A good acai bowl should be thick enough to eat with a spoon, like a sorbet, not a watery smoothie." }]
  },
  {
    id: 95, name: 'Poke Bowl', imageUrl: '/images/Poke Bowl.webp', tags: ['japanese', 'gluten-free'], mood: ['light', 'trendy'],
    description: 'Poke (pronounced "poh-keh") is a native Hawaiian dish featuring cubed raw, sashimi-grade fish marinated in soy sauce and sesame oil, served over rice with fresh vegetables and toppings. The word simply means "to slice" in Hawaiian, and this colorful bowl has become a global healthy-eating phenomenon.',
    qaTitle: 'What does poke mean in Hawaiian?',
    funFact: 'Poke (pronounced poh-kay) is a native Hawaiian dish. The word simply means "to slice" or "to cut." ',
    checklist: ['High-quality, sashimi-grade raw fish', 'A base of well-seasoned sushi rice', 'A colorful mix of fresh and pickled toppings'],
    pairings: [{ type: 'Sauce', suggestion: 'A classic shoyu (soy sauce) base or a spicy mayo are popular choices.', icon: '🌶️' }, { type: 'Drink Pairing', suggestion: 'A light Japanese beer or iced green tea works perfectly.', icon: '🍵' }],
    eatLikeLocal: [{ "icon": "🐟", "title": "It's All About the Fish", "description": "The quality of a poke bowl starts with fresh, high-quality, sashimi-grade fish." }]
  },
  {
    id: 96, name: 'Shakshuka', imageUrl: '/images/Shakshuka.webp', tags: ['mediterranean', 'vegetarian', 'gluten-free'], mood: ['comfort', 'trendy', 'spicy'],
    description: 'Shakshuka is a North African and Middle Eastern breakfast dish featuring eggs poached in a spiced tomato and pepper sauce, typically served sizzling hot in a cast-iron skillet. The name means "a haphazard mixture" in North African dialect, and crusty bread is essential for scooping up the runny yolks and flavorful sauce.',
    qaTitle: 'What does Shakshuka mean?',
    funFact: 'The name "Shakshuka" is a North African term that means "a haphazard mixture" or "all mixed up." ',
    checklist: ['Eggs poached to perfection with runny yolks', 'A rich, spiced tomato and pepper sauce', 'Served hot in a cast-iron pan'],
    pairings: [{ type: 'Must-Have', suggestion: 'Crusty bread or pita is essential for dipping.', icon: '🥖' }, { type: 'Topping', suggestion: 'Crumble feta cheese and fresh cilantro on top.', icon: '🌿' }],
    eatLikeLocal: [{ "icon": "🍳", "title": "Dip and Scoop", "description": "Use crusty bread to dip into the runny egg yolks and scoop up the tomato sauce." }]
  },
  {
    id: 97, name: 'Lobster Roll', imageUrl: '/images/Lobster Roll.webp', tags: ['american'], mood: ['comfort'],
    description: 'The Lobster Roll is New England\'s iconic sandwich featuring chunks of sweet lobster meat in a buttery, top-split hot dog bun. There are two main styles: Maine-style (cold, with mayonnaise) and Connecticut-style (warm, with drawn butter). Both celebrate the simple luxury of fresh Atlantic lobster.',
    qaTitle: 'What is the difference between Maine and Connecticut lobster rolls?',
    funFact: 'There are two main styles of lobster roll: Connecticut-style (served warm with butter) and Maine-style (served cold with mayonnaise).',
    checklist: ['Generous chunks of fresh lobster meat', 'A buttery, toasted, top-split bun', 'Served either cold with mayo (Maine style) or warm with butter (Connecticut style)'],
    pairings: [{ type: 'Side Pairing', suggestion: 'A side of potato chips or coleslaw is classic.', icon: '🥔' }],
    eatLikeLocal: [{ "icon": "🦞", "title": "Two Styles", "description": "Debate the two main styles: Maine (cold with mayo) vs. Connecticut (warm with butter)." }]
  },
  {
    id: 98, name: 'Clam Chowder', imageUrl: '/images/Clam Chowder.webp', tags: ['american'], mood: ['comfort'],
    description: 'Clam Chowder is a hearty American soup that comes in two famous regional styles: New England (creamy white, with cream and potatoes) and Manhattan (tomato-based and red). The New England version is the classic, featuring tender clams, potatoes, and salt pork in a rich cream broth, traditionally served with oyster crackers.',
    qaTitle: 'What is the difference between New England and Manhattan clam chowder?',
    funFact: 'New England clam chowder is the famous creamy white version, while Manhattan clam chowder has a red, tomato-based broth.',
    checklist: ['Tender clams and soft potatoes', 'A rich and creamy broth (for New England style)', 'Served with oyster crackers'],
    pairings: [{ type: 'Note', suggestion: 'New England clam chowder is the white, creamy version. Manhattan clam chowder is red and tomato-based.', icon: '🥣' }],
    eatLikeLocal: [{ "icon": "🥣", "title": "The Great Debate", "description": "New England style is white and creamy, while Manhattan style is red and tomato-based." }]
  },
  {
    id: 99, name: 'Gourmet Salad', imageUrl: '/images/Gourmet Salad.webp', tags: ['vegetarian', 'gluten-free'], mood: ['light'],
    description: 'A Gourmet Salad elevates simple greens into an artful composition of textures and flavors. The word "salad" derives from the Latin "sal" (salt), as early salads were seasoned with salty dressings. The perfect gourmet salad balances something crunchy, something creamy, something sweet, and something tangy.',
    qaTitle: 'Where does the word salad come from?',
    funFact: 'The word "salad" comes from the Latin word "sal," meaning salt, as early salads were often seasoned with salty dressings.',
    checklist: ['A variety of fresh, crisp greens', 'A balance of interesting ingredients and textures', 'A well-made dressing that complements, not overpowers'],
    pairings: [{ type: 'Addition', suggestion: 'Add a source of protein like grilled chicken or chickpeas to make it a full meal.', icon: '🐔' }],
    eatLikeLocal: [{ "icon": "🥗", "title": "More Than Just Lettuce", "description": "A great salad is a balance of textures and flavors: something crunchy, something creamy, something sweet, something tangy." }]
  },
  // 50 new foods added via spread
  ...NEW_FOODS,
];

// Backward compatibility alias
export const ALL_FOODS_COMBINED = ALL_FOODS;