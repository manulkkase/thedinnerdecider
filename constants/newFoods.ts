// New foods for Phase 1 expansion (merged with ALL_FOODS)
import { FoodItem } from '../types';

export const NEW_FOODS: FoodItem[] = [
    // === KOREAN (8) ===
    {
        id: 101, name: 'Bulgogi', imageUrl: '/images/Bulgogi.webp', tags: ['korean', 'gluten-free'], mood: ['comfort'],
        description: 'Bulgogi ("fire meat") is Korea\'s beloved marinated beef dish, featuring thin slices of sirloin or ribeye soaked in a sweet soy sauce marinade with garlic, sesame, and pear for natural tenderizing. Grilled over open flame or cooked on a hot plate, it\'s often wrapped in lettuce with rice and ssamjang for the perfect bite.',
        qaTitle: 'What does Bulgogi mean in Korean?',
        funFact: 'Bulgogi means "fire meat" in Korean, referring to the grilling method used to cook this marinated beef.',
        checklist: ['Thinly sliced marinated beef', 'Sweet and savory soy-based marinade', 'Grilled to perfection with slight char'],
        pairings: [{ type: 'Side', suggestion: 'Rice and lettuce wraps for ssam.', icon: '🥬' }]
    },
    {
        id: 102, name: 'Samgyeopsal', imageUrl: '/images/Samgyeopsal.webp', tags: ['korean', 'gluten-free'], mood: ['comfort'],
        description: 'Samgyeopsal ("three-layered meat") is thick-sliced pork belly grilled at the table in Korean BBQ restaurants. Diners grill the fatty slices until crispy, then wrap them in lettuce with garlic, ssamjang (spicy dipping paste), and kimchi. Often paired with soju, it\'s a quintessential Korean social dining experience.',
        qaTitle: 'What does Samgyeopsal mean?',
        funFact: 'Samgyeopsal literally means "three-layered meat," referring to the layers of pork belly.',
        checklist: ['Thick-cut pork belly slices', 'Grilled at the table', 'Wrapped in lettuce with ssamjang'],
        pairings: [{ type: 'Drink', suggestion: 'Soju is the classic pairing.', icon: '🍶' }]
    },
    {
        id: 103, name: 'Sundubu Jjigae', imageUrl: '/images/Sundubu Jjigae.webp', tags: ['korean', 'vegetarian'], mood: ['spicy', 'comfort'],
        description: 'Sundubu Jjigae is a fiery Korean soft tofu stew served bubbling hot in a stone pot. The silky uncurdled tofu swims in a spicy broth with vegetables and often seafood or pork, traditionally topped with a raw egg that cooks in the residual heat. A warming, soul-soothing Korean comfort food.',
        qaTitle: 'What type of tofu is used in Sundubu Jjigae?',
        funFact: 'This spicy soft tofu stew is often served bubbling hot, still cooking at your table.',
        checklist: ['Silky soft tofu in spicy broth', 'Served bubbling hot', 'Often topped with a raw egg'],
        pairings: [{ type: 'Side', suggestion: 'Steamed rice is essential.', icon: '🍚' }]
    },
    {
        id: 104, name: 'Kimchi Jjigae', imageUrl: '/images/Kimchi Jjigae.webp', tags: ['korean'], mood: ['spicy', 'comfort'],
        description: 'Kimchi Jjigae is a hearty Korean stew made with well-aged kimchi that\'s become too sour for eating raw. Simmered with pork belly, tofu, and gochugaru (Korean chili flakes), the fermented tanginess creates a rich, complex depth of flavor. Best eaten steaming hot with a bowl of white rice.',
        qaTitle: 'Why is aged kimchi used for Kimchi Jjigae?',
        funFact: 'This stew is traditionally made with aged kimchi, which gives it a deeper, more complex flavor.',
        checklist: ['Fermented kimchi in spicy pork broth', 'Tender chunks of pork or tofu', 'Rich, tangy, and warming'],
        pairings: [{ type: 'Side', suggestion: 'Best with a bowl of hot rice.', icon: '🍚' }]
    },
    {
        id: 105, name: 'Jajangmyeon', imageUrl: '/images/Jajangmyeon.webp', tags: ['korean'], mood: ['comfort'],
        description: 'Jajangmyeon is a Korean-Chinese fusion dish featuring chewy wheat noodles smothered in a thick black bean sauce (chunjang) with diced pork and vegetables. Traditionally eaten on April 14th ("Black Day") by singles in Korea, this comfort food is beloved for its sweet-savory umami depth and satisfying texture.',
        qaTitle: 'What is Black Day and why is Jajangmyeon eaten on it?',
        funFact: 'This Korean-Chinese black bean noodle dish is traditionally eaten on Black Day (April 14th) by singles.',
        checklist: ['Chewy noodles with black bean sauce', 'Diced pork and vegetables', 'Sweet and savory umami flavor'],
        pairings: [{ type: 'Side', suggestion: 'Yellow pickled radish (danmuji).', icon: '💛' }]
    },
    {
        id: 106, name: 'Dakgalbi', imageUrl: '/images/Dakgalbi.webp', tags: ['korean'], mood: ['spicy'],
        description: 'Dakgalbi is a spicy Korean stir-fry originating from Chuncheon, featuring marinated chicken thighs cooked tableside with sweet potato, rice cakes (tteok), and vegetables in a fiery gochujang sauce. Often topped with melted cheese and finished with fried rice made in the leftover sauce.',
        qaTitle: 'Where did Dakgalbi originate?',
        funFact: 'Dakgalbi originated in Chuncheon, South Korea, and is often cooked at the table in a large pan.',
        checklist: ['Spicy marinated chicken', 'Stir-fried with vegetables and rice cakes', 'Often topped with cheese'],
        pairings: [{ type: 'Addition', suggestion: 'Add cheese and fried rice at the end.', icon: '🧀' }]
    },
    {
        id: 107, name: 'Galbi', imageUrl: '/images/Galbi.webp', tags: ['korean', 'gluten-free'], mood: ['comfort'],
        description: 'Galbi (Korean short ribs) are beef ribs marinated in a sweet soy-sesame glaze and grilled until caramelized. A centerpiece of Korean BBQ, the meat is cut thin across the bone to allow quick cooking and easy eating. Often wrapped in lettuce with garlic, ssamjang, and rice for the perfect ssam.',
        qaTitle: 'How are Galbi ribs cut differently from Western ribs?',
        funFact: 'Galbi refers to grilled short ribs, a staple of Korean BBQ cuisine.',
        checklist: ['Marinated beef short ribs', 'Sweet soy-sesame glaze', 'Grilled until caramelized'],
        pairings: [{ type: 'Side', suggestion: 'Lettuce, garlic, and ssamjang for wrapping.', icon: '🥬' }]
    },
    {
        id: 108, name: 'Budae Jjigae', imageUrl: '/images/Budae Jjigae.webp', tags: ['korean'], mood: ['comfort', 'late-night'],
        description: 'Budae Jjigae ("Army Stew") was born from necessity after the Korean War, when Koreans near U.S. military bases combined surplus American ingredients (spam, hot dogs, beans) with Korean spicy broth. Today this fusion dish is a beloved comfort food, loaded with instant noodles, cheese, and kimchi.',
        qaTitle: 'Why is Budae Jjigae called Army Stew?',
        funFact: 'Known as "Army Stew," this dish was created after the Korean War using surplus American ingredients.',
        checklist: ['Spicy broth with spam and hot dogs', 'Instant noodles and cheese', 'A fusion of Korean and American flavors'],
        pairings: [{ type: 'Addition', suggestion: 'Add extra ramen noodles and cheese.', icon: '🍜' }]
    },
    // === SOUTHEAST ASIAN (7) ===
    {
        id: 109, name: 'Laksa', imageUrl: '/images/Laksa.webp', tags: ['malaysian'], mood: ['spicy', 'comfort'],
        description: 'Laksa is a spicy noodle soup from Malaysia and Singapore, featuring rice noodles in a rich coconut curry broth infused with lemongrass, galangal, and chili. Topped with prawns, tofu puffs, and bean sprouts, this aromatic dish comes in many regional varieties, with Penang and Singaporean curry laksa being most famous.',
        qaTitle: 'What are the different types of Laksa?',
        funFact: 'There are many types of laksa, but the creamy curry version from Penang and Singapore is most famous.',
        checklist: ['Rich coconut curry broth', 'Rice noodles or vermicelli', 'Prawns, tofu puffs, and bean sprouts'],
        pairings: [{ type: 'Addition', suggestion: 'Add extra chili paste for more heat.', icon: '🌶️' }]
    },
    {
        id: 110, name: 'Nasi Goreng', imageUrl: '/images/Nasi Goreng.webp', tags: ['indonesian'], mood: ['comfort'],
        description: 'Nasi Goreng ("fried rice") is Indonesia\'s national dish, featuring wok-fried rice with sweet soy sauce (kecap manis), aromatic spices, and often prawns or chicken. Distinguished by its darker color and sweeter flavor than Chinese fried rice, it\'s topped with a sunny-side-up egg and served with prawn crackers (kerupuk).',
        qaTitle: 'What makes Indonesian fried rice different from Chinese fried rice?',
        funFact: 'Nasi Goreng is Indonesia\'s national dish and means "fried rice" in Indonesian.',
        checklist: ['Wok-fried rice with sweet soy sauce', 'Topped with a fried egg', 'Served with prawn crackers'],
        pairings: [{ type: 'Side', suggestion: 'Kerupuk (prawn crackers) are essential.', icon: '🦐' }]
    },
    {
        id: 111, name: 'Char Kway Teow', imageUrl: '/images/Char Kway Teow.webp', tags: ['malaysian'], mood: ['comfort'],
        description: 'Char Kway Teow is a beloved Malaysian-Singaporean street food featuring flat rice noodles stir-fried at extremely high heat in a seasoned wok. The distinctive smoky "wok hei" flavor comes from this intense heat, while dark soy sauce, prawns, cockles, and Chinese sausage create layers of savory-sweet umami.',
        qaTitle: 'What is wok hei and why is it important for Char Kway Teow?',
        funFact: 'This smoky stir-fried noodle dish gets its distinctive flavor from cooking over high heat in a seasoned wok.',
        checklist: ['Flat rice noodles with dark soy', 'Prawns, cockles, and Chinese sausage', 'Smoky wok hei flavor'],
        pairings: [{ type: 'Note', suggestion: 'The smoky "wok hei" is the key.', icon: '🔥' }]
    },
    {
        id: 112, name: 'Beef Rendang', imageUrl: '/images/Beef Rendang.webp', tags: ['indonesian', 'gluten-free'], mood: ['spicy', 'comfort'],
        description: 'Beef Rendang is an Indonesian slow-cooked dry curry that was voted the world\'s most delicious food by CNN. Beef is simmered for hours in coconut milk with a complex spice paste until the liquid evaporates, leaving intensely flavored, meltingly tender meat coated in a thick, rich spice crust.',
        qaTitle: 'Why was Rendang voted the world\'s most delicious food?',
        funFact: 'Rendang was voted the world\'s most delicious food in a CNN poll.',
        checklist: ['Slow-cooked beef in coconut and spices', 'Rich, dry curry coating', 'Incredibly tender meat'],
        pairings: [{ type: 'Side', suggestion: 'Steamed jasmine rice.', icon: '🍚' }]
    },
    {
        id: 113, name: 'Hainanese Chicken Rice', imageUrl: '/images/Hainanese Chicken Rice.webp', tags: ['singaporean', 'gluten-free'], mood: ['light', 'comfort'],
        description: 'Hainanese Chicken Rice is Singapore\'s national dish, featuring silky poached chicken served over fragrant rice cooked in chicken fat and broth. Accompanied by ginger paste, chili sauce, and dark soy, this deceptively simple dish demands perfect technique to achieve its signature tender, silky chicken and aromatic rice.',
        qaTitle: 'Why is Hainanese Chicken Rice considered Singapore\'s national dish?',
        funFact: 'This dish is considered the national dish of Singapore, though it originated from Hainan, China.',
        checklist: ['Silky poached chicken', 'Fragrant rice cooked in chicken fat', 'Served with chili and ginger sauce'],
        pairings: [{ type: 'Sauce', suggestion: 'Don\'t skip the ginger and chili sauces.', icon: '🌶️' }]
    },
    {
        id: 114, name: 'Nasi Lemak', imageUrl: '/images/Nasi Lemak.webp', tags: ['malaysian'], mood: ['comfort'],
        description: 'Nasi Lemak ("fatty rice") is Malaysia\'s national dish, traditionally eaten for breakfast but enjoyed anytime. Fragrant coconut rice is served with spicy sambal, fried anchovies (ikan bilis), roasted peanuts, cucumber, hard-boiled egg, and often fried chicken. The fiery sambal is the soul of this dish.',
        qaTitle: 'What does Nasi Lemak mean in Malay?',
        funFact: 'Nasi Lemak is Malaysia\'s national dish, traditionally eaten for breakfast but enjoyed any time.',
        checklist: ['Coconut rice with sambal', 'Fried anchovies and peanuts', 'Cucumber, egg, and often fried chicken'],
        pairings: [{ type: 'Condiment', suggestion: 'The spicy sambal is the star.', icon: '🌶️' }]
    },
    {
        id: 115, name: 'Pad See Ew', imageUrl: '/images/Pad See Ew.webp', tags: ['thai'], mood: ['comfort'],
        description: 'Pad See Ew ("stir-fried soy sauce") is a popular Thai street food featuring wide, flat rice noodles stir-fried with dark soy sauce, Chinese broccoli (kai lan), egg, and your choice of protein. Less spicy than Pad Thai but equally beloved, it has a slightly sweet, smoky flavor from high-heat wok cooking.',
        qaTitle: 'What does Pad See Ew mean in Thai?',
        funFact: 'Pad See Ew means "stir-fried soy sauce" in Thai, and it\'s a popular street food dish.',
        checklist: ['Wide rice noodles with dark soy', 'Chinese broccoli and egg', 'Slightly sweet and smoky'],
        pairings: [{ type: 'Addition', suggestion: 'Add chili flakes and vinegar.', icon: '🌶️' }]
    },
    // === CHINESE/JAPANESE (5) ===
    {
        id: 116, name: 'Char Siu', imageUrl: '/images/Char Siu.webp', tags: ['chinese'], mood: ['comfort'],
        description: 'Char Siu ("fork roasted") is Cantonese BBQ pork with a distinctive red exterior and sweet, sticky glaze. Traditionally roasted on long forks in a specially designed oven, the pork is marinated in honey, five-spice, and hoisin, then glazed repeatedly to achieve its iconic caramelized coating and tender, juicy interior.',
        qaTitle: 'What does Char Siu mean in Cantonese?',
        funFact: 'Char Siu means "fork roasted" in Cantonese, referring to the traditional cooking method.',
        checklist: ['Sweet and sticky glazed pork', 'Caramelized red edges', 'Tender and juicy inside'],
        pairings: [{ type: 'Side', suggestion: 'Over rice or in ramen.', icon: '🍚' }]
    },
    {
        id: 117, name: 'Dan Dan Noodles', imageUrl: '/images/Dan Dan Noodles.webp', tags: ['chinese'], mood: ['spicy'],
        description: 'Dan Dan Noodles are a famous Sichuan street food, named after the wooden pole ("dan dan") that vendors used to carry their wares through the streets. Thin noodles are served in a sauce of chili oil, Sichuan peppercorns, minced pork, and preserved vegetables, delivering the signature "ma-la" (numbing-spicy) sensation.',
        qaTitle: 'What does Dan Dan mean in Dan Dan Noodles?',
        funFact: 'Named after the carrying pole ("dan dan") that street vendors used to sell this Sichuan street food.',
        checklist: ['Spicy Sichuan peppercorn sauce', 'Minced pork with preserved vegetables', 'Numbing and spicy flavor'],
        pairings: [{ type: 'Note', suggestion: 'Expect a tingly, numbing sensation from Sichuan peppercorns.', icon: '🌶️' }]
    },
    {
        id: 118, name: 'Okonomiyaki', imageUrl: '/images/Okonomiyaki.webp', tags: ['japanese'], mood: ['comfort', 'trendy'],
        description: 'Okonomiyaki ("grilled as you like it") is a savory Japanese pancake that you can customize with various fillings. Shredded cabbage is mixed into a batter with egg and flour, then cooked on a griddle with pork belly, seafood, or other toppings. Finished with okonomiyaki sauce, mayo, bonito flakes, and seaweed.',
        qaTitle: 'What does Okonomiyaki mean in Japanese?',
        funFact: 'Okonomiyaki means "grilled as you like it" - you can customize the fillings to your preference.',
        checklist: ['Savory cabbage pancake', 'Topped with mayo and okonomiyaki sauce', 'Often contains pork belly or seafood'],
        pairings: [{ type: 'Topping', suggestion: 'Bonito flakes and seaweed.', icon: '🐟' }]
    },
    {
        id: 119, name: 'Yakitori Platter', imageUrl: '/images/Yakitori Platter.webp', tags: ['japanese', 'gluten-free'], mood: ['light'],
        description: 'Yakitori ("grilled bird") are Japanese chicken skewers grilled over charcoal and seasoned with either tare (sweet soy glaze) or shio (salt). A yakitori-ya (specialty restaurant) offers every part of the chicken - from tender thigh meat to crispy skin, rich heart, and juicy tsukune (meatballs). Best with cold beer.',
        qaTitle: 'What parts of the chicken are used in Yakitori?',
        funFact: 'Yakitori literally means "grilled bird" and originated as a way to use every part of the chicken.',
        checklist: ['Grilled chicken skewers', 'Glazed with tare or salted', 'Various cuts including thigh, skin, and heart'],
        pairings: [{ type: 'Drink', suggestion: 'Ice cold beer or highball.', icon: '🍺' }]
    },
    {
        id: 120, name: 'Udon Noodle Soup', imageUrl: '/images/Udon Noodle Soup.webp', tags: ['japanese'], mood: ['comfort', 'light'],
        description: 'Udon Noodle Soup features thick, chewy wheat noodles in a delicate dashi-based broth. Sanuki udon from Kagawa prefecture is considered the finest, prized for its firm, bouncy texture. Simple toppings like tempura, soft-boiled egg, or green onions complement rather than overpower the subtle, satisfying flavors.',
        qaTitle: 'What region of Japan is famous for udon?',
        funFact: 'Sanuki udon from Kagawa prefecture is considered the finest, with thick, chewy noodles.',
        checklist: ['Thick, chewy wheat noodles', 'Light dashi-based broth', 'Simple toppings like tempura or egg'],
        pairings: [{ type: 'Addition', suggestion: 'Add a crispy tempura for texture.', icon: '🍤' }]
    },
    // === LATE NIGHT (15) ===
    {
        id: 121, name: 'Loaded Cheese Fries', imageUrl: '/images/Loaded Cheese Fries.webp', tags: ['american', 'vegetarian'], mood: ['late-night', 'comfort'],
        description: 'Loaded Cheese Fries are the ultimate American indulgence - crispy fries piled high with melted cheese, bacon bits, jalapeños, and various toppings. Originally a 1980s diner creation, they\'ve become a late-night staple, perfect for sharing (or not).',
        qaTitle: 'When did loaded fries become popular in America?',
        funFact: 'Loaded fries became an American diner staple in the 1980s.',
        checklist: ['Crispy fries piled high', 'Melted cheese and toppings', 'Often with bacon and jalapeños'],
        pairings: [{ type: 'Drink', suggestion: 'An ice cold soda or beer.', icon: '🍺' }]
    },
    {
        id: 122, name: 'Döner Kebab Plate', imageUrl: '/images/Döner Kebab Plate.webp', tags: ['mediterranean'], mood: ['late-night'],
        description: 'Döner Kebab Plate serves shaved meat from a rotating vertical spit over rice with fresh salad and the essential duo of garlic and chili sauces. Popularized in Berlin by Turkish immigrants in the 1970s, the döner has become Europe\'s beloved late-night street food.',
        qaTitle: 'Where was the modern döner kebab popularized?',
        funFact: 'The modern döner kebab was popularized in Berlin by Turkish immigrants in the 1970s.',
        checklist: ['Shaved meat from vertical spit', 'Served with rice and salad', 'Garlic and chili sauces'],
        pairings: [{ type: 'Sauce', suggestion: 'Both garlic and chili sauce are essential.', icon: '🧄' }]
    },
    {
        id: 123, name: 'Cheese Toastie Deluxe', imageUrl: '/images/Cheese Toastie Deluxe.webp', tags: ['australian', 'vegetarian'], mood: ['late-night', 'comfort'],
        description: 'The Cheese Toastie is Australian comfort food at its finest - thick bread toasted to golden perfection with gooey melted cheese inside. The "deluxe" version adds ham, tomato, or whatever else fits between those glorious slices. Best served hot with tomato soup for dunking.',
        qaTitle: 'What is the difference between a cheese toastie and a grilled cheese?',
        funFact: 'The humble cheese toastie has been an Australian comfort food staple for generations.',
        checklist: ['Perfectly golden crispy bread', 'Gooey melted cheese inside', 'Optional add-ins like ham or tomato'],
        pairings: [{ type: 'Side', suggestion: 'Tomato soup for dunking.', icon: '🍅' }]
    },
    {
        id: 124, name: 'Pad Kee Mao', imageUrl: '/images/Pad Kee Mao.webp', tags: ['thai'], mood: ['late-night', 'spicy'],
        description: 'Pad Kee Mao ("Drunken Noodles") is a Thai stir-fry featuring wide rice noodles with holy basil, chili, garlic, and vegetables. Legend says it\'s the perfect hangover cure, hence the name. The aromatic holy basil gives this fiery dish its distinctive, almost peppery flavor.',
        qaTitle: 'Why are Drunken Noodles called Drunken Noodles?',
        funFact: 'Also known as "Drunken Noodles," this dish is said to be a perfect late-night cure.',
        checklist: ['Wide rice noodles with Thai basil', 'Spicy stir-fry with vegetables', 'Smoky and aromatic'],
        pairings: [{ type: 'Note', suggestion: 'The holy basil gives its distinctive aroma.', icon: '🌿' }]
    },
    {
        id: 125, name: 'Garlic Butter Pasta', imageUrl: '/images/Garlic Butter Pasta.webp', tags: ['italian', 'vegetarian'], mood: ['late-night', 'comfort'],
        description: 'Garlic Butter Pasta (Aglio e Burro) is the quintessential late-night cooking - pasta tossed in butter infused with golden garlic, finished with Parmesan and parsley. Ready in under 15 minutes, this simple dish proves that comfort food doesn\'t need to be complicated.',
        qaTitle: 'Why is garlic butter pasta a popular late-night meal?',
        funFact: 'This simple pasta is a late-night favorite for its quick preparation and satisfying flavor.',
        checklist: ['Al dente pasta', 'Generous garlic butter sauce', 'Finished with parmesan and parsley'],
        pairings: [{ type: 'Addition', suggestion: 'Add chili flakes for heat.', icon: '🌶️' }]
    },
    {
        id: 126, name: 'Poutine', imageUrl: '/images/Poutine.webp', tags: ['american', 'vegetarian'], mood: ['late-night', 'comfort'],
        description: 'Poutine is Quebec, Canada\'s gift to late-night eating - crispy fries smothered in rich gravy and fresh cheese curds that squeak when you bite them. Born in rural Quebec in the late 1950s, authentic poutine requires real cheese curds, not shredded cheese.',
        qaTitle: 'What makes authentic poutine cheese curds special?',
        funFact: 'Poutine originated in Quebec, Canada in the late 1950s.',
        checklist: ['Crispy fries with cheese curds', 'Smothered in hot gravy', 'Curds must be fresh and squeaky'],
        pairings: [{ type: 'Note', suggestion: 'Authentic poutine uses fresh cheese curds that squeak.', icon: '🧀' }]
    },
    {
        id: 127, name: 'Bacon & Egg Roll', imageUrl: '/images/Bacon & Egg Roll.webp', tags: ['australian'], mood: ['late-night', 'comfort'],
        description: 'The Bacon & Egg Roll is an Australian institution - crispy bacon and a fried egg with runny yolk in a soft bread roll, finished with BBQ or tomato sauce. Whether it\'s breakfast, lunch, or 3am after a night out, this simple sandwich is always appropriate.',
        qaTitle: 'What makes the Australian bacon and egg roll special?',
        funFact: 'The bacon and egg roll is an Australian breakfast institution, perfect for any time of day.',
        checklist: ['Crispy bacon in a soft roll', 'Fried egg with runny yolk', 'BBQ or tomato sauce'],
        pairings: [{ type: 'Drink', suggestion: 'A flat white coffee.', icon: '☕' }]
    },
    {
        id: 128, name: 'Fried Rice Special', imageUrl: '/images/Fried Rice Special.webp', tags: ['chinese'], mood: ['late-night'],
        description: 'Fried Rice Special transforms day-old rice into a satisfying late-night meal, stir-fried at high heat with scrambled eggs, vegetables, and soy sauce. Originally a way to use leftover rice, this Chinese staple has become a universal comfort food.',
        qaTitle: 'Why is day-old rice better for fried rice?',
        funFact: 'Fried rice was created as a way to use leftover rice and vegetables.',
        checklist: ['Day-old rice stir-fried with egg', 'Mixed vegetables and protein', 'Seasoned with soy sauce'],
        pairings: [{ type: 'Side', suggestion: 'Prawn crackers on the side.', icon: '🦐' }]
    },
    {
        id: 129, name: 'Chicken Wrap', imageUrl: '/images/Chicken Wrap.webp', tags: ['american'], mood: ['late-night', 'light'],
        description: 'The Chicken Wrap became a 1990s phenomenon as a lighter, portable alternative to sandwiches. Grilled chicken, fresh lettuce, and your choice of sauce wrapped in a flour tortilla - it\'s the perfect grab-and-go meal when you need something satisfying but not heavy.',
        qaTitle: 'When did wraps become popular in America?',
        funFact: 'The wrap became popular in the 1990s as a healthier alternative to sandwiches.',
        checklist: ['Grilled chicken in a tortilla', 'Fresh lettuce and sauce', 'Easy to eat on the go'],
        pairings: [{ type: 'Sauce', suggestion: 'Ranch or garlic aioli.', icon: '🥛' }]
    },
    {
        id: 130, name: 'Lamb Souvlaki', imageUrl: '/images/Lamb Souvlaki.webp', tags: ['greek'], mood: ['late-night'],
        description: 'Lamb Souvlaki is Greece\'s answer to late-night cravings - tender grilled lamb tucked into warm pita with cool tzatziki, fresh tomatoes, and onions. Souvlaki shops are as essential to Greek nightlife as pubs are to Australia.',
        qaTitle: 'What is the role of souvlaki shops in Greek culture?',
        funFact: 'Souvlaki shops are the Greek equivalent of late-night kebab shops.',
        checklist: ['Grilled lamb in pita', 'Tzatziki and fresh vegetables', 'Wrapped for easy eating'],
        pairings: [{ type: 'Sauce', suggestion: 'Extra tzatziki.', icon: '🥛' }]
    },
    {
        id: 131, name: 'Beef Burrito', imageUrl: '/images/Beef Burrito.webp', tags: ['mexican'], mood: ['late-night', 'comfort'],
        description: 'The Beef Burrito as we know it was popularized in San Francisco in the 1960s - a large flour tortilla wrapped around seasoned beef, rice, beans, cheese, and salsa. This hefty, portable meal has become the ultimate late-night comfort food across the English-speaking world.',
        qaTitle: 'Where was the modern burrito popularized?',
        funFact: 'The burrito as we know it today was popularized in San Francisco in the 1960s.',
        checklist: ['Large flour tortilla with beef', 'Rice, beans, cheese, and salsa', 'Wrapped tight for eating'],
        pairings: [{ type: 'Side', suggestion: 'Chips and guac.', icon: '🥑' }]
    },
    {
        id: 132, name: 'Butter Chicken Wrap', imageUrl: '/images/Butter Chicken Wrap.webp', tags: ['indian'], mood: ['late-night', 'comfort'],
        description: 'Butter Chicken Wrap is a brilliant fusion - creamy, mildly spiced butter chicken tucked into warm naan or a soft tortilla with fresh mint chutney. This portable version of India\'s most beloved curry has become a go-to late-night option in multicultural cities.',
        qaTitle: 'What is a Butter Chicken Wrap?',
        funFact: 'A fusion creation combining the beloved butter chicken with portable wrap format.',
        checklist: ['Creamy butter chicken filling', 'In a warm naan or tortilla', 'Quick and portable'],
        pairings: [{ type: 'Sauce', suggestion: 'Mint chutney.', icon: '🌿' }]
    },
    {
        id: 133, name: 'Cheesy Garlic Bread', imageUrl: '/images/Cheesy Garlic Bread.webp', tags: ['italian', 'vegetarian'], mood: ['late-night', 'comfort'],
        description: 'Cheesy Garlic Bread is an American-Italian invention that has conquered the world - crusty bread generously brushed with garlic butter and topped with melted mozzarella. Whether as a side dish or a late-night snack, that combination of crispy, buttery, garlicky, and cheesy is irresistible.',
        qaTitle: 'Is garlic bread actually Italian?',
        funFact: 'Garlic bread as a side dish is largely an American-Italian invention.',
        checklist: ['Crispy baguette with garlic butter', 'Topped with melted mozzarella', 'Golden and bubbling'],
        pairings: [{ type: 'Note', suggestion: 'Great as a side or snack.', icon: '🍕' }]
    },
    {
        id: 134, name: 'Chicken Nuggets', imageUrl: '/images/Chicken Nuggets.webp', tags: ['american'], mood: ['late-night', 'comfort'],
        description: 'Chicken Nuggets were invented by Robert C. Baker at Cornell University in the 1950s. These bite-sized pieces of breaded, fried chicken have become a universal comfort food, perfect for dipping in BBQ sauce, honey mustard, or sweet chili.',
        qaTitle: 'Who invented the chicken nugget?',
        funFact: 'The chicken nugget was invented in the 1950s by Robert C. Baker at Cornell University.',
        checklist: ['Crispy breaded chicken pieces', 'Golden brown exterior', 'Perfect for dipping'],
        pairings: [{ type: 'Sauce', suggestion: 'BBQ, honey mustard, or sweet chili.', icon: '🍯' }]
    },
    {
        id: 135, name: 'Mozzarella Sticks', imageUrl: '/images/Mozzarella Sticks.webp', tags: ['american', 'vegetarian'], mood: ['late-night'],
        description: 'Mozzarella Sticks became an American restaurant staple in the 1970s - sticks of mozzarella cheese coated in seasoned breadcrumbs and fried until golden, with a stretchy cheese pull inside. Served with marinara sauce for dipping, they\'re the ultimate shareable appetizer.',
        qaTitle: 'When did mozzarella sticks become popular?',
        funFact: 'Mozzarella sticks became a popular appetizer in American restaurants during the 1970s.',
        checklist: ['Breaded and fried mozzarella', 'Stretchy cheese pull inside', 'Served with marinara'],
        pairings: [{ type: 'Sauce', suggestion: 'Marinara sauce for dipping.', icon: '🍅' }]
    },
    // === TRENDY (10) ===
    {
        id: 136, name: 'Birria Tacos', imageUrl: '/images/Birria Tacos.webp', tags: ['mexican'], mood: ['trendy', 'comfort'],
        description: 'Birria Tacos went viral on social media, transforming a traditional Jalisco stew into the trendiest taco of the decade. Slow-cooked beef in adobo is folded into a tortilla dipped in rich cooking fat, then griddled until crispy. Always served with consommé for dipping.',
        qaTitle: 'Why did Birria Tacos go viral?',
        funFact: 'Birria tacos went viral on social media, often dipped in consomé for extra flavor.',
        checklist: ['Slow-cooked beef in adobo', 'Crispy cheese-crusted tortilla', 'Served with rich consommé for dipping'],
        pairings: [{ type: 'Note', suggestion: 'The dipping consommé is essential.', icon: '🍲' }]
    },
    {
        id: 137, name: 'Korean Corn Dog', imageUrl: '/images/Korean Corn Dog.webp', tags: ['korean'], mood: ['trendy'],
        description: 'Korean Corn Dogs have taken street food to new heights with creative coatings like crispy potato cubes, ramen noodles, or rice puffs wrapped around stretchy mozzarella or hot dog (or both!). Often dusted with sugar for a sweet-savory combination, they\'re a global viral sensation.',
        qaTitle: 'What makes Korean corn dogs different from American corn dogs?',
        funFact: 'Korean corn dogs come with various coatings like potato cubes, ramen, or rice puffs.',
        checklist: ['Cheese or sausage on a stick', 'Crispy batter coating', 'Often rolled in sugar'],
        pairings: [{ type: 'Sauce', suggestion: 'Ketchup and mustard.', icon: '🌭' }]
    },
    {
        id: 138, name: 'Bao Buns', imageUrl: '/images/Bao Buns.webp', tags: ['chinese'], mood: ['trendy'],
        description: 'Bao Buns (Gua Bao) are pillowy steamed buns folded around slow-braised pork belly, pickled vegetables, and fresh cilantro. Originally Taiwanese street food, they became a global culinary trend after appearing on hip restaurant menus worldwide, celebrated for their perfect combination of textures.',
        qaTitle: 'Where did Bao Buns become a global food trend?',
        funFact: 'Gua bao (folded buns) became a global trend after appearing at hip restaurants worldwide.',
        checklist: ['Fluffy steamed bun', 'Filled with braised pork belly', 'Topped with pickled vegetables'],
        pairings: [{ type: 'Note', suggestion: 'The pillowy texture is key.', icon: '☁️' }]
    },
    {
        id: 139, name: 'Xiao Long Bao', imageUrl: '/images/Xiao Long Bao.webp', tags: ['chinese'], mood: ['trendy'],
        description: 'Xiao Long Bao (soup dumplings) are Shanghai\'s culinary marvel - delicate pleated dumplings containing pork filling and rich, hot broth. The soup is created by adding gelatinized stock to the filling, which melts when steamed. Eat carefully to avoid scalding!',
        qaTitle: 'How do Xiao Long Bao contain soup inside?',
        funFact: 'These soup dumplings contain gelatinized broth that melts when steamed.',
        checklist: ['Thin wrapper with soup inside', 'Carefully pleated top', 'Must be eaten with care to avoid spilling'],
        pairings: [{ type: 'Technique', suggestion: 'Bite carefully - there is hot soup inside!', icon: '🥟' }]
    },
    {
        id: 140, name: 'Smash Burger', imageUrl: '/images/Smash Burger.webp', tags: ['american'], mood: ['trendy', 'comfort'],
        description: 'Smash Burgers have revolutionized the burger world by smashing thin beef patties onto a screaming-hot griddle to maximize the crispy, caramelized Maillard crust. Often double-stacked with simple toppings, this technique delivers maximum flavor from minimal ingredients.',
        qaTitle: 'Why are smash burgers smashed?',
        funFact: 'Smash burgers are pressed thin on the griddle to maximize crispy, caramelized edges.',
        checklist: ['Thin patty smashed on griddle', 'Crispy lacy edges', 'Simple toppings, often double stacked'],
        pairings: [{ type: 'Side', suggestion: 'Crispy fries.', icon: '🍟' }]
    },
    {
        id: 141, name: 'Nashville Hot Chicken', imageUrl: '/images/Nashville Hot Chicken.webp', tags: ['american'], mood: ['trendy', 'spicy'],
        description: 'Nashville Hot Chicken is fiery fried chicken coated in a cayenne-heavy spice paste, served on white bread with pickles. Legend says it was created as "revenge" for a cheating boyfriend - now it\'s Tennessee\'s most famous export and a global spicy food phenomenon.',
        qaTitle: 'What is the origin story of Nashville Hot Chicken?',
        funFact: 'This fiery dish originated in Nashville as a revenge dish - now it\'s a beloved specialty.',
        checklist: ['Crispy fried chicken', 'Coated in cayenne pepper paste', 'Served on white bread with pickles'],
        pairings: [{ type: 'Note', suggestion: 'The heat level can be extreme - choose wisely!', icon: '🔥' }]
    },
    {
        id: 142, name: 'Crispy Pork Belly', imageUrl: '/images/Crispy Pork Belly.webp', tags: ['chinese'], mood: ['trendy', 'comfort'],
        description: 'Crispy Pork Belly is a masterclass in texture - shatteringly crisp crackling skin atop layers of tender meat and silky rendered fat. Achieving that perfect crackling requires drying the skin thoroughly before roasting at high temperature. A staple of Chinese BBQ restaurants.',
        qaTitle: 'How do you achieve crispy pork belly crackling?',
        funFact: 'The crackling skin is achieved by thoroughly drying the skin before roasting at high heat.',
        checklist: ['Crackling crispy skin', 'Tender meat underneath', 'Layer of rendered fat'],
        pairings: [{ type: 'Side', suggestion: 'Steamed rice and greens.', icon: '🍚' }]
    },
    {
        id: 143, name: 'Ramen Burger', imageUrl: '/images/Ramen Burger.webp', tags: ['japanese'], mood: ['trendy'],
        description: 'The Ramen Burger was created in Brooklyn in 2013 and became an instant icon of the food truck era. The bun is made from compressed, pan-fried ramen noodles, sandwiching a beef patty glazed with soy sauce and topped with arugula and scallions.',
        qaTitle: 'Where was the Ramen Burger invented?',
        funFact: 'Created in Brooklyn in 2013, the ramen burger uses compressed ramen noodles as the bun.',
        checklist: ['Ramen noodle "bun"', 'Beef patty with soy glaze', 'Arugula and scallion topping'],
        pairings: [{ type: 'Note', suggestion: 'A creative fusion of two favorites.', icon: '🍜' }]
    },
    {
        id: 144, name: 'Truffle Fries', imageUrl: '/images/Truffle Fries.webp', tags: ['french', 'vegetarian'], mood: ['trendy'],
        description: 'Truffle Fries became the signature side dish of gastropubs in the 2010s - crispy fries drizzled with truffle oil and finished with grated Parmesan. The earthy, luxurious aroma of truffle elevates the humble french fry into something indulgent.',
        qaTitle: 'When did truffle fries become popular?',
        funFact: 'Truffle fries became a gastropub staple in the 2010s.',
        checklist: ['Crispy fries with truffle oil', 'Sprinkled with parmesan', 'Aromatic and indulgent'],
        pairings: [{ type: 'Note', suggestion: 'The truffle aroma should be fragrant, not overpowering.', icon: '🍟' }]
    },
    {
        id: 145, name: 'Wagyu Beef Bowl', imageUrl: '/images/Wagyu Beef Bowl.webp', tags: ['japanese'], mood: ['trendy'],
        description: 'Wagyu Beef Bowl showcases Japan\'s prized Wagyu cattle, famous for their intense marbling that creates incredibly tender, buttery meat. Thin slices of Wagyu are seared quickly and served over seasoned rice, often with a raw egg yolk for added richness.',
        qaTitle: 'What makes Wagyu beef special?',
        funFact: 'Wagyu refers to Japanese cattle breeds known for their intense marbling.',
        checklist: ['Thinly sliced premium wagyu', 'Over seasoned rice', 'Often with egg yolk'],
        pairings: [{ type: 'Note', suggestion: 'The marbling should be visible.', icon: '🥩' }]
    },
    // === HEALTHY (5) ===
    {
        id: 146, name: 'Salmon Poke Bowl', imageUrl: '/images/Salmon Poke Bowl.webp', tags: ['japanese', 'gluten-free'], mood: ['light', 'trendy'],
        description: 'Salmon Poke Bowl features fresh cubed salmon marinated in soy sauce and sesame, served over sushi rice with avocado, edamame, and colorful vegetables. Poke (meaning "to slice" in Hawaiian) originated in Hawaii and has become a global healthy eating phenomenon.',
        qaTitle: 'What does poke mean in Hawaiian?',
        funFact: 'Poke originated in Hawaii and means "to slice" in Hawaiian.',
        checklist: ['Fresh cubed salmon', 'Over sushi rice or salad', 'Topped with avocado and edamame'],
        pairings: [{ type: 'Sauce', suggestion: 'Soy sauce or spicy mayo.', icon: '🥢' }]
    },
    {
        id: 147, name: 'Buddha Bowl', imageUrl: '/images/Buddha Bowl.webp', tags: ['vegetarian', 'vegan', 'gluten-free'], mood: ['light'],
        description: 'Buddha Bowls are named for their rounded, full appearance resembling Buddha\'s belly. These nourishing bowls combine grains, greens, plant proteins, and colorful vegetables, all topped with a flavorful dressing like tahini or peanut sauce.',
        qaTitle: 'Why are Buddha Bowls called Buddha Bowls?',
        funFact: 'Buddha bowls are named for their rounded, full appearance resembling Buddha\'s belly.',
        checklist: ['Grains, greens, and proteins', 'Colorful vegetables', 'Topped with a flavorful dressing'],
        pairings: [{ type: 'Dressing', suggestion: 'Tahini or peanut dressing.', icon: '🥜' }]
    },
    {
        id: 148, name: 'Cauliflower Rice Bowl', imageUrl: '/images/Cauliflower Rice Bowl.webp', tags: ['vegetarian', 'gluten-free'], mood: ['light'],
        description: 'Cauliflower Rice Bowl uses finely "riced" cauliflower as a low-carb alternative to traditional rice. Topped with grilled proteins or tofu, fresh vegetables, and flavorful dressings, it\'s become a staple for those following keto or low-carb diets.',
        qaTitle: 'Why is cauliflower rice popular?',
        funFact: 'Cauliflower rice became popular as a low-carb alternative to traditional rice.',
        checklist: ['Riced cauliflower base', 'Grilled proteins or tofu', 'Fresh vegetables and dressing'],
        pairings: [{ type: 'Note', suggestion: 'A great low-carb option.', icon: '🥦' }]
    },
    {
        id: 149, name: 'Grilled Chicken Salad', imageUrl: '/images/Grilled Chicken Salad.webp', tags: ['gluten-free'], mood: ['light'],
        description: 'Grilled Chicken Salad became popular during the health-conscious 1980s as a protein-packed, low-carb meal. Juicy grilled chicken breast over fresh mixed greens with a light vinaigrette - simple, satisfying, and endlessly customizable with toppings like avocado or feta.',
        qaTitle: 'When did grilled chicken salads become popular?',
        funFact: 'The addition of grilled chicken to salads became popular in the health-conscious 1980s.',
        checklist: ['Juicy grilled chicken breast', 'Fresh mixed greens', 'Light vinaigrette dressing'],
        pairings: [{ type: 'Topping', suggestion: 'Avocado or feta cheese.', icon: '🥑' }]
    },
    {
        id: 150, name: 'Zucchini Noodles', imageUrl: '/images/Zucchini Noodles.webp', tags: ['vegetarian', 'gluten-free', 'vegan'], mood: ['light'],
        description: 'Zucchini Noodles ("zoodles") became a diet trend as a low-carb, gluten-free pasta substitute. Spiralized zucchini is served raw or lightly sautéed with marinara, pesto, or other sauces - a simple way to add more vegetables to your diet while still enjoying pasta-like dishes.',
        qaTitle: 'What are zoodles?',
        funFact: 'Zoodles became a diet trend as a pasta substitute for low-carb eating.',
        checklist: ['Spiralized zucchini noodles', 'Light sauce or pesto', 'Topped with vegetables or protein'],
        pairings: [{ type: 'Sauce', suggestion: 'Marinara or pesto.', icon: '🍅' }]
    },
];
