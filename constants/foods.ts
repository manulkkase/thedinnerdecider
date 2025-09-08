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
  { value: 'vietnamese', label: 'Vietnamese', icon: '🍜' },
  { value: 'french', label: 'French', icon: '🥖' },
  { value: 'british', label: 'British', icon: '☕' },
  { value: 'australian', label: 'Australian', icon: '🇦🇺' },
  { value: 'greek', label: 'Greek', icon: '🇬🇷' },
  { value: 'korean', label: 'Korean', icon: '🇰🇷' },
  { value: 'spanish', label: 'Spanish', icon: '🥘' },
];

export const ALL_FOODS: FoodItem[] = [
  // Italian
  { id: 1, name: 'Margherita Pizza', imageUrl: 'https://live.staticflickr.com/675/23490191259_432bd5c0cf.jpg', tags: ['italian', 'vegetarian'] },
  { id: 2, name: 'Spaghetti Carbonara', imageUrl: 'https://live.staticflickr.com/7263/7120947497_34ed0891a2.jpg', tags: ['italian'] },
  { id: 3, name: 'Lasagna', imageUrl: 'https://live.staticflickr.com/794/27536596138_a201bb3cb3.jpg', tags: ['italian'] },
  { id: 4, name: 'Mushroom Risotto', imageUrl: 'https://live.staticflickr.com/7288/8739647153_ebd363bf9f.jpg', tags: ['italian', 'vegetarian', 'gluten-free'] },
  { id: 5, name: 'Spinach & Ricotta Ravioli', imageUrl: 'https://live.staticflickr.com/912/40210601390_dd9ab6373b.jpg', tags: ['italian', 'vegetarian'] },
  { id: 6, name: 'Fettuccine Alfredo', imageUrl: 'https://live.staticflickr.com/65535/52865868754_4fa684d449.jpg', tags: ['italian', 'vegetarian'] },
  { id: 7, name: 'Gnocchi with Pesto', imageUrl: 'https://live.staticflickr.com/65535/49244439471_58965d8c8c.jpg', tags: ['italian', 'vegetarian'] },

  // Mexican
  { id: 8, name: 'Tacos al Pastor', imageUrl: 'https://live.staticflickr.com/3266/3172435413_45b899be3c.jpg', tags: ['mexican'] },
  { id: 9, name: 'Burrito Bowl', imageUrl: 'https://live.staticflickr.com/598/22726999267_fe73e6a09a.jpg', tags: ['mexican', 'gluten-free'] },
  { id: 10, name: 'Cheese Quesadillas', imageUrl: 'https://live.staticflickr.com/65535/50832800408_0f5b0ec0ce.jpg', tags: ['mexican', 'vegetarian'] },
  { id: 11, name: 'Chicken Enchiladas', imageUrl: 'https://live.staticflickr.com/8265/8653328763_2c11a4609a.jpg', tags: ['mexican'] },
  { id: 12, name: 'Guacamole with Chips', imageUrl: 'https://live.staticflickr.com/65535/52685653683_7342da84a3.jpg', tags: ['mexican', 'vegan', 'vegetarian', 'gluten-free'] },
  { id: 13, name: 'Nachos Supreme', imageUrl: 'https://live.staticflickr.com/5250/5339918963_041eb8d548.jpg', tags: ['mexican', 'vegetarian'] },
  { id: 14, name: 'Fish Tacos', imageUrl: 'https://live.staticflickr.com/580/20630979036_c928f0186e.jpg', tags: ['mexican'] },
  
  // Japanese
  { id: 15, name: 'Sushi Platter', imageUrl: 'https://live.staticflickr.com/8150/7567754454_21d8528573.jpg', tags: ['japanese'] },
  { id: 16, name: 'Tonkotsu Ramen', imageUrl: 'https://live.staticflickr.com/5185/5776710879_9e3faca249.jpg', tags: ['japanese'] },
  { id: 17, name: 'Vegetable Tempura', imageUrl: 'https://live.staticflickr.com/4022/4550100792_f71e8682c3.jpg', tags: ['japanese', 'vegetarian', 'vegan'] },
  { id: 18, name: 'Chicken Teriyaki Don', imageUrl: 'https://live.staticflickr.com/7373/9550205227_862feb15ee.jpg', tags: ['japanese'] },
  { id: 19, name: 'Miso Soup', imageUrl: 'https://live.staticflickr.com/5561/15236255652_f63e159fd1.jpg', tags: ['japanese', 'vegan', 'vegetarian', 'gluten-free'] },
  { id: 20, name: 'Chicken Katsu Curry', imageUrl: 'https://live.staticflickr.com/65535/51172539797_f5926ae76c.jpg', tags: ['japanese'] },
  { id: 21, name: 'Agedashi Tofu', imageUrl: 'https://live.staticflickr.com/21/27446563_f5b74ea878.jpg', tags: ['japanese', 'vegetarian', 'vegan'] },

  // Indian
  { id: 22, name: 'Butter Chicken', imageUrl: 'https://live.staticflickr.com/2487/3682674116_13c8c362d8.jpg', tags: ['indian', 'gluten-free'] },
  { id: 23, name: 'Palak Paneer', imageUrl: 'https://live.staticflickr.com/65535/51524299371_c162e652d7.jpg', tags: ['indian', 'vegetarian', 'gluten-free'] },
  { id: 24, name: 'Vegetable Samosas', imageUrl: 'https://live.staticflickr.com/65535/52464483559_c5a4d4833d.jpg', tags: ['indian', 'vegetarian', 'vegan'] },
  { id: 25, name: 'Chicken Biryani', imageUrl: 'https://live.staticflickr.com/4708/38469582810_2c09ae3bf5.jpg', tags: ['indian', 'gluten-free'] },
  { id: 26, name: 'Garlic Naan Bread', imageUrl: 'https://live.staticflickr.com/8647/28944258283_f0a5cffa1e.jpg', tags: ['indian', 'vegetarian'] },
  { id: 27, name: 'Chana Masala', imageUrl: 'https://live.staticflickr.com/4054/4387825285_e7c5db4b9e.jpg', tags: ['indian', 'vegetarian', 'vegan', 'gluten-free'] },
  { id: 28, name: 'Lamb Rogan Josh', imageUrl: 'https://live.staticflickr.com/7103/7306651074_6068128292.jpg', tags: ['indian', 'gluten-free'] },
  
  // American
  { id: 29, name: 'Classic Cheeseburger', imageUrl: 'https://live.staticflickr.com/65535/54204041915_8dc023d75a.jpg', tags: ['american'] },
  { id: 30, name: 'Mac & Cheese', imageUrl: 'https://live.staticflickr.com/7115/7665948040_eaaa9ff52d.jpg', tags: ['american', 'vegetarian'] },
  { id: 31, name: 'BBQ Ribs', imageUrl: 'https://live.staticflickr.com/8460/7937195428_db675288f6.jpg', tags: ['american', 'gluten-free'] },
  { id: 32, name: 'Buffalo Wings', imageUrl: 'https://live.staticflickr.com/65535/50038308072_a7d7926732.jpg', tags: ['american'] },
  { id: 33, name: 'New York Hot Dog', imageUrl: 'https://live.staticflickr.com/5301/5665065426_f615f8c17c.jpg', tags: ['american'] },
  { id: 34, name: 'Southern Fried Chicken', imageUrl: 'https://live.staticflickr.com/3701/12797268644_71e859d5f9.jpg', tags: ['american'] },
  { id: 35, name: 'Philly Cheesesteak', imageUrl: 'https://live.staticflickr.com/2486/4155011640_04165dd53c.jpg', tags: ['american'] },

  // Chinese
  { id: 36, name: 'Sweet and Sour Pork', imageUrl: 'https://live.staticflickr.com/65535/51776416812_2eccf6f5ce.jpg', tags: ['chinese'] },
  { id: 37, name: 'Kung Pao Chicken', imageUrl: 'https://live.staticflickr.com/3080/3084332482_27ab623742.jpg', tags: ['chinese'] },
  { id: 38, name: 'Pork Dumplings', imageUrl: 'https://live.staticflickr.com/7462/15642507554_8748e4fd56.jpg', tags: ['chinese'] },
  { id: 39, name: 'Vegetable Spring Rolls', imageUrl: 'https://live.staticflickr.com/8635/16843783296_5e4291d0b5.jpg', tags: ['chinese', 'vegetarian', 'vegan'] },
  { id: 40, name: 'Yangzhou Fried Rice', imageUrl: 'https://live.staticflickr.com/65535/49372469837_40c76c84f4.jpg', tags: ['chinese'] },
  { id: 41, name: 'Peking Duck', imageUrl: 'https://live.staticflickr.com/1255/5120530144_209e1833f3.jpg', tags: ['chinese'] },
  { id: 42, name: 'Mapo Tofu', imageUrl: 'https://live.staticflickr.com/3479/3995394504_e04d561243.jpg', tags: ['chinese', 'vegetarian'] },
  
  // Thai
  { id: 43, name: 'Pad Thai', imageUrl: 'https://live.staticflickr.com/2626/4136823838_cfd4f577b9.jpg', tags: ['thai'] },
  { id: 44, name: 'Thai Green Curry', imageUrl: 'https://live.staticflickr.com/2818/11914615685_f1e50bb927.jpg', tags: ['thai', 'gluten-free', 'vegetarian'] },
  { id: 45, name: 'Tom Yum Goong', imageUrl: 'https://live.staticflickr.com/65535/48030259567_d6561a45df.jpg', tags: ['thai', 'gluten-free'] },
  { id: 46, name: 'Massaman Curry', imageUrl: 'https://live.staticflickr.com/7154/6454717327_6d89e5a185.jpg', tags: ['thai', 'gluten-free'] },
  { id: 47, name: 'Mango Sticky Rice', imageUrl: 'https://live.staticflickr.com/8441/7787157376_ecd831f711.jpg', tags: ['thai', 'vegetarian', 'vegan', 'gluten-free'] },

  // Mediterranean
  { id: 48, name: 'Falafel Wrap', imageUrl: 'https://live.staticflickr.com/65535/52620679853_843b17f5df.jpg', tags: ['mediterranean', 'vegetarian', 'vegan'] },
  { id: 49, name: 'Hummus with Pita', imageUrl: 'https://live.staticflickr.com/4038/4663481888_1fb1da78cb.jpg', tags: ['mediterranean', 'vegetarian', 'vegan'] },
  { id: 50, name: 'Chicken Shawarma', imageUrl: 'https://live.staticflickr.com/3841/14749481493_f532fe85f1.jpg', tags: ['mediterranean'] },

  // Vietnamese
  { id: 51, name: 'Beef Pho', imageUrl: 'https://live.staticflickr.com/8100/8569688407_9e21b10da6.jpg', tags: ['vietnamese', 'gluten-free'] },
  { id: 52, name: 'Banh Mi', imageUrl: 'https://live.staticflickr.com/4037/4398339405_a20d02ff3a.jpg', tags: ['vietnamese'] },
  { id: 53, name: 'Vietnamese Rice Paper Rolls', imageUrl: 'https://live.staticflickr.com/2828/34219220306_a77c065d6c.jpg', tags: ['vietnamese', 'gluten-free', 'vegetarian'] },
  { id: 54, name: 'Bun Cha', imageUrl: 'https://live.staticflickr.com/5158/14058746710_f3d8c2fb09.jpg', tags: ['vietnamese'] },

  // French
  { id: 55, name: 'Steak Frites', imageUrl: 'https://live.staticflickr.com/65535/51528473230_93ba543e0f.jpg', tags: ['french'] },
  { id: 56, name: 'Croque Monsieur', imageUrl: 'https://live.staticflickr.com/8368/8487676405_fe0939ec04.jpg', tags: ['french'] },
  { id: 57, name: 'French Onion Soup', imageUrl: 'https://live.staticflickr.com/7813/32541273417_f50395c847.jpg', tags: ['french'] },
  { id: 58, name: 'Crepes', imageUrl: 'https://live.staticflickr.com/3574/3484240931_c4fe70f530.jpg', tags: ['french', 'vegetarian'] },

  // British
  { id: 59, name: 'Fish and Chips', imageUrl: 'https://live.staticflickr.com/971/41801267122_29740be545.jpg', tags: ['british'] },
  { id: 60, name: 'Bangers and Mash', imageUrl: 'https://live.staticflickr.com/6188/6114744960_ec9c3a8c58.jpg', tags: ['british'] },
  { id: 61, name: 'Shepherd\'s Pie', imageUrl: 'https://live.staticflickr.com/2455/3583163932_da3a0d56e8.jpg', tags: ['british'] },
  
  // Australian
  { id: 62, name: 'Chicken Parmigiana', imageUrl: 'https://live.staticflickr.com/65535/51460542860_826cc0fba6.jpg', tags: ['australian'] },
  { id: 63, name: 'Aussie Meat Pie', imageUrl: 'https://live.staticflickr.com/5128/5252983151_1f2d02787d.jpg', tags: ['australian'] },
  { id: 64, name: 'Smashed Avocado on Toast', imageUrl: 'https://live.staticflickr.com/4292/35161789973_2b02dcf5ef.jpg', tags: ['australian', 'vegetarian'] },
  { id: 65, name: 'Grilled Barramundi', imageUrl: 'https://live.staticflickr.com/4772/39999277134_09fb8fda08.jpg', tags: ['australian', 'gluten-free'] },
  { id: 66, name: 'Sausage Sizzle', imageUrl: 'https://live.staticflickr.com/3675/19267974562_6447e66394.jpg', tags: ['australian'] },
  { id: 67, name: 'Lamb Roast', imageUrl: 'https://live.staticflickr.com/2619/4040499105_881816a8e7.jpg', tags: ['australian', 'gluten-free'] },
  { id: 68, name: 'Pavlova', imageUrl: 'https://live.staticflickr.com/5223/5883642894_45bb6ed410.jpg', tags: ['australian', 'vegetarian', 'gluten-free'] },
  
  // Greek
  { id: 69, name: 'Gyro Wrap', imageUrl: 'https://live.staticflickr.com/2829/12131361206_d79275cfe5.jpg', tags: ['greek'] },
  { id: 70, name: 'Moussaka', imageUrl: 'https://live.staticflickr.com/3363/3611026570_364983d091.jpg', tags: ['greek'] },
  { id: 71, name: 'Greek Salad', imageUrl: 'https://live.staticflickr.com/8018/7115564701_07b4d8559a.jpg', tags: ['greek', 'vegetarian', 'gluten-free'] },
  { id: 72, name: 'Souvlaki Skewers', imageUrl: 'https://live.staticflickr.com/5216/5414589495_0a00389108.jpg', tags: ['greek', 'gluten-free'] },
  { id: 73, name: 'Spanakopita', imageUrl: 'https://live.staticflickr.com/2440/3918724642_04fafcb959.jpg', tags: ['greek', 'vegetarian'] },

  // Korean
  { id: 74, name: 'Korean BBQ', imageUrl: 'https://live.staticflickr.com/7146/6642400495_13229d79dd.jpg', tags: ['korean'] },
  { id: 75, name: 'Bibimbap', imageUrl: 'https://live.staticflickr.com/8265/8603720210_f2741ddf2a.jpg', tags: ['korean', 'vegetarian'] },
  { id: 76, name: 'Kimchi Fried Rice', imageUrl: 'https://live.staticflickr.com/3823/10791850106_44ecbd14c6.jpg', tags: ['korean'] },
  { id: 77, name: 'Korean Fried Chicken', imageUrl: 'https://live.staticflickr.com/65535/52038860583_88b8b8e6b9.jpg', tags: ['korean'] },
  { id: 78, name: 'Japchae', imageUrl: 'https://live.staticflickr.com/65535/40927314363_87b1b57d56.jpg', tags: ['korean', 'vegetarian', 'vegan', 'gluten-free'] },
  
  // Spanish
  { id: 79, name: 'Seafood Paella', imageUrl: 'https://live.staticflickr.com/7584/27274653624_516c87bf75.jpg', tags: ['spanish', 'gluten-free'] },
  { id: 80, name: 'Patatas Bravas', imageUrl: 'https://live.staticflickr.com/747/32400071755_5882a9a7c7.jpg', tags: ['spanish', 'vegetarian'] },
  { id: 81, name: 'Gambas al Ajillo', imageUrl: 'https://live.staticflickr.com/3929/15419993116_5904963cb8.jpg', tags: ['spanish', 'gluten-free'] },
  { id: 82, name: 'Spanish Omelette', imageUrl: 'https://live.staticflickr.com/4837/31587777007_f8abd32e8e.jpg', tags: ['spanish', 'vegetarian', 'gluten-free'] },
  
  // More Vegetarian/Vegan
  { id: 83, name: 'Lentil Soup', imageUrl: 'https://live.staticflickr.com/1753/42644457711_8be66e0346.jpg', tags: ['vegetarian', 'vegan', 'gluten-free', 'mediterranean'] },
  { id: 84, name: 'Veggie Burger', imageUrl: 'https://live.staticflickr.com/1659/24631249666_cebd32a038.jpg', tags: ['vegetarian', 'vegan', 'american'] },
  { id: 85, name: 'Quinoa Salad', imageUrl: 'https://live.staticflickr.com/1931/45042880471_a4604a5d9c.jpg', tags: ['vegetarian', 'vegan', 'gluten-free'] },
  { id: 86, name: 'Eggplant Parmigiana', imageUrl: 'https://live.staticflickr.com/881/41758617114_295e4e81a7.jpg', tags: ['vegetarian', 'italian'] },
  { id: 87, name: 'Mushroom Tacos', imageUrl: 'https://live.staticflickr.com/7864/39956699103_20db3e0f8f.jpg', tags: ['vegetarian', 'vegan', 'mexican'] },
  { id: 88, name: 'Tofu Scramble', imageUrl: 'https://live.staticflickr.com/65535/50846031276_907f275fd8.jpg', tags: ['vegetarian', 'vegan', 'gluten-free'] },
  { id: 89, name: 'Stuffed Capsicum', imageUrl: 'https://live.staticflickr.com/8722/16908597607_5d3e892722.jpg', tags: ['vegetarian', 'gluten-free'] },
  { id: 90, name: 'Cauliflower Pizza', imageUrl: 'https://live.staticflickr.com/7262/7115347105_c89b973fd0.jpg', tags: ['vegetarian', 'gluten-free'] },

  // Desserts & Others
  { id: 91, name: 'New York Cheesecake', imageUrl: 'https://live.staticflickr.com/65535/51262202550_a65c383757.jpg', tags: ['american', 'vegetarian'] },
  { id: 92, name: 'Chocolate Brownie', imageUrl: 'https://live.staticflickr.com/6211/6307232813_8e17926d22.jpg', tags: ['american', 'vegetarian'] },
  { id: 93, name: 'Tiramisu', imageUrl: 'https://live.staticflickr.com/5061/5774179251_b8b8f1b07f.jpg', tags: ['italian', 'vegetarian'] },
  { id: 94, name: 'Acai Bowl', imageUrl: 'https://live.staticflickr.com/65535/51270106293_e940f395d7.jpg', tags: ['vegan', 'vegetarian', 'gluten-free'] },
  { id: 95, name: 'Poke Bowl', imageUrl: 'https://live.staticflickr.com/5649/22019271524_344b58c33f.jpg', tags: ['japanese', 'gluten-free'] },
  { id: 96, name: 'Shakshuka', imageUrl: 'https://live.staticflickr.com/8686/16130148254_4498d226e9.jpg', tags: ['mediterranean', 'vegetarian', 'gluten-free'] },
  { id: 97, name: 'Lobster Roll', imageUrl: 'https://live.staticflickr.com/2671/3949569972_c8bd3d0841.jpg', tags: ['american'] },
  { id: 98, name: 'Clam Chowder', imageUrl: 'https://live.staticflickr.com/4024/4258935558_071c74a224.jpg', tags: ['american'] },
  { id: 99, name: 'Gourmet Salad', imageUrl: 'https://live.staticflickr.com/812/40656963484_65280fb84c.jpg', tags: ['vegetarian', 'gluten-free'] },
  { id: 100, name: 'HSP', imageUrl: 'https://live.staticflickr.com/3758/33441434790_5df970aeb0.jpgg', tags: [] },
];
