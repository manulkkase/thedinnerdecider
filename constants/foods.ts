// Populated constants/foods.ts with actual data to resolve module errors.
import { FoodItem } from '../types';

export const DIETARY_OPTIONS = [
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'gluten-free', label: 'Gluten-Free' },
];

export const CUISINE_OPTIONS = [
  { value: 'italian', label: 'Italian' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'indian', label: 'Indian' },
  { value: 'american', label: 'American' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'thai', label: 'Thai' },
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'vietnamese', label: 'Vietnamese' },
  { value: 'french', label: 'French' },
  { value: 'british', label: 'British' },
  { value: 'australian', label: 'Australian' },
  { value: 'greek', label: 'Greek' },
  { value: 'korean', label: 'Korean' },
  { value: 'spanish', label: 'Spanish' },
];

export const ALL_FOODS: FoodItem[] = [
  // Italian
  { id: 1, name: 'Margherita Pizza', imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2070&auto=format&fit=crop', tags: ['italian', 'vegetarian'] },
  { id: 2, name: 'Spaghetti Carbonara', imageUrl: 'https://images.unsplash.com/photo-1608796335039-f472198942ca?q=80&w=2070&auto=format&fit=crop', tags: ['italian'] },
  { id: 3, name: 'Lasagna', imageUrl: 'https://images.unsplash.com/photo-1574894709920-31b29d817b19?q=80&w=2070&auto=format&fit=crop', tags: ['italian'] },
  { id: 4, name: 'Mushroom Risotto', imageUrl: 'https://images.unsplash.com/photo-1595908129321-99a43640236a?q=80&w=2070&auto=format&fit=crop', tags: ['italian', 'vegetarian', 'gluten-free'] },
  { id: 5, name: 'Spinach & Ricotta Ravioli', imageUrl: 'https://images.unsplash.com/photo-1579631542720-3a838353e8e3?q=80&w=1974&auto=format&fit=crop', tags: ['italian', 'vegetarian'] },
  { id: 6, name: 'Fettuccine Alfredo', imageUrl: 'https://images.unsplash.com/photo-1621852004169-345dba442429?q=80&w=1974&auto=format&fit=crop', tags: ['italian', 'vegetarian'] },
  { id: 7, name: 'Gnocchi with Pesto', imageUrl: 'https://images.unsplash.com/photo-1642939026727-a065a44356c9?q=80&w=1974&auto=format&fit=crop', tags: ['italian', 'vegetarian'] },

  // Mexican
  { id: 8, name: 'Tacos al Pastor', imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop', tags: ['mexican'] },
  { id: 9, name: 'Burrito Bowl', imageUrl: 'https://images.unsplash.com/photo-1511994293839-3424d68e5944?q=80&w=1965&auto=format&fit=crop', tags: ['mexican', 'gluten-free'] },
  { id: 10, name: 'Cheese Quesadillas', imageUrl: 'https://images.unsplash.com/photo-1565576324997-16d1f8f74a82?q=80&w=2070&auto=format&fit=crop', tags: ['mexican', 'vegetarian'] },
  { id: 11, name: 'Chicken Enchiladas', imageUrl: 'https://images.unsplash.com/photo-1631892534576-f385c7f212f4?q=80&w=2070&auto=format&fit=crop', tags: ['mexican'] },
  { id: 12, name: 'Guacamole with Chips', imageUrl: 'https://images.unsplash.com/photo-1572455044439-d04b3979842a?q=80&w=1974&auto=format&fit=crop', tags: ['mexican', 'vegan', 'vegetarian', 'gluten-free'] },
  { id: 13, name: 'Nachos Supreme', imageUrl: 'https://images.unsplash.com/photo-1598495033785-834c3a7b9b12?q=80&w=2070&auto=format&fit=crop', tags: ['mexican', 'vegetarian'] },
  { id: 14, name: 'Fish Tacos', imageUrl: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2070&auto=format&fit=crop', tags: ['mexican'] },
  
  // Japanese
  { id: 15, name: 'Sushi Platter', imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop', tags: ['japanese'] },
  { id: 16, name: 'Tonkotsu Ramen', imageUrl: 'https://images.unsplash.com/photo-1552633602-52b455feb650?q=80&w=2070&auto=format&fit=crop', tags: ['japanese'] },
  { id: 17, name: 'Vegetable Tempura', imageUrl: 'https://images.unsplash.com/photo-1626202157360-6c39ea9f55e0?q=80&w=2070&auto=format&fit=crop', tags: ['japanese', 'vegetarian', 'vegan'] },
  { id: 18, name: 'Chicken Teriyaki Don', imageUrl: 'https://images.unsplash.com/photo-1606703043997-c03b717596e8?q=80&w=1974&auto=format&fit=crop', tags: ['japanese'] },
  { id: 19, name: 'Miso Soup', imageUrl: 'https://images.unsplash.com/photo-1621371510191-3a65b323c6f9?q=80&w=1974&auto=format&fit=crop', tags: ['japanese', 'vegan', 'vegetarian', 'gluten-free'] },
  { id: 20, name: 'Chicken Katsu Curry', imageUrl: 'https://images.unsplash.com/photo-1536873691909-651a05297556?q=80&w=1964&auto=format&fit=crop', tags: ['japanese'] },
  { id: 21, name: 'Agedashi Tofu', imageUrl: 'https://images.unsplash.com/photo-1588820690132-72836836b761?q=80&w=2070&auto=format&fit=crop', tags: ['japanese', 'vegetarian', 'vegan'] },

  // Indian
  { id: 22, name: 'Butter Chicken', imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2022&auto=format&fit=crop', tags: ['indian', 'gluten-free'] },
  { id: 23, name: 'Palak Paneer', imageUrl: 'https://images.unsplash.com/photo-1631452180519-c084f3a40051?q=80&w=2070&auto=format&fit=crop', tags: ['indian', 'vegetarian', 'gluten-free'] },
  { id: 24, name: 'Vegetable Samosas', imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70b50?q=80&w=2070&auto=format&fit=crop', tags: ['indian', 'vegetarian', 'vegan'] },
  { id: 25, name: 'Chicken Biryani', imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1932&auto=format&fit=crop', tags: ['indian', 'gluten-free'] },
  { id: 26, name: 'Garlic Naan Bread', imageUrl: 'https://images.unsplash.com/photo-1628543599823-d349385c414d?q=80&w=1974&auto=format&fit=crop', tags: ['indian', 'vegetarian'] },
  { id: 27, name: 'Chana Masala', imageUrl: 'https://images.unsplash.com/photo-1631206148383-a4e9a4f43e33?q=80&w=2070&auto=format&fit=crop', tags: ['indian', 'vegetarian', 'vegan', 'gluten-free'] },
  { id: 28, name: 'Lamb Rogan Josh', imageUrl: 'https://images.unsplash.com/photo-1625398407494-43431634c5d1?q=80&w=2070&auto=format&fit=crop', tags: ['indian', 'gluten-free'] },
  
  // American
  { id: 29, name: 'Classic Cheeseburger', imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop', tags: ['american'] },
  { id: 30, name: 'Mac & Cheese', imageUrl: 'https://images.unsplash.com/photo-1621996346565-e326a22f053f?q=80&w=2070&auto=format&fit=crop', tags: ['american', 'vegetarian'] },
  { id: 31, name: 'BBQ Ribs', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop', tags: ['american', 'gluten-free'] },
  { id: 32, name: 'Buffalo Wings', imageUrl: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=2070&auto=format&fit=crop', tags: ['american'] },
  { id: 33, name: 'New York Hot Dog', imageUrl: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?q=80&w=2070&auto=format&fit=crop', tags: ['american'] },
  { id: 34, name: 'Southern Fried Chicken', imageUrl: 'https://images.unsplash.com/photo-1626645737590-72a3993a4a03?q=80&w=2070&auto=format&fit=crop', tags: ['american'] },
  { id: 35, name: 'Philly Cheesesteak', imageUrl: 'https://images.unsplash.com/photo-1625732230219-58b354e6a629?q=80&w=2070&auto=format&fit=crop', tags: ['american'] },

  // Chinese
  { id: 36, name: 'Sweet and Sour Pork', imageUrl: 'https://images.unsplash.com/photo-1598421830154-150993517c5b?q=80&w=2070&auto=format&fit=crop', tags: ['chinese'] },
  { id: 37, name: 'Kung Pao Chicken', imageUrl: 'https://images.unsplash.com/photo-1606728035253-491a3dc82a47?q=80&w=2070&auto=format&fit=crop', tags: ['chinese'] },
  { id: 38, name: 'Pork Dumplings', imageUrl: 'https://images.unsplash.com/photo-1627286392523-cf22b0704c66?q=80&w=2070&auto=format&fit=crop', tags: ['chinese'] },
  { id: 39, name: 'Vegetable Spring Rolls', imageUrl: 'https://images.unsplash.com/photo-1585129883836-68853612d26d?q=80&w=2070&auto=format&fit=crop', tags: ['chinese', 'vegetarian', 'vegan'] },
  { id: 40, name: 'Yangzhou Fried Rice', imageUrl: 'https://images.unsplash.com/photo-1609573887965-f685f09b5e5a?q=80&w=1934&auto=format&fit=crop', tags: ['chinese'] },
  { id: 41, name: 'Peking Duck', imageUrl: 'https://images.unsplash.com/photo-1625638133503-7f2a74c4a4e1?q=80&w=1974&auto=format&fit=crop', tags: ['chinese'] },
  { id: 42, name: 'Mapo Tofu', imageUrl: 'https://images.unsplash.com/photo-1597331891963-f2226b527788?q=80&w=2070&auto=format&fit=crop', tags: ['chinese', 'vegetarian'] },
  
  // Thai
  { id: 43, name: 'Pad Thai', imageUrl: 'https://images.unsplash.com/photo-1563873400-972153a99264?q=80&w=1964&auto=format&fit=crop', tags: ['thai'] },
  { id: 44, name: 'Thai Green Curry', imageUrl: 'https://images.unsplash.com/photo-1628585352636-f033881478d3?q=80&w=1964&auto=format&fit=crop', tags: ['thai', 'gluten-free', 'vegetarian'] },
  { id: 45, name: 'Tom Yum Goong', imageUrl: 'https://images.unsplash.com/photo-1625143320343-cf8c86954200?q=80&w=2070&auto=format&fit=crop', tags: ['thai', 'gluten-free'] },
  { id: 46, name: 'Massaman Curry', imageUrl: 'https://images.unsplash.com/photo-1560189244-96425a81a7b1?q=80&w=1974&auto=format&fit=crop', tags: ['thai', 'gluten-free'] },
  { id: 47, name: 'Mango Sticky Rice', imageUrl: 'https://images.unsplash.com/photo-1582538189335-e6f0a4540a93?q=80&w=2070&auto=format&fit=crop', tags: ['thai', 'vegetarian', 'vegan', 'gluten-free'] },

  // Mediterranean
  { id: 48, name: 'Falafel Wrap', imageUrl: 'https://images.unsplash.com/photo-1569718212165-d3de8ccb96c1?q=80&w=2070&auto=format&fit=crop', tags: ['mediterranean', 'vegetarian', 'vegan'] },
  { id: 49, name: 'Hummus with Pita', imageUrl: 'https://images.unsplash.com/photo-1630409351239-445754552431?q=80&w=1974&auto=format&fit=crop', tags: ['mediterranean', 'vegetarian', 'vegan'] },
  { id: 50, name: 'Chicken Shawarma', imageUrl: 'https://images.unsplash.com/photo-1603580544552-0cf4a5f1a523?q=80&w=2070&auto=format&fit=crop', tags: ['mediterranean'] },

  // Vietnamese
  { id: 51, name: 'Beef Pho', imageUrl: 'https://images.unsplash.com/photo-1547595584-7a3b7a107e3d?q=80&w=1974&auto=format&fit=crop', tags: ['vietnamese', 'gluten-free'] },
  { id: 52, name: 'Banh Mi', imageUrl: 'https://images.unsplash.com/photo-1567382215190-281b93f11413?q=80&w=2070&auto=format&fit=crop', tags: ['vietnamese'] },
  { id: 53, name: 'Vietnamese Rice Paper Rolls', imageUrl: 'https://images.unsplash.com/photo-1568813664742-9da54f0a7c4a?q=80&w=1974&auto=format&fit=crop', tags: ['vietnamese', 'gluten-free', 'vegetarian'] },
  { id: 54, name: 'Bun Cha', imageUrl: 'https://images.unsplash.com/photo-1579254559461-a58f435b3400?q=80&w=2070&auto=format&fit=crop', tags: ['vietnamese'] },

  // French
  { id: 55, name: 'Steak Frites', imageUrl: 'https://images.unsplash.com/photo-1625938144347-cf4a9585a974?q=80&w=1974&auto=format&fit=crop', tags: ['french'] },
  { id: 56, name: 'Croque Monsieur', imageUrl: 'https://images.unsplash.com/photo-1639014169225-b4c65a0438a0?q=80&w=2070&auto=format&fit=crop', tags: ['french'] },
  { id: 57, name: 'French Onion Soup', imageUrl: 'https://images.unsplash.com/photo-1546833224-50019447432f?q=80&w=2070&auto=format&fit=crop', tags: ['french'] },
  { id: 58, name: 'Crepes', imageUrl: 'https://images.unsplash.com/photo-1598214886806-2c51a5a8f344?q=80&w=2070&auto=format&fit=crop', tags: ['french', 'vegetarian'] },

  // British
  { id: 59, name: 'Fish and Chips', imageUrl: 'https://images.unsplash.com/photo-1579208036284-13a1b7e4f16b?q=80&w=1974&auto=format&fit=crop', tags: ['british'] },
  { id: 60, name: 'Bangers and Mash', imageUrl: 'https://images.unsplash.com/photo-1598285078598-a1e6ce485458?q=80&w=2070&auto=format&fit=crop', tags: ['british'] },
  { id: 61, name: 'Shepherd\'s Pie', imageUrl: 'https://images.unsplash.com/photo-1633513298642-a185b3a43886?q=80&w=2070&auto=format&fit=crop', tags: ['british'] },
  
  // Australian
  { id: 62, name: 'Chicken Parmigiana', imageUrl: 'https://images.unsplash.com/photo-1598514982901-ae62c1a63414?q=80&w=2070&auto=format&fit=crop', tags: ['australian'] },
  { id: 63, name: 'Aussie Meat Pie', imageUrl: 'https://images.unsplash.com/photo-1534433703639-5e7448d3c52a?q=80&w=1974&auto=format&fit=crop', tags: ['australian'] },
  { id: 64, name: 'Smashed Avocado on Toast', imageUrl: 'https://images.unsplash.com/photo-1580436496464-98425121b637?q=80&w=1939&auto=format&fit=crop', tags: ['australian', 'vegetarian'] },
  { id: 65, name: 'Grilled Barramundi', imageUrl: 'https://images.unsplash.com/photo-1598511657316-f34b9d09c63a?q=80&w=2070&auto=format&fit=crop', tags: ['australian', 'gluten-free'] },
  { id: 66, name: 'Sausage Sizzle', imageUrl: 'https://images.unsplash.com/photo-1554522855-40a234587524?q=80&w=2070&auto=format&fit=crop', tags: ['australian'] },
  { id: 67, name: 'Lamb Roast', imageUrl: 'https://images.unsplash.com/photo-1625869483329-1fa76571597a?q=80&w=2070&auto=format&fit=crop', tags: ['australian', 'gluten-free'] },
  { id: 68, name: 'Pavlova', imageUrl: 'https://images.unsplash.com/photo-1543336297-c2c6a04b1e5a?q=80&w=1974&auto=format&fit=crop', tags: ['australian', 'vegetarian', 'gluten-free'] },
  
  // Greek
  { id: 69, name: 'Gyro Wrap', imageUrl: 'https://images.unsplash.com/photo-1627102213123-7e4b95fca782?q=80&w=1974&auto=format&fit=crop', tags: ['greek'] },
  { id: 70, name: 'Moussaka', imageUrl: 'https://images.unsplash.com/photo-1632770283437-00f735d971a1?q=80&w=2070&auto=format&fit=crop', tags: ['greek'] },
  { id: 71, name: 'Greek Salad', imageUrl: 'https://images.unsplash.com/photo-1505253716362-afb74979ceb7?q=80&w=2070&auto=format&fit=crop', tags: ['greek', 'vegetarian', 'gluten-free'] },
  { id: 72, name: 'Souvlaki Skewers', imageUrl: 'https://images.unsplash.com/photo-1599307718417-31a89c322b28?q=80&w=2070&auto=format&fit=crop', tags: ['greek', 'gluten-free'] },
  { id: 73, name: 'Spanakopita', imageUrl: 'https://images.unsplash.com/photo-1579782433249-16a7c366e6bd?q=80&w=2070&auto=format&fit=crop', tags: ['greek', 'vegetarian'] },

  // Korean
  { id: 74, name: 'Korean BBQ', imageUrl: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2069&auto=format&fit=crop', tags: ['korean'] },
  { id: 75, name: 'Bibimbap', imageUrl: 'https://images.unsplash.com/photo-1584278858536-525169a53cfe?q=80&w=1974&auto=format&fit=crop', tags: ['korean', 'vegetarian'] },
  { id: 76, name: 'Kimchi Fried Rice', imageUrl: 'https://images.unsplash.com/photo-1628430026775-103d1519541a?q=80&w=2070&auto=format&fit=crop', tags: ['korean'] },
  { id: 77, name: 'Korean Fried Chicken', imageUrl: 'https://images.unsplash.com/photo-1618214392233-a261a8799443?q=80&w=2070&auto=format&fit=crop', tags: ['korean'] },
  { id: 78, name: 'Japchae', imageUrl: 'https://images.unsplash.com/photo-1633501738734-789a7f61c6b1?q=80&w=2070&auto=format&fit=crop', tags: ['korean', 'vegetarian', 'vegan', 'gluten-free'] },
  
  // Spanish
  { id: 79, name: 'Seafood Paella', imageUrl: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2070&auto=format&fit=crop', tags: ['spanish', 'gluten-free'] },
  { id: 80, name: 'Patatas Bravas', imageUrl: 'https://images.unsplash.com/photo-1585114518712-45e05d15f838?q=80&w=2070&auto=format&fit=crop', tags: ['spanish', 'vegetarian'] },
  { id: 81, name: 'Gambas al Ajillo', imageUrl: 'https://images.unsplash.com/photo-1625944026802-756c4b99b517?q=80&w=1974&auto=format&fit=crop', tags: ['spanish', 'gluten-free'] },
  { id: 82, name: 'Spanish Omelette', imageUrl: 'https://images.unsplash.com/photo-1574223450373-633a69b13f38?q=80&w=2070&auto=format&fit=crop', tags: ['spanish', 'vegetarian', 'gluten-free'] },
  
  // More Vegetarian/Vegan
  { id: 83, name: 'Lentil Soup', imageUrl: 'https://images.unsplash.com/photo-1592394533824-9141e1585613?q=80&w=2070&auto=format&fit=crop', tags: ['vegetarian', 'vegan', 'gluten-free', 'mediterranean'] },
  { id: 84, name: 'Veggie Burger', imageUrl: 'https://images.unsplash.com/photo-1550305103-a4e1d3e1a0a5?q=80&w=2070&auto=format&fit=crop', tags: ['vegetarian', 'vegan', 'american'] },
  { id: 85, name: 'Quinoa Salad', imageUrl: 'https://images.unsplash.com/photo-1513221539328-8924031a01c4?q=80&w=1974&auto=format&fit=crop', tags: ['vegetarian', 'vegan', 'gluten-free'] },
  { id: 86, name: 'Eggplant Parmigiana', imageUrl: 'https://images.unsplash.com/photo-1633513298642-a185b3a43886?q=80&w=2070&auto=format&fit=crop', tags: ['vegetarian', 'italian'] },
  { id: 87, name: 'Mushroom Tacos', imageUrl: 'https://images.unsplash.com/photo-1606756790138-261d2b217a1d?q=80&w=2070&auto=format&fit=crop', tags: ['vegetarian', 'vegan', 'mexican'] },
  { id: 88, name: 'Tofu Scramble', imageUrl: 'https://images.unsplash.com/photo-1621251378395-5d3e0c2f7813?q=80&w=2070&auto=format&fit=crop', tags: ['vegetarian', 'vegan', 'gluten-free'] },
  { id: 89, name: 'Stuffed Bell Peppers', imageUrl: 'https://images.unsplash.com/photo-1599924199652-320d7f1b213b?q=80&w=1974&auto=format&fit=crop', tags: ['vegetarian', 'gluten-free'] },
  { id: 90, name: 'Cauliflower Pizza', imageUrl: 'https://images.unsplash.com/photo-1564936282834-26f63868b31a?q=80&w=1974&auto=format&fit=crop', tags: ['vegetarian', 'gluten-free'] },

  // Desserts & Others
  { id: 91, name: 'New York Cheesecake', imageUrl: 'https://images.unsplash.com/photo-1565790742321-2b1527a92593?q=80&w=2070&auto=format&fit=crop', tags: ['american', 'vegetarian'] },
  { id: 92, name: 'Chocolate Brownie', imageUrl: 'https://images.unsplash.com/photo-1606890356614-67b143c72b2a?q=80&w=2070&auto=format&fit=crop', tags: ['american', 'vegetarian'] },
  { id: 93, name: 'Tiramisu', imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2070&auto=format&fit=crop', tags: ['italian', 'vegetarian'] },
  { id: 94, name: 'Acai Bowl', imageUrl: 'https://images.unsplash.com/photo-1565071559227-20ab25b7685e?q=80&w=1974&auto=format&fit=crop', tags: ['vegan', 'vegetarian', 'gluten-free'] },
  { id: 95, name: 'Poke Bowl', imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop', tags: ['japanese', 'gluten-free'] },
  { id: 96, name: 'Shakshuka', imageUrl: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=1974&auto=format&fit=crop', tags: ['mediterranean', 'vegetarian', 'gluten-free'] },
  { id: 97, name: 'Lobster Roll', imageUrl: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop', tags: ['american'] },
  { id: 98, name: 'Clam Chowder', imageUrl: 'https://images.unsplash.com/photo-1542837338-83161494548d?q=80&w=2070&auto=format&fit=crop', tags: ['american'] },
  { id: 99, name: 'Gourmet Salad', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop', tags: ['vegetarian', 'gluten-free'] },
  { id: 100, name: 'Poutine', imageUrl: 'https://images.unsplash.com/photo-1588437029548-771649983949?q=80&w=2070&auto=format&fit=crop', tags: [] },
];
