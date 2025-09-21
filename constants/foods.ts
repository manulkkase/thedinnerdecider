// Populated constants/foods.ts with actual data to resolve module errors.
import { FoodItem } from '../types';

export const DIETARY_OPTIONS = [
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'gluten-free', label: 'Gluten-Free' },
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
  { value: 'dessert', label: 'Dessert', icon: '🍰' },
];

export const ALL_FOODS: FoodItem[] = [
  // Italian
  { id: 1, name: 'Margherita Pizza', imageUrl: '/images/Margherita Pizza.webp', tags: ['italian', 'vegetarian'] },
  { id: 2, name: 'Spaghetti Carbonara', imageUrl: '/images/Spaghetti Carbonara.webp', tags: ['italian'] },
  { id: 3, name: 'Lasagna', imageUrl: '/images/Lasagna.webp', tags: ['italian'] },
  { id: 4, name: 'Mushroom Risotto', imageUrl: '/images/Mushroom Risotto.webp', tags: ['italian', 'vegetarian', 'gluten-free'] },
  { id: 5, name: 'Spinach & Ricotta Ravioli', imageUrl: '/images/Spinach & Ricotta Ravioli.webp', tags: ['italian', 'vegetarian'] },
  { id: 6, name: 'Fettuccine Alfredo', imageUrl: '/images/Fettuccine Alfredo.webp', tags: ['italian', 'vegetarian'] },
  { id: 7, name: 'Gnocchi with Pesto', imageUrl: '/images/Gnocchi with Pesto.webp', tags: ['italian', 'vegetarian'] },

  // Mexican
  { id: 8, name: 'Tacos al Pastor', imageUrl: '/images/Tacos al Pastor.webp', tags: ['mexican'] },
  { id: 9, name: 'Burrito Bowl', imageUrl: '/images/Burrito Bowl.webp', tags: ['mexican', 'gluten-free'] },
  { id: 10, name: 'Cheese Quesadillas', imageUrl: '/images/Cheese Quesadillas.webp', tags: ['mexican', 'vegetarian'] },
  { id: 11, name: 'Chicken Enchiladas', imageUrl: '/images/Chicken Enchiladas.webp', tags: ['mexican'] },
  { id: 12, name: 'Guacamole with Chips', imageUrl: '/images/Guacamole with Chips.webp', tags: ['mexican', 'vegan', 'vegetarian', 'gluten-free'] },
  { id: 13, name: 'Nachos Supreme', imageUrl: '/images/Nachos Supreme.webp', tags: ['mexican', 'vegetarian'] },
  { id: 14, name: 'Fish Tacos', imageUrl: '/images/Fish Tacos.webp', tags: ['mexican'] },
  
  // Japanese
  { id: 15, name: 'Sushi Platter', imageUrl: '/images/Sushi Platter.webp', tags: ['japanese'] },
  { id: 16, name: 'Tonkotsu Ramen', imageUrl: '/images/Tonkotsu Ramen.webp', tags: ['japanese'] },
  { id: 17, name: 'Vegetable Tempura', imageUrl: '/images/Vegetable Tempura.webp', tags: ['japanese', 'vegetarian', 'vegan'] },
  { id: 18, name: 'Chicken Teriyaki Don', imageUrl: '/images/Chicken Teriyaki Don.webp', tags: ['japanese'] },
  { id: 19, name: 'Miso Soup', imageUrl: '/images/Miso Soup.webp', tags: ['japanese', 'vegan', 'vegetarian', 'gluten-free'] },
  { id: 20, name: 'Chicken Katsu Curry', imageUrl: '/images/Chicken Katsu Curry.webp', tags: ['japanese'] },
  { id: 21, name: 'Agedashi Tofu', imageUrl: '/images/Agedashi Tofu.webp', tags: ['japanese', 'vegetarian', 'vegan'] },

  // Indian
  { id: 22, name: 'Butter Chicken', imageUrl: '/images/Butter Chicken.webp', tags: ['indian', 'gluten-free'] },
  { id: 23, name: 'Palak Paneer', imageUrl: '/images/Palak Paneer.webp', tags: ['indian', 'vegetarian', 'gluten-free'] },
  { id: 24, name: 'Vegetable Samosas', imageUrl: '/images/Vegetable Samosas.webp', tags: ['indian', 'vegetarian', 'vegan'] },
  { id: 25, name: 'Chicken Biryani', imageUrl: '/images/Chicken Biryani.webp', tags: ['indian', 'gluten-free'] },
  { id: 26, name: 'Garlic Naan Bread', imageUrl: '/images/Garlic Naan Bread.webp', tags: ['indian', 'vegetarian'] },
  { id: 27, name: 'Chana Masala', imageUrl: '/images/Chana Masala.webp', tags: ['indian', 'vegetarian', 'vegan', 'gluten-free'] },
  { id: 28, name: 'Lamb Rogan Josh', imageUrl: '/images/Lamb Rogan Josh.webp', tags: ['indian', 'gluten-free'] },
  
  // American
  { id: 29, name: 'Classic Cheeseburger', imageUrl: '/images/Classic Cheeseburger.webp', tags: ['american'] },
  { id: 30, name: 'Mac & Cheese', imageUrl: '/images/Mac & Cheese.webp', tags: ['american', 'vegetarian'] },
  { id: 31, name: 'BBQ Ribs', imageUrl: '/images/BBQ Ribs.webp', tags: ['american', 'gluten-free'] },
  { id: 32, name: 'Buffalo Wings', imageUrl: '/images/Buffalo Wings.webp', tags: ['american'] },
  { id: 33, name: 'New York Hot Dog', imageUrl: '/images/New York Hot Dog.webp', tags: ['american'] },
  { id: 34, name: 'Southern Fried Chicken', imageUrl: '/images/Southern Fried Chicken.webp', tags: ['american'] },
  { id: 35, name: 'Philly Cheesesteak', imageUrl: '/images/Philly Cheesesteak.webp', tags: ['american'] },

  // Chinese
  { id: 36, name: 'Sweet and Sour Pork', imageUrl: '/images/Sweet and Sour Pork.webp', tags: ['chinese'] },
  { id: 37, name: 'Kung Pao Chicken', imageUrl: '/images/Kung Pao Chicken.webp', tags: ['chinese'] },
  { id: 38, name: 'Pork Dumplings', imageUrl: '/images/Pork Dumplings.webp', tags: ['chinese'] },
  { id: 39, name: 'Vegetable Spring Rolls', imageUrl: '/images/Vegetable Spring Rolls.webp', tags: ['chinese', 'vegetarian', 'vegan'] },
  { id: 40, name: 'Yangzhou Fried Rice', imageUrl: '/images/Yangzhou Fried Rice.webp', tags: ['chinese'] },
  { id: 41, name: 'Peking Duck', imageUrl: '/images/Peking Duck.webp', tags: ['chinese'] },
  { id: 42, name: 'Mapo Tofu', imageUrl: '/images/Mapo Tofu.webp', tags: ['chinese', 'vegetarian'] },
  
  // Thai
  { id: 43, name: 'Pad Thai', imageUrl: '/images/Pad Thai.webp', tags: ['thai'] },
  { id: 44, name: 'Thai Green Curry', imageUrl: '/images/Thai Green Curry.webp', tags: ['thai', 'gluten-free', 'vegetarian'] },
  { id: 45, name: 'Tom Yum Goong', imageUrl: '/images/Tom Yum Goong.webp', tags: ['thai', 'gluten-free'] },
  { id: 46, name: 'Massaman Curry', imageUrl: '/images/Massaman Curry.webp', tags: ['thai', 'gluten-free'] },
  { id: 47, name: 'Mango Sticky Rice', imageUrl: '/images/Mango Sticky Rice.webp', tags: ['thai', 'vegetarian', 'vegan', 'gluten-free'] },

  // Mediterranean
  { id: 48, name: 'Falafel Wrap', imageUrl: '/images/Falafel Wrap.webp', tags: ['mediterranean', 'vegetarian', 'vegan'] },
  { id: 49, name: 'Hummus with Pita', imageUrl: '/images/Hummus with Pita.webp', tags: ['mediterranean', 'vegetarian', 'vegan'] },
  { id: 50, name: 'Chicken Shawarma', imageUrl: '/images/Chicken Shawarma.webp', tags: ['mediterranean'] },

  // Vietnamese
  { id: 51, name: 'Beef Pho', imageUrl: '/images/Beef Pho.webp', tags: ['vietnamese', 'gluten-free'] },
  { id: 52, name: 'Banh Mi', imageUrl: '/images/Banh Mi.webp', tags: ['vietnamese'] },
  { id: 53, name: 'Vietnamese Rice Paper Rolls', imageUrl: '/images/Vietnamese Rice Paper Rolls.webp', tags: ['vietnamese', 'gluten-free', 'vegetarian'] },
  { id: 54, name: 'Bun Cha', imageUrl: '/images/Bun Cha.webp', tags: ['vietnamese'] },

  // French
  { id: 55, name: 'Steak Frites', imageUrl: '/images/Steak Frites.webp', tags: ['french'] },
  { id: 56, name: 'Croque Monsieur', imageUrl: '/images/Croque Monsieur.webp', tags: ['french'] },
  { id: 57, name: 'French Onion Soup', imageUrl: '/images/French Onion Soup.webp', tags: ['french'] },
  { id: 58, name: 'Crepes', imageUrl: '/images/Crepes.webp', tags: ['french', 'vegetarian'] },

  // British
  { id: 59, name: 'Fish and Chips', imageUrl: '/images/Fish and Chips.webp', tags: ['british'] },
  { id: 60, name: 'Bangers and Mash', imageUrl: '/images/Bangers and Mash.webp', tags: ['british'] },
  { id: 61, name: 'Shepherd\'s Pie', imageUrl: '/images/Shepherds Pie.webp', tags: ['british'] },
  
  // Australian
  { id: 62, name: 'Chicken Parmigiana', imageUrl: '/images/Chicken Parmigiana.webp', tags: ['australian'] },
  { id: 63, name: 'Aussie Meat Pie', imageUrl: '/images/Aussie Meat Pie.webp', tags: ['australian'] },
  { id: 64, name: 'Smashed Avocado on Toast', imageUrl: '/images/Smashed Avocado on Toast.webp', tags: ['australian', 'vegetarian'] },
  { id: 65, name: 'Grilled Barramundi', imageUrl: '/images/Grilled Barramundi.webp', tags: ['australian', 'gluten-free'] },
  { id: 66, name: 'Sausage Sizzle', imageUrl: '/images/Sausage Sizzle.webp', tags: ['australian'] },
  { id: 67, name: 'Lamb Roast', imageUrl: '/images/Lamb Roast.webp', tags: ['australian', 'gluten-free'] },
  { id: 68, name: 'Pavlova', imageUrl: '/images/Pavlova.webp', tags: ['australian', 'vegetarian', 'gluten-free'] },
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
  { id: 76, name: 'Kimchi Fried Rice', imageUrl: '/images/Kimchi Fried Rice.webp', tags: ['korean'] },
  { id: 77, name: 'Korean Fried Chicken', imageUrl: '/images/Korean Fried Chicken.webp', tags: ['korean'] },
  { id: 78, name: 'Japchae', imageUrl: '/images/Japchae.webp', tags: ['korean', 'vegetarian', 'vegan', 'gluten-free'] },
  
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
  { id: 94, name: 'Acai Bowl', imageUrl: '/images/Acai Bowl.webp', tags: ['vegan', 'vegetarian', 'gluten-free', 'dessert'] },
  { id: 95, name: 'Poke Bowl', imageUrl: '/images/Poke Bowl.webp', tags: ['japanese', 'gluten-free', 'dessert'] },
  { id: 96, name: 'Shakshuka', imageUrl: '/images/Shakshuka.webp', tags: ['mediterranean', 'vegetarian', 'gluten-free', 'dessert'] },
  { id: 97, name: 'Lobster Roll', imageUrl: '/images/Lobster Roll.webp', tags: ['american', 'dessert'] },
  { id: 98, name: 'Clam Chowder', imageUrl: '/images/Clam Chowder.webp', tags: ['american', 'dessert'] },
  { id: 99, name: 'Gourmet Salad', imageUrl: '/images/Gourmet Salad.webp', tags: ['vegetarian', 'gluten-free', 'dessert'] },
];