export interface FoodItem {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
  checklist?: string[]; 
  pairings?: {
    type: string;
    suggestion: string;
    icon: string;
  }[];
}

export const foodData: FoodItem[] = [
 
  // Italian
  { id: 1, name: 'Margherita Pizza', imageUrl: '/images/Margherita Pizza.webp', tags: ['italian', 'vegetarian'] },
  { id: 2, name: 'Spaghetti Carbonara', imageUrl: '/images/Spaghetti Carbonara.webp', tags: ['italian'] },
  { id: 3, name: 'Lasagna', imageUrl: '/images/Lasagna.webp', tags: ['italian'] },
  { id: 4, name: 'Mushroom Risotto', imageUrl: '/images/Mushroom Risotto.webp', tags: ['italian', 'vegetarian', 'gluten-free'] },
  { id: 5, name: 'Spinach & Ricotta Ravioli', imageUrl: '/images/Spinach & Ricotta Ravioli.webp', tags: ['italian', 'vegetarian'] },
  { id: 6, name: 'Fettuccine Alfredo', imageUrl: '/images/Fettuccine Alfredo.webp', tags: ['italian', 'vegetarian'] },
  { id: 7, name: 'Gnocchi with Pesto', imageUrl: '/images/Gnocchi with Pesto.webp', tags: ['italian', 'vegetarian'] },

  // Mexican
  {
    id: 8, name: 'Tacos al Pastor', imageUrl: '/images/Tacos al Pastor.webp', tags: ['mexican'],
    checklist: ['Marinated pork shaved directly from the spit (trompo)', 'Small corn tortillas, doubled up', 'Topped with fresh pineapple, onion, and cilantro'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'An ice-cold Mexican beer (like Pacifico) or a refreshing agua de horchata.', icon: '🍺' }]
  },
  { id: 9, name: 'Burrito Bowl', imageUrl: '/images/Burrito Bowl.webp', tags: ['mexican', 'gluten-free'] },
  { id: 10, name: 'Cheese Quesadillas', imageUrl: '/images/Cheese Quesadillas.webp', tags: ['mexican', 'vegetarian'] },
  { id: 11, name: 'Chicken Enchiladas', imageUrl: '/images/Chicken Enchiladas.webp', tags: ['mexican'] },
  { id: 12, name: 'Guacamole with Chips', imageUrl: '/images/Guacamole with Chips.webp', tags: ['mexican', 'vegan', 'vegetarian', 'gluten-free'] },
  {
    id: 13, name: 'Nachos Supreme', imageUrl: '/images/Nachos Supreme.webp', tags: ['mexican', 'vegetarian'],
    checklist: ['House-made tortilla chips that stay crispy', 'Generous, evenly-spread toppings', 'Fresh salsa and real guacamole, not from a tube'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A crisp Corona or a zesty margarita is its fated partner.', icon: '🍹' }, { type: 'Side Pairing', suggestion: 'Add a side of spicy jalapeños for an extra kick.', icon: '🌶️' }]
  },
  { id: 14, name: 'Fish Tacos', imageUrl: '/images/Fish Tacos.webp', tags: ['mexican'] },
  
  // Japanese
  {
    id: 15, name: 'Sushi Platter', imageUrl: '/images/Sushi Platter.webp', tags: ['japanese'],
    checklist: ['The fish looks fresh, glossy, and vibrant', 'The rice is well-seasoned and served at room temperature', 'Wasabi is placed between the fish and rice (for nigiri)'],
    pairings: [{ type: 'Accompaniment', suggestion: 'Cleanse your palate between pieces with pickled ginger.', icon: '🍣' }, { type: 'Drink Pairing', suggestion: 'Enjoy with a cup of warm sake or refreshing green tea.', icon: '🍵' }]
  },
  {
    id: 16, name: 'Tonkotsu Ramen', imageUrl: '/images/Tonkotsu Ramen.webp', tags: ['japanese'],
    checklist: ['A rich, opaque pork broth that coats the spoon', 'Perfectly chewy, al dente noodles', 'Melt-in-your-mouth chashu pork belly'],
    pairings: [{ type: 'Must-have Extra', suggestion: 'Always add an Ajitama (marinated soft-boiled egg).', icon: '🥚' }, { type: 'Side Pairing', suggestion: 'A side of crispy gyoza completes the meal.', icon: '🥟' }]
  },
  { id: 17, name: 'Vegetable Tempura', imageUrl: '/images/Vegetable Tempura.webp', tags: ['japanese', 'vegetarian', 'vegan'] },
  {
    id: 18, name: 'Chicken Teriyaki Don', imageUrl: '/images/Chicken Teriyaki Don.webp', tags: ['japanese'],
    checklist: ['A glossy, sweet and savory teriyaki glaze', 'Perfectly cooked rice underneath', 'Often served with a side of steamed vegetables'],
    pairings: [{ type: 'Topping', suggestion: 'Sprinkle with sesame seeds and sliced spring onions.', icon: '✨' }, { type: 'Side Dish', suggestion: 'A simple bowl of miso soup is a perfect companion.', icon: '🥣' }]
  },
  { id: 19, name: 'Miso Soup', imageUrl: '/images/Miso Soup.webp', tags: ['japanese', 'vegan', 'vegetarian', 'gluten-free'] },
  { id: 20, name: 'Chicken Katsu Curry', imageUrl: '/images/Chicken Katsu Curry.webp', tags: ['japanese'] },
  { id: 21, name: 'Agedashi Tofu', imageUrl: '/images/Agedashi Tofu.webp', tags: ['japanese', 'vegetarian', 'vegan'] },

  // Indian
  {
    id: 22, name: 'Butter Chicken', imageUrl: '/images/Butter Chicken.webp', tags: ['indian', 'gluten-free'],
    checklist: ['Tender, tandoor-cooked chicken pieces', 'A creamy, well-balanced tomato-based sauce', 'A hint of sweetness and aromatic spices'],
    pairings: [{ type: 'Bread Pairing', suggestion: 'Perfect for scooping up with warm Garlic Naan.', icon: '🍞' }, { type: 'Drink Pairing', suggestion: 'A sweet Mango Lassi to cool the palate.', icon: '🥭' }]
  },
  { id: 23, name: 'Palak Paneer', imageUrl: '/images/Palak Paneer.webp', tags: ['indian', 'vegetarian', 'gluten-free'] },
  { id: 24, name: 'Vegetable Samosas', imageUrl: '/images/Vegetable Samosas.webp', tags: ['indian', 'vegetarian', 'vegan'] },
  { id: 25, name: 'Chicken Biryani', imageUrl: '/images/Chicken Biryani.webp', tags: ['indian', 'gluten-free'] },
  { id: 26, name: 'Garlic Naan Bread', imageUrl: '/images/Garlic Naan Bread.webp', tags: ['indian', 'vegetarian'] },
  { id: 27, name: 'Chana Masala', imageUrl: '/images/Chana Masala.webp', tags: ['indian', 'vegetarian', 'vegan', 'gluten-free'] },
  {
    id: 28, name: 'Lamb Rogan Josh', imageUrl: '/images/Lamb Rogan Josh.webp', tags: ['indian', 'gluten-free'],
    checklist: ['Fall-apart tender lamb pieces', 'A deep, aromatic red sauce from Kashmiri chillies', 'A complex flavor profile of ginger, fennel, and cardamom'],
    pairings: [{ type: 'Side Dish', suggestion: 'Serve with steamed basmati rice to soak up the gravy.', icon: '🍚' }, { type: 'Accompaniment', suggestion: 'A side of cool raita (yoghurt dip) balances the spice.', icon: '🥣' }]
  },
  
  // American
  { id: 29, name: 'Classic Cheeseburger', imageUrl: '/images/Classic Cheeseburger.webp', tags: ['american'] },
  { id: 30, name: 'Mac & Cheese', imageUrl: '/images/Mac & Cheese.webp', tags: ['american', 'vegetarian'] },
  {
    id: 31, name: 'BBQ Ribs', imageUrl: '/images/BBQ Ribs.webp', tags: ['american', 'gluten-free'],
    checklist: ['Meat that is tender and pulls easily from the bone', 'A smoky flavor that permeates the meat', 'A tangy, slightly sweet BBQ sauce that isn\'t overpowering'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Classic companions are coleslaw and cornbread.', icon: '🌽' }, { type: 'Drink Pairing', suggestion: 'A cold, crisp lager or a bold Zinfandel wine.', icon: '🍺' }]
  },
  { id: 32, name: 'Buffalo Wings', imageUrl: '/images/Buffalo Wings.webp', tags: ['american'] },
  {
    id: 33, name: 'New York Hot Dog', imageUrl: '/images/New York Hot Dog.webp', tags: ['american'],
    checklist: ['A snappy, all-beef frankfurter', 'A soft, steamed bun', 'Classic toppings like sauerkraut and spicy brown mustard'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Often enjoyed with a side of crunchy potato chips.', icon: '🥔' }, { type: 'Experience', suggestion: 'Best eaten from a street cart on a busy city corner!', icon: '🏙️' }]
  },
  { id: 34, name: 'Southern Fried Chicken', imageUrl: '/images/Southern Fried Chicken.webp', tags: ['american'] },
  { id: 35, name: 'Philly Cheesesteak', imageUrl: '/images/Philly Cheesesteak.webp', tags: ['american'] },

  // Chinese
  {
    id: 36, name: 'Sweet and Sour Pork', imageUrl: '/images/Sweet and Sour Pork.webp', tags: ['chinese'],
    checklist: ['A crispy coating on the pork, even with sauce', 'A balanced sauce that is both sweet and tangy', 'Fresh, crisp vegetables like bell peppers and pineapple'],
    pairings: [{ type: 'Side Pairing', suggestion: 'A bowl of simple steamed rice is essential.', icon: '🍚' }, { type: 'Drink Pairing', suggestion: 'Oolong tea can cut through the richness.', icon: '🍵' }]
  },
  {
    id: 37, name: 'Kung Pao Chicken', imageUrl: '/images/Kung Pao Chicken.webp', tags: ['chinese'],
    checklist: ['A noticeable "ma-la" (numbing and spicy) flavor from Sichuan peppercorns', 'Tender chicken and crunchy peanuts', 'A savory sauce with a hint of sweetness and vinegar'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Best served with steamed rice.', icon: '🍚' }, { type: 'Drink Pairing', suggestion: 'A light, crisp lager complements the spice.', icon: '🍺' }]
  },
  { id: 38, name: 'Pork Dumplings', imageUrl: '/images/Pork Dumplings.webp', tags: ['chinese'] },
  { id: 39, name: 'Vegetable Spring Rolls', imageUrl: '/images/Vegetable Spring Rolls.webp', tags: ['chinese', 'vegetarian', 'vegan'] },
  { id: 40, name: 'Yangzhou Fried Rice', imageUrl: '/images/Yangzhou Fried Rice.webp', tags: ['chinese'] },
  { id: 41, name: 'Peking Duck', imageUrl: '/images/Peking Duck.webp', tags: ['chinese'] },
  { id: 42, name: 'Mapo Tofu', imageUrl: '/images/Mapo Tofu.webp', tags: ['chinese', 'vegetarian'] },
  
  // Thai
  {
    id: 43, name: 'Pad Thai', imageUrl: '/images/Pad Thai.webp', tags: ['thai'],
    checklist: ['A perfect balance of sweet, sour, and salty flavors', 'Chewy rice noodles that aren\'t mushy', 'Served with fresh bean sprouts, lime, and crushed peanuts on the side'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A sweet and creamy Thai iced tea is the classic choice.', icon: '🥤' }, { type: 'Topping', suggestion: 'A generous squeeze of fresh lime brightens all the flavors.', icon: '🍋' }]
  },
  {
    id: 44, name: 'Thai Green Curry', imageUrl: '/images/Thai Green Curry.webp', tags: ['thai', 'gluten-free', 'vegetarian'],
    checklist: ['Aromatic fragrance from fresh herbs and green chillies', 'Creamy but not heavy coconut milk base', 'A pleasant, building heat that doesn\'t overwhelm'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Jasmine rice is essential to soak up the delicious sauce.', icon: '🍚' }, { type: 'Drink Pairing', suggestion: 'A light beer like Singha or a sweet Riesling wine.', icon: '🍺' }]
  },
  {
    id: 45, name: 'Tom Yum Goong', imageUrl: '/images/Tom Yum Goong.webp', tags: ['thai', 'gluten-free'],
    checklist: ['A hot and sour broth with distinct lemongrass and galangal notes', 'Plump, fresh prawns', 'A vibrant aroma from kaffir lime leaves'],
    pairings: [{ type: 'Topping', suggestion: 'Add a dash of coconut milk for a creamier "Tom Kha" style soup.', icon: '🥥' }, { type: 'Side Pairing', suggestion: 'Usually enjoyed on its own or with a small side of rice.', icon: '🍚' }]
  },
  {
    id: 46, name: 'Massaman Curry', imageUrl: '/images/Massaman Curry.webp', tags: ['thai', 'gluten-free'],
    checklist: ['A rich, mild, and slightly sweet curry', 'Tender chunks of beef or chicken and soft potatoes', 'A nutty flavor from peanuts and fragrant spices like cinnamon and cardamom'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Perfectly complements steamed jasmine rice.', icon: '🍚' }, { type: 'Topping', suggestion: 'Top with extra roasted peanuts for more crunch.', icon: '🥜' }]
  },
  {
    id: 47, name: 'Mango Sticky Rice', imageUrl: '/images/Mango Sticky Rice.webp', tags: ['thai', 'vegetarian', 'vegan', 'gluten-free'],
    checklist: ['Perfectly ripe, sweet mango', 'Warm, soft, and chewy sticky rice', 'A creamy, slightly salty coconut sauce drizzled on top'],
    pairings: [{ type: 'Topping', suggestion: 'A sprinkle of crispy toasted mung beans adds great texture.', icon: '✨' }, { type: 'Drink Pairing', suggestion: 'Enjoy with a cup of pandan or lemongrass tea.', icon: '🍵' }]
  },

  // Mediterranean
  { id: 48, name: 'Falafel Wrap', imageUrl: '/images/Falafel Wrap.webp', tags: ['mediterranean', 'vegetarian', 'vegan'] },
  { id: 49, name: 'Hummus with Pita', imageUrl: '/images/Hummus with Pita.webp', tags: ['mediterranean', 'vegetarian', 'vegan'] },
  { id: 50, name: 'Chicken Shawarma', imageUrl: '/images/Chicken Shawarma.webp', tags: ['mediterranean'] },

  // Vietnamese
  {
    id: 51, name: 'Beef Pho', imageUrl: '/images/Beef Pho.webp', tags: ['vietnamese', 'gluten-free'],
    checklist: ['A clear, deeply aromatic broth (not cloudy)', 'A generous plate of fresh herbs like basil, mint, and cilantro on the side', 'Tender slices of beef and soft rice noodles'],
    pairings: [{ type: 'Condiment', suggestion: 'Customize your bowl with hoisin sauce and sriracha.', icon: '🌶️' }, { type: 'Drink Pairing', suggestion: 'Vietnamese iced coffee provides a perfect contrast.', icon: '☕' }]
  },
  {
    id: 52, name: 'Banh Mi', imageUrl: '/images/Banh Mi.webp', tags: ['vietnamese'],
    checklist: ['A crispy, airy baguette that doesn\'t cut your mouth', 'A balanced mix of savory meat, pickled vegetables, and fresh cilantro', 'A rich paté spread and a swipe of mayonnaise'],
    pairings: [{ type: 'Side Pairing', suggestion: 'Often enjoyed on its own as a complete meal.', icon: '🥖' }, { type: 'Drink Pairing', suggestion: 'Pairs well with a cold beer or a sweet iced tea.', icon: '🍺' }]
  },
  { id: 53, name: 'Vietnamese Rice Paper Rolls', imageUrl: '/images/Vietnamese Rice Paper Rolls.webp', tags: ['vietnamese', 'gluten-free', 'vegetarian'] },
  { id: 54, name: 'Bun Cha', imageUrl: '/images/Bun Cha.webp', tags: ['vietnamese'] },

  // French
  { id: 55, name: 'Steak Frites', imageUrl: '/images/Steak Frites.webp', tags: ['french'] },
  { id: 56, name: 'Croque Monsieur', imageUrl: '/images/Croque Monsieur.webp', tags: ['french'] },
  {
    id: 57, name: 'French Onion Soup', imageUrl: '/images/French Onion Soup.webp', tags: ['french'],
    checklist: ['A rich, deeply caramelized onion and beef broth', 'A thick, toasted slice of bread on top', 'A generous layer of gooey, melted Gruyère cheese'],
    pairings: [{ type: 'Drink Pairing', suggestion: 'A glass of dry white wine like Sauvignon Blanc or a light Beaujolais.', icon: '🍷' }, { type: 'Accompaniment', suggestion: 'Serve with an extra side of crusty baguette for dipping.', icon: '🥖' }]
  },
  {
    id: 58, name: 'Crepes', imageUrl: '/images/Crepes.webp', tags: ['french', 'vegetarian'],
    checklist: ['A thin, delicate crepe that is soft and slightly chewy', 'Whether sweet or savory, the filling should be fresh and well-balanced', 'Evenly cooked without any burnt spots'],
    pairings: [{ type: 'Sweet Pairing', suggestion: 'Classic sweet fillings include Nutella, banana, and strawberries.', icon: '🍓' }, { type: 'Savory Pairing', suggestion: 'Try a savory crepe with ham, cheese, and a fried egg.', icon: '🍳' }]
  },

  // British
  { id: 59, name: 'Fish and Chips', imageUrl: '/images/Fish and Chips.webp', tags: ['british'] },
  { id: 60, name: 'Bangers and Mash', imageUrl: '/images/Bangers and Mash.webp', tags: ['british'] },
  { id: 61, name: 'Shepherd\'s Pie', imageUrl: '/images/Shepherds Pie.webp', tags: ['british'] },
  
  // Australian
  { id: 62, name: 'Chicken Parmigiana', imageUrl: '/images/Chicken Parmigiana.webp', tags: ['australian'] },
  { id: 63, name: 'Aussie Meat Pie', imageUrl: '/images/Aussie Meat Pie.webp', tags: ['australian'] },
  {
    id: 64, name: 'Smashed Avocado on Toast', imageUrl: '/images/Smashed Avocado on Toast.webp', tags: ['australian', 'vegetarian'],
    checklist: ['Fresh, ripe avocado, chunky not pureed', 'High-quality, sturdy sourdough toast', 'Well-seasoned with salt, pepper, and a squeeze of lemon or lime'],
    pairings: [{ type: 'Topping', suggestion: 'Top with feta cheese, a poached egg, or cherry tomatoes.', icon: '🍳' }, { type: 'Drink Pairing', suggestion: 'The quintessential partner is a flat white coffee.', icon: '☕' }]
  },
  { id: 65, name: 'Grilled Barramundi', imageUrl: '/images/Grilled Barramundi.webp', tags: ['australian', 'gluten-free'] },
  { id: 66, name: 'Sausage Sizzle', imageUrl: '/images/Sausage Sizzle.webp', tags: ['australian'] },
  { id: 67, name: 'Lamb Roast', imageUrl: '/images/Lamb Roast.webp', tags: ['australian', 'gluten-free'] },
  {
    id: 68, name: 'Pavlova', imageUrl: '/images/Pavlova.webp', tags: ['australian', 'vegetarian', 'gluten-free'],
    checklist: ['A crisp meringue shell', 'A soft, marshmallowy inside', 'Topped with fresh whipped cream and tart fruits like passionfruit and kiwi'],
    pairings: [{ type: 'Accompaniment', suggestion: 'The tartness of the fruit is key to balancing the sweetness.', icon: '🥝' }, { type: 'Occasion', suggestion: 'A classic dessert for Christmas and summer gatherings.', icon: '☀️' }]
  },
  { id: 100, name: 'Halal Snack Pack', imageUrl: '/images/Halal Snack Pack.webp', tags: ['australian'] },

  // Greek
  { id: 69, name: 'Gyro Wrap', imageUrl: '/images/Gyro Wrap.webp', tags: ['greek'] },
  { id: 70, name: 'Moussaka', imageUrl: '/images/Moussaka.webp', tags: ['greek'] },
  { id: 71, name: 'Greek Salad', imageUrl: '/images/Greek Salad.webp', tags: ['greek', 'vegetarian', 'gluten-free'] },
  { id: 72, name: 'Souvlaki Skewers', imageUrl: '/images/Souvlaki Skewers.webp', tags: ['greek', 'gluten-free'] },
  { id: 73, name: 'Spanakopita', imageUrl: '/images/Spanakopita.webp', tags: ['greek', 'vegetarian'] },

  // Korean
  { id: 74, name: 'Korean BBQ', imageUrl: '/images/Korean BBQ.webp', tags: ['korean'] },
  { id: 75, name: 'Bibimbap', imageUrl: '/images/Bibimbap.webp', tags: ['korean', 'vegetarian'] },
  {
    id: 76, name: 'Kimchi Fried Rice', imageUrl: '/images/Kimchi Fried Rice.webp', tags: ['korean'],
    checklist: ['A distinct tangy flavor from well-fermented kimchi', 'A perfect balance of spicy, savory, and slightly sour', 'Often topped with a sunny-side-up fried egg'],
    pairings: [{ type: 'Topping', suggestion: 'Sprinkle with roasted seaweed (gim) and sesame seeds.', icon: '✨' }, { type: 'Side Dish', suggestion: 'A simple clear soup, like egg drop soup, is a great companion.', icon: '🥣' }]
  },
  { id: 77, name: 'Korean Fried Chicken', imageUrl: '/images/Korean Fried Chicken.webp', tags: ['korean'] },
  {
    id: 78, name: 'Japchae', imageUrl: '/images/Japchae.webp', tags: ['korean', 'vegetarian', 'vegan', 'gluten-free'],
    checklist: ['Chewy and springy glass noodles', 'A colorful variety of fresh, crisp vegetables', 'A savory and slightly sweet soy-sesame sauce'],
    pairings: [{ type: 'Occasion', suggestion: 'A staple dish for Korean holidays and celebrations.', icon: '🎉' }, { type: 'Side Dish', suggestion: 'Enjoyed as a main or as a side dish (banchan) in a larger meal.', icon: '🇰🇷' }]
  },
  
  // Spanish
  { id: 79, name: 'Seafood Paella', imageUrl: '/images/Seafood Paella.webp', tags: ['spanish', 'gluten-free'] },
  { id: 80, name: 'Patatas Bravas', imageUrl: '/images/patatas bravas.webp', tags: ['spanish', 'vegetarian'] },
  { id: 81, name: 'Gambas al Ajillo', imageUrl: '/images/Gambas al Ajillo.webp', tags: ['spanish', 'gluten-free'] },
  { id: 82, name: 'Spanish Omelette', imageUrl: '/images/Spanish Omelette.webp', tags: ['spanish', 'vegetarian', 'gluten-free'] },
  
  // More Vegetarian/Vegan
  { id: 83, name: 'Lentil Soup', imageUrl: '/images/Lentil Soup.webp', tags: ['vegetarian', 'vegan', 'gluten-free', 'mediterranean'] },
  { id: 84, name: 'Veggie Burger', imageUrl: '/images/Veggie Burger.webp', tags: ['vegetarian', 'vegan', 'american'] },
  { id: 85, name: 'Quinoa Salad', imageUrl: '/images/Quinoa Salad.webp', tags: ['vegetarian', 'vegan', 'gluten-free'] },
  { id: 86, name: 'Eggplant Parmigiana', imageUrl: '/images/Eggplant Parmigiana.webp', tags: ['vegetarian', 'italian'] },
  { id: 87, name: 'Mushroom Tacos', imageUrl: '/images/Mushroom Tacos.webp', tags: ['vegetarian', 'vegan', 'mexican'] },
  { id: 88, name: 'Tofu Scramble', imageUrl: '/images/Tofu Scramble.webp', tags: ['vegetarian', 'vegan', 'gluten-free'] },
  { id: 89, name: 'Stuffed Capsicum', imageUrl: '/images/Stuffed Capsicum.webp', tags: ['vegetarian', 'gluten-free'] },
  { id: 90, name: 'Cauliflower Pizza', imageUrl: '/images/Cauliflower Pizza.webp', tags: ['vegetarian', 'gluten-free'] },

  // Desserts & Others
  { id: 91, name: 'New York Cheesecake', imageUrl: '/images/New York Cheesecake.webp', tags: ['american', 'vegetarian', 'dessert'] },
  { id: 92, name: 'Chocolate Brownie', imageUrl: '/images/Chocolate Brownie.webp', tags: ['american', 'vegetarian', 'dessert'] },
  { id: 93, name: 'Tiramisu', imageUrl: '/images/Tiramisu.webp', tags: ['italian', 'vegetarian', 'dessert'] },
  {
    id: 94, name: 'Acai Bowl', imageUrl: '/images/Acai Bowl.webp', tags: ['vegan', 'vegetarian', 'gluten-free', 'dessert'],
    checklist: ['A thick, frozen acai base (not a watery smoothie)', 'A generous variety of fresh fruit toppings', 'A crunchy element like granola or nuts'],
    pairings: [{ type: 'Power-Up', suggestion: 'Add a spoonful of peanut butter or a drizzle of honey.', icon: '🍯' }, { type: 'Drink Pairing', suggestion: 'Pairs well with a cold brew coffee or a fresh juice.', icon: '🥤' }]
  },
  {
    id: 95, name: 'Poke Bowl', imageUrl: '/images/Poke Bowl.webp', tags: ['japanese', 'gluten-free'],
    checklist: ['High-quality, sashimi-grade raw fish', 'A base of well-seasoned sushi rice', 'A colorful mix of fresh and pickled toppings'],
    pairings: [{ type: 'Sauce', suggestion: 'A classic shoyu (soy sauce) base or a spicy mayo are popular choices.', icon: '🌶️' }, { type: 'Drink Pairing', suggestion: 'A light Japanese beer or iced green tea works perfectly.', icon: '🍵' }]
  },
  {
    id: 96, name: 'Shakshuka', imageUrl: '/images/Shakshuka.webp', tags: ['mediterranean', 'vegetarian', 'gluten-free'],
    checklist: ['Eggs poached to perfection with runny yolks', 'A rich, spiced tomato and pepper sauce', 'Served hot in a cast-iron pan'],
    pairings: [{ type: 'Must-Have', suggestion: 'Crusty bread or pita is essential for dipping.', icon: '🥖' }, { type: 'Topping', suggestion: 'Crumble feta cheese and fresh cilantro on top.', icon: '🌿' }]
  },
  { id: 97, name: 'Lobster Roll', imageUrl: '/images/Lobster Roll.webp', tags: ['american'] },
  { id: 98, name: 'Clam Chowder', imageUrl: '/images/Clam Chowder.webp', tags: ['american'] },
  { id: 99, name: 'Gourmet Salad', imageUrl: '/images/Gourmet Salad.webp', tags: ['vegetarian', 'gluten-free'] },
];