export type Language = 'fa' | 'en'
export type MenuItem = {
  id: string
  name: [string, string]
  price: string | null
  description?: [string, string]
  vegetarian?: boolean
  fresh?: boolean
  spicy?: boolean
}
export type MenuCategory = {
  id: string
  name: [string, string]
  note: [string, string]
  image: string
  source: string
  items: MenuItem[]
}
type Dish = [string, string, string | null, string?, string?, string?]

const dishes = (category: string, rows: Dish[]): MenuItem[] => rows.map(([fa, en, price, descriptionFa, descriptionEn, flags = ''], index) => ({
  id: `${category}-${index}`,
  name: [fa, en],
  price: price && price !== '0' ? price : null,
  description: descriptionFa ? [descriptionFa, descriptionEn || descriptionFa] : undefined,
  vegetarian: flags.includes('v'),
  fresh: flags.includes('n'),
  spicy: flags.includes('s'),
}))

export const menu: MenuCategory[] = [
  {
    id: 'breakfast', name: ['صبحانه', 'Breakfast'], note: ['صبح‌ها، از ۸:۳۰ تا ۱۲. با نان تازهٔ آشپزخانهٔ باگرو.', 'Served from 8:30 to 12, with bread from the Bagro kitchen.'], image: '/images/bagro-interior.jpg', source: '/menu/breakfast.webp',
    items: dishes('breakfast', [
      ['برانچ باگرو', 'Bagro brunch', '1.119', 'سوسیس روده‌ای، پوره سیب‌زمینی، تخم‌مرغ نیمرو، نان باگرو', 'Sausage, potato purée, fried eggs and Bagro bread'],
      ['کروک مادام', 'Croque madame', '807', 'مرغ، نیمرو، بادمجان گریل، گوجه خشک، بشامل و پنیر خامه‌ای', 'Chicken, fried egg, grilled aubergine, sun-dried tomato, béchamel and cream cheese'],
      ['املت مدیسون', 'Madison omelette', '689', 'بادمجان رست، گوجه خشک، موزارلا، زیتون سیاه و سبزیجات', 'Roasted aubergine, sun-dried tomato, mozzarella, black olives and vegetables', 'vn'],
      ['املت اسپانیش', 'Spanish omelette', '807', 'فیله مرغ، فلفل دلمه، سیب‌زمینی، گوجه گیلاسی و جعفری', 'Chicken fillet, peppers, potato, cherry tomatoes and parsley'],
      ['املت باگرو', 'Bagro omelette', '794', 'اسفناج، قارچ، پارمیزان، سبزیجات تازه و پوره سیب‌زمینی', 'Spinach, mushrooms, parmesan, fresh vegetables and potato purée', 'v'],
      ['املت ایزابلا', 'Isabella omelette', '843', 'پپرونی، قارچ، فلفل دلمه، گوجه و پنیر', 'Pepperoni, mushrooms, peppers, tomato and cheese', 's'],
      ['املت ایرانی', 'Persian omelette', '392', 'گوجه، پیاز، فلفل دلمه، پیاز قرمز و ریحان', 'Tomatoes, onions, peppers, red onion and basil', 'v'],
      ['پنکیک شکلات و توت‌فرنگی', 'Chocolate & strawberry pancakes', '841', undefined, undefined, 'v'],
      ['پنکیک موز و کره بادام‌زمینی', 'Banana & peanut butter pancakes', '776', undefined, undefined, 'v'],
      ['پنکیک کره و عسل', 'Butter & honey pancakes', '713', undefined, undefined, 'v'],
      ['آب‌پرتقال تازه', 'Fresh orange juice', '227', undefined, undefined, 'v'],
    ]),
  },
  {
    id: 'italian', name: ['پیتزای ایتالیایی', 'Italian pizza'], note: ['خمیر با تخمیر آرام، موزارلای تازه. پیشنهاد می‌کنیم بدون کچاپ میل کنید.', 'Slow-fermented dough and fresh mozzarella. Best enjoyed without ketchup.'], image: '/images/bagro-pizza.jpg', source: '/menu/italian.webp',
    items: dishes('italian', [
      ['آمانته دلاکارنه', 'Amante della carne', '1.626', 'فیله گوساله، موزارلا، پیاز قرمز، فلفل دلمه کاراملی و سس گوجه', 'Beef fillet, mozzarella, red onion, caramelised peppers and tomato sauce'],
      ['پیتزا میگو', 'Prawn pizza', '1.481', 'میگو، قارچ، هالوپینو، موزارلا، ریحان و بشامل', 'Prawns, mushrooms, jalapeño, mozzarella, basil and béchamel', 'n'],
      ['پیتزا روستا', 'Rustic pizza', '1.411', 'گوشت، پیاز قرمز، زیتون، قارچ، گوجه، فلفل و موزارلای دست‌ساز', 'Beef, red onion, olives, mushrooms, tomato, peppers and handmade mozzarella', 'n'],
      ['پیتزا ساسیج و ریحان', 'Sausage & basil', '1.418', 'گوشت طعم‌دار، ریحان، پیاز قرمز، موزارلا، روغن زیتون و سماق', 'Seasoned meat, basil, red onion, mozzarella, olive oil and sumac'],
      ['کالزونه بیف', 'Beef calzone', '1.862', 'رست‌بیف با پخت ۱۲ ساعته، فلفل، زیتون، موزارلا و بشامل', '12-hour roast beef, peppers, olives, mozzarella and béchamel'],
      ['پپرونی به سبک باگرو', 'Bagro-style pepperoni', '1.426', 'پپرونی ارمنی، برگ سیب‌زمینی، زیتون سیاه و موزارلای تازه', 'Armenian pepperoni, potato crisps, black olives and fresh mozzarella'],
      ['روکوپستو', 'Rucopesto', '1.521', 'مرغ، سس پستو، موزارلا، گوجه، روکولا و سماق', 'Chicken, pesto, mozzarella, tomato, rocket and sumac'],
      ['پیتزا پولو', 'Pollo pizza', '1.506', 'مرغ، بادمجان رست، گوجه خشک، موزارلا و سس گوجه', 'Chicken, roasted aubergine, sun-dried tomato, mozzarella and tomato sauce'],
      ['کالزونه مرغ و پستو', 'Chicken & pesto calzone', '1.585', 'مرغ، قارچ، زیتون، گوجه خشک، پستوی ریحان و موزارلا', 'Chicken, mushrooms, olives, sun-dried tomato, basil pesto and mozzarella'],
      ['پیتزا پیئون', 'Onion pizza', '1.196', 'پیاز قرمز و سفید، پیاز کاراملی، زیتون، بالزامیک، موزارلا و پارمیزان', 'Red, white and caramelised onions, olives, balsamic, mozzarella and parmesan', 'vn'],
      ['پیتزا کچو په‌په', 'Cacio e pepe pizza', '1.338', 'موزارلا، پنیر کوزه، پارمیزان، روغن زیتون و فلفل کراش', 'Mozzarella, jar cheese, parmesan, olive oil and crushed pepper', 'v'],
      ['پیتزا فونگی', 'Funghi pizza', '1.076', 'قارچ با کره، زیتون سیاه، پوره سیر و موزارلای تازه', 'Buttery mushrooms, black olives, garlic purée and fresh mozzarella', 'v'],
      ['پیتزا برای وجترین‌ها', 'Vegetarian pizza', '1.263', 'فلفل رنگی، بادمجان رست، قارچ، موزارلا، پنیر لیقوان و بالزامیک', 'Roasted peppers, aubergine, mushrooms, mozzarella, Lighvan cheese and balsamic', 'v'],
      ['پیتزا مارگاریتا', 'Margherita', '946', 'سس گوجه، موزارلای دست‌ساز و ریحان', 'Tomato sauce, handmade mozzarella and basil', 'v'],
    ]),
  },
  {
    id: 'american', name: ['پیتزای آمریکایی', 'American pizza'], note: ['خمیر آماده‌شده در آشپزخانهٔ باگرو؛ با امکان انتخاب خمیر استاف کراست.', 'Made in the Bagro kitchen, with a stuffed-crust option.'], image: '/images/bagro-pizza.jpg', source: '/menu/american.webp',
    items: dishes('american', [
      ['پیتزا مخصوص', 'Special pizza', '1.352', 'کالباس، سوسیس، قارچ، فلفل، گوجه و زیتون سبز', 'Cold cuts, sausage, mushrooms, peppers, tomato and green olives'],
      ['پیتزا استاف کراست', 'Stuffed-crust pizza', '1.495', 'کالباس، قارچ، فلفل، کنجد و سیاه‌دانه', 'Cold cuts, mushrooms, peppers, sesame and nigella seeds'],
      ['پیتزا پپرونی', 'Pepperoni pizza', '1.034', 'پپرونی، گوجه و زیتون سیاه', 'Pepperoni, tomato and black olives'],
      ['نیویورک پیتزا', 'New York pizza', '1.633', 'گوساله آرام‌پز، موزارلا، گوجه، بشامل، بادمجان و جعفری', 'Slow-cooked beef, mozzarella, tomato, béchamel, aubergine and parsley'],
      ['پیتزا استاف کراست مانزو', 'Manzo stuffed crust', '1.649', 'قارچ، گوشت چرخ‌کرده و خمیر پرشده با پنیر خامه‌ای', 'Mushrooms, minced beef and a cream cheese-filled crust'],
      ['پیتزا مانزو', 'Manzo pizza', '1.523', 'قارچ و گوشت چرخ‌کرده تازه', 'Mushrooms and fresh minced beef'],
      ['پیتزا استیک', 'Steak pizza', '1.356', 'فیله گوشت، گوجه، موزارلای تازه و پارمیزان', 'Beef fillet, tomato, fresh mozzarella and parmesan'],
      ['پیتزا چیکن پارسلی', 'Chicken parsley pizza', '1.169', 'مرغ، پنیر، گوجه، قارچ، فلفل دلمه، جعفری و پیاز', 'Chicken, cheese, tomato, mushrooms, peppers, parsley and onion'],
      ['پیتزا سبزیجات', 'Vegetable pizza', '931', 'قارچ، فلفل، گوجه، زیتون سیاه و سبز و ذرت', 'Mushrooms, peppers, tomato, black and green olives and corn', 'v'],
    ]),
  },
  {
    id: 'burger', name: ['برگر و ساندویچ', 'Burgers & sandwiches'], note: ['برگرهای گریل‌شده بدون روغن، نان دست‌ساز و ادویه‌های باگرو.', 'Oil-free grilled burgers, house-made bread and Bagro seasoning.'], image: '/images/bagro-interior.jpg', source: '/menu/burger.webp',
    items: dishes('burger', [
      ['ساندویچ استیک سوپریم', 'Supreme steak sandwich', '1.251', 'فیله گوساله، کاهو فرانسوی، گوجه و سیر کنفی و سس سوپریم', 'Beef fillet, French lettuce, confit tomato and garlic, supreme sauce', 'n'],
      ['ساندویچ میت بال', 'Meatball sandwich', '1.149', 'گوشت، موزارلای دست‌ساز، سس پومودورو و ریحان', 'Meatballs, handmade mozzarella, pomodoro sauce and basil', 'n'],
      ['آیولی برگر', 'Aioli burger', '1.326', 'برگر ۱۵۰ گرمی، گودا، فلفل، گوجه، ریحان، پیاز کاراملی و آیولی', '150g grilled beef, gouda, peppers, tomato, basil, caramelised onion and aioli'],
      ['شیراز برگر', 'Shiraz burger', '1.228', 'برگر ۱۵۰ گرمی، پستو، موزارلا، پیاز قرمز، ریحان و خیارشور', '150g grilled beef, pesto, mozzarella, red onion, basil and pickles'],
      ['چیکن پستو', 'Chicken pesto', '1.036', 'مرغ، قارچ، پستوی گوجه خشک، ریحان و پنیر پستو', 'Chicken, mushrooms, sun-dried tomato pesto, basil and pesto cheese', 'n'],
      ['چیکن پارم', 'Chicken parm', '1.020', 'مرغ آرام‌پز، سس مارینارا، ریحان و نان باگرو', 'Slow-cooked chicken, marinara, basil and Bagro bread'],
      ['اسموکی چیکن', 'Smoky chicken', '944', 'مرغ، گودا، سس باربیکیو و سیب‌زمینی لقمه‌ای', 'Chicken, gouda, barbecue sauce and bite-size potatoes'],
      ['رست بیف', 'Roast beef', '1.530', 'گوشت با پخت ۱۲ ساعته، پیاز کاراملی، آیولی، خیارشور و کاهو', '12-hour beef, caramelised onion, aioli, pickles and lettuce'],
      ['واشینگتن برگر', 'Washington burger', '1.677', 'برگر ۲۴۰ گرمی، گودا، سس واشینگتن، فلفل و گوجه گریل', '240g grilled beef, gouda, Washington sauce, grilled peppers and tomato'],
      ['گرین برگر', 'Green burger', '1.325', 'برگر ۱۵۰ گرمی، پنیر پستو و ریحان، قارچ و نان تست‌شده', '150g grilled beef, pesto-basil cheese, mushrooms and toasted bread'],
      ['وجترین', 'Vegetarian sandwich', null, 'موزارلا، گوجه و ریحان تازه، روغن زیتون و مارینارا؛ به‌زودی', 'Fresh mozzarella, tomato, basil, olive oil and marinara. Coming soon.', 'v'],
    ]),
  },
  {
    id: 'pasta', name: ['پاستا', 'Pasta'], note: ['خمیر پاستا و اسپاگتی دست‌ساز، با آرد سمولینا و تخم‌مرغ تازه.', 'Pasta and spaghetti made by hand with semolina and fresh eggs.'], image: '/images/bagro-pasta.jpg', source: '/menu/pasta.webp',
    items: dishes('pasta', [
      ['پاستا میگو', 'Prawn pasta', '1.859', 'میگو، قارچ، فلفل رنگی، سس گوجه، پارمیزان و سیر', 'Prawns, mushrooms, peppers, tomato sauce, parmesan and garlic', 'n'],
      ['راویولی گوشت', 'Beef ravioli', '1.269', 'گوشت، پنیر، سس کدوحلوایی، زرده تخم‌مرغ و پارمیزان', 'Beef, cheese, pumpkin sauce, egg yolk and parmesan', 'n'],
      ['پاستا آلفردو مرغ', 'Chicken alfredo', '1.437', 'مرغ، قارچ، سس آلفردو، پارمیزان و سیر', 'Chicken, mushrooms, alfredo sauce, parmesan and garlic'],
      ['پاستا مخصوص', 'Bagro special pasta', '1.388', 'مرغ، سس پستو، پارمیزان و ریحان', 'Chicken, pesto, parmesan and basil'],
      ['پاستا فیلتو', 'Filetto pasta', '1.717', 'فیله گوساله، سس گوجه، پارمیزان، هویج و سیر', 'Beef fillet, tomato sauce, parmesan, carrot and garlic'],
      ['پاستا وجترین', 'Vegetarian pasta', '1.058', 'قارچ، فلفل رنگی، هویج، سس گوجه و پارمیزان', 'Mushrooms, peppers, carrot, tomato sauce and parmesan', 'v'],
      ['پاستا آلفردو گوشت', 'Beef alfredo', '1.871', 'فیله گوساله، قارچ، آلفردو و پارمیزان', 'Beef fillet, mushrooms, alfredo and parmesan'],
      ['اسپاگتی میگو', 'Prawn spaghetti', null, 'میگو، پستوی ریحان، فلفل رست، بشامل و گوجه خشک', 'Prawns, basil pesto, roasted peppers, béchamel and sun-dried tomato', 'n'],
      ['اسپاگتی میت بال', 'Meatball spaghetti', '1.455', 'گوشت، سس پومودورو، روغن زیتون، پارمیزان و رزماری', 'Meatballs, pomodoro sauce, olive oil, parmesan and rosemary', 'n'],
      ['اسپاگتی ولنتاین', 'Valentine spaghetti', '1.317', 'مرغ، آویشن، مارینارا، سیر و پارمیزان', 'Chicken, thyme, marinara, garlic and parmesan'],
      ['اسپاگتی مرغ و پستو', 'Chicken pesto spaghetti', '1.403', 'مرغ، سس پستو، پارمیزان و سیر', 'Chicken, pesto, parmesan and garlic', 'n'],
      ['اسپاگتی پومودورو', 'Pomodoro spaghetti', '1.084', 'سس پومودورو، ریحان، روغن زیتون و پارمیزان', 'Pomodoro sauce, basil, olive oil and parmesan', 'v'],
      ['اسپاگتی کچو په‌په', 'Cacio e pepe spaghetti', '1.063', 'شیر، موزارلا، پنیر کوزه، پارمیزان و فلفل', 'Milk, mozzarella, jar cheese, parmesan and pepper', 'v'],
    ]),
  },
  {
    id: 'lasagna', name: ['لازانیا و هات‌داگ', 'Lasagna & hotdogs'], note: ['ورق لازانیای دست‌ساز و هات‌داگ‌های آماده‌شده در فر.', 'Handmade lasagna sheets and oven-prepared hotdogs.'], image: '/images/bagro-pasta.jpg', source: '/menu/lasagna.webp',
    items: dishes('lasagna', [
      ['لازانیا گوشت', 'Beef lasagna', '1.474', 'گوشت، بشامل، قارچ کره‌ای، پنیر و مارینارا', 'Beef, béchamel, buttery mushrooms, cheese and marinara'],
      ['لازانیا پولد بیف', 'Pulled beef lasagna', '1.724', 'گوشت ۱۲ ساعته، بشامل، موزارلا و پیاز کاراملی', '12-hour beef, béchamel, mozzarella and caramelised onions', 'n'],
      ['لازانیا مرغ و اسفناج', 'Chicken & spinach lasagna', '1.287', 'مرغ، اسفناج، قارچ، بشامل و موزارلا', 'Chicken, spinach, mushrooms, béchamel and mozzarella', 'n'],
      ['لازانیا مرغ و بادمجان', 'Chicken & aubergine lasagna', '1.299', 'مرغ، بادمجان رست، گوجه خشک، بشامل و مارینارا', 'Chicken, roasted aubergine, sun-dried tomato, béchamel and marinara', 'n'],
      ['لازانیا مرغ و پستو', 'Chicken & pesto lasagna', '1.324', 'مرغ، پستو، قارچ، بشامل، موزارلا و جعفری', 'Chicken, pesto, mushrooms, béchamel, mozzarella and parsley', 'n'],
      ['لازانیا برای وجترین‌ها', 'Vegetarian lasagna', '1.143', 'فلفل رنگی، بادمجان، قارچ، بشامل، سیب‌زمینی و مارینارا', 'Peppers, aubergine, mushrooms, béchamel, potato and marinara', 'vn'],
      ['هات داگ تنوری', 'Oven hotdog', '1.417', 'سوسیس، سس هات‌داگ باگرو، چیپس و پنیر', 'Sausage, Bagro hotdog sauce, crisps and cheese'],
      ['هات داگ تنوری پیاز جعفری', 'Onion & parsley hotdog', '1.458', 'سوسیس، سس باگرو، چیپس، پنیر، پیاز و جعفری', 'Sausage, Bagro sauce, crisps, cheese, onion and parsley'],
      ['چیلی داگ', 'Chilli dog', '1.554', 'سوسیس، پپرونی، چیلی، سس باگرو، چیپس و پنیر', 'Sausage, pepperoni, chilli, Bagro sauce, crisps and cheese', 's'],
    ]),
  },
  {
    id: 'salad', name: ['سالاد و بشقاب‌ها', 'Salads & plates'], note: ['سس‌های دست‌ساز با پایهٔ روغن زیتون و سبزیجات تازه.', 'House-made dressings with olive oil and fresh vegetables.'], image: '/images/bagro-interior.jpg', source: '/menu/salad.webp',
    items: dishes('salad', [
      ['سالاد اسفناج', 'Spinach salad', '967', 'بیبی اسفناج، کاهو فرانسوی، گردو کاراملی، میوه فصل و پنیر', 'Baby spinach, French lettuce, caramelised walnuts, seasonal fruit and cheese', 'vn'],
      ['سالاد مدیترانه', 'Mediterranean salad', '975', 'کاهو، گوجه، نخود، گوجه خشک، گیشنیز و سس شوید', 'Lettuce, tomato, chickpeas, sun-dried tomato, coriander and dill dressing', 'v'],
      ['سالاد سبز', 'Green salad', '954', 'کاهو، بروکلی، سیب سبز، پنیر، گردو و نان تست', 'Lettuce, broccoli, green apple, cheese, walnuts and toast', 'v'],
      ['سالاد بوستون', 'Boston salad', '945', 'کاهو، روکولا، تربچه، جعفری، پیاز قرمز، بادام و سس خردل', 'Lettuce, rocket, radish, parsley, red onion, almonds and mustard dressing', 'v'],
      ['سالاد اسپانیش', 'Spanish salad', '1.228', 'کاهو، مرغ گریل، زیتون، گوجه و تخمه آفتابگردان', 'Lettuce, grilled chicken, olives, tomato and sunflower seeds'],
      ['سالاد ایتالیایی', 'Italian salad', '1.143', 'کاهو، مرغ، زیتون، گوجه، نان تست، ذرت و پنیر', 'Lettuce, chicken, olives, tomato, toast, corn and cheese'],
      ['سالاد فرانسوی', 'French salad', '1.358', 'کاهو فرانسوی، گوشت، زیتون، گوجه و نان تست کره‌ای', 'French lettuce, beef, olives, tomato and buttered toast'],
      ['بشقاب فیله استیک', 'Fillet steak plate', '2.053', 'فیله گوساله، سس گلدن، سس انار و سبزیجات', 'Beef fillet, golden sauce, pomegranate sauce and vegetables', 'n'],
      ['بشقاب کاری‌ورست', 'Currywurst plate', '1.868', 'سوسیس گوشت، سس کاری، سیب‌زمینی تنوری و نان گریل', 'Beef sausage, curry sauce, baked potatoes and grilled bread', 'n'],
    ]),
  },
  {
    id: 'soup', name: ['سیب‌زمینی و سوپ', 'Potatoes & soup'], note: ['سیب‌زمینی تنوری بدون روغن؛ برای سوپ روز از مهماندار بپرسید.', 'Oil-free baked potatoes. Ask your host about the soup of the day.'], image: '/images/bagro-interior.jpg', source: '/menu/soup.webp',
    items: dishes('soup', [
      ['سیب‌زمینی طعم‌دار', 'Seasoned potatoes', '505', 'سیب‌زمینی تنوری، ادویه و سس ماست', 'Baked potatoes, seasoning and yoghurt sauce', 'v'],
      ['سوپ کدوحلوایی', 'Pumpkin soup', null],
      ['سوپ جو', 'Barley soup', null],
      ['سوپ سیب‌زمینی', 'Potato soup', null],
      ['سوپ بروکلی', 'Broccoli soup', null],
      ['سوپ اسفناج', 'Spinach soup', null],
    ]),
  },
  {
    id: 'dessert', name: ['دسر و پیش‌غذا', 'Desserts & starters'], note: ['شیرینی‌های روزانه، با کره و بدون مارگارین.', 'Freshly made sweets with butter, without margarine.'], image: '/images/bagro-interior.jpg', source: '/menu/dessert.webp',
    items: dishes('dessert', [
      ['تارت', 'Tart', null, undefined, undefined, 'v'],
      ['چیز کیک نیویورکی', 'New York cheesecake', null, undefined, undefined, 'v'],
      ['فلن', 'Flan', null, undefined, undefined, 'v'],
      ['تیرامیسو', 'Tiramisu', null, undefined, undefined, 'v'],
      ['دسر شیشه‌ای', 'Dessert jar', null, undefined, undefined, 'v'],
      ['حمص', 'Hummus', '333', 'نخود، ارده، خرما، جعفری و پاپریکا', 'Chickpeas, tahini, dates, parsley and paprika', 'vn'],
      ['بابا قنوش', 'Baba ganoush', '313', 'بادمجان رست، ارده، سیر و ادویه باگرو', 'Roasted aubergine, tahini, garlic and Bagro spices', 'vn'],
      ['دیپ پنیر', 'Cheese dip', '426', 'پنیر لبنه، گوجه و سیر کنفی و روغن زیتون', 'Labneh, confit tomato and garlic, olive oil', 'vn'],
    ]),
  },
  {
    id: 'cafe', name: ['کافه', 'Café'], note: ['قهوه با ترکیب ۸۰/۲۰، از اسپرسو تا آخرین جرعهٔ چای.', 'Bagro’s 80/20 coffee blend, from espresso to a final cup of tea.'], image: '/images/bagro-interior.jpg', source: '/menu/cafe.webp',
    items: dishes('cafe', [
      ['اسپرسو', 'Espresso', '284'], ['آمریکانو', 'Americano', '284'], ['لاته', 'Latte', '355'], ['کاپوچینو', 'Cappuccino', '355'], ['کورتادو', 'Cortado', '375'], ['ماکیاتو', 'Macchiato', '454'], ['موکا', 'Mocha', '454'], ['آفوگاتو', 'Affogato', '486'], ['آیس لاته', 'Iced latte', '355'], ['آیس آمریکانو', 'Iced americano', '295'],
      ['شیک شکلات و بری', 'Chocolate & berry shake', '595', undefined, undefined, 'n'], ['شیک شکلات و کوکی', 'Chocolate & cookie shake', '405', undefined, undefined, 'n'], ['شیک بیسکویت و قهوه', 'Biscuit & coffee shake', '535'], ['شیک فندق', 'Hazelnut shake', '598'], ['هات چاکلت کلاسیک', 'Classic hot chocolate', '358', undefined, undefined, 'n'], ['هات چاکلت بادام‌زمینی', 'Peanut hot chocolate', '385', undefined, undefined, 'n'], ['هات چاکلت فندق', 'Hazelnut hot chocolate', '385', undefined, undefined, 'n'], ['چای زعفران', 'Saffron tea', '285'], ['چای دارچین', 'Cinnamon tea', '265'], ['چای کرک', 'Karak tea', '350'], ['چای ماسالا', 'Masala chai', '350', undefined, undefined, 'n'], ['دمنوش پنیرک و لاوندر', 'Mallow & lavender infusion', '245'], ['دمنوش بابونه', 'Chamomile infusion', '245'], ['آیس تی', 'Iced tea', '345', 'چای، به‌لیمو، لیمو، نعنا و سودا', 'Tea, lemon verbena, lemon, mint and soda'], ['شربت شیراز', 'Shiraz sherbet', '335', 'تخم شربتی، گلاب و زعفران', 'Basil seeds, rosewater and saffron'],
    ]),
  },
  {
    id: 'drinks', name: ['نوشیدنی‌های سرد', 'Cold drinks'], note: ['با سیروپ‌های دست‌ساز و بدون مواد نگهدارنده.', 'Made with house-made syrups, without preservatives.'], image: '/images/bagro-interior.jpg', source: '/menu/drinks.webp',
    items: dishes('drinks', [
      ['لمون مینت', 'Lemon mint', '238', 'لیمو، نعنا و سودا', 'Lemon, mint and soda'], ['اپل فیز', 'Apple fizz', '238', 'سیب، رزماری و سودا', 'Apple, rosemary and soda'], ['سان ست اسپارکلینگ', 'Sunset sparkling', '238', 'چای سرخ، لیمو، زنجبیل و سودا', 'Hibiscus tea, lemon, ginger and soda'], ['سودا کلاسیک', 'Classic soda', '210'], ['آب', 'Soft water', null], ['آب‌پرتقال تازه', 'Fresh orange juice', '227'], ['موهیتو کلاسیک', 'Classic mojito', '282', 'لیمو، نعنا و سودا', 'Lemon, mint and soda'], ['موهیتو بری', 'Berry mojito', '455', 'لیمو، نعنا، توت‌فرنگی، شاه‌توت و سودا', 'Lemon, mint, strawberry, blackberry and soda'],
      ['ویندزور گاردن', 'Windsor garden', '490', 'انار، هل، دارچین، آناناس و پرتقال', 'Pomegranate, cardamom, cinnamon, pineapple and orange', 'n'], ['هارمونی', 'Harmony', '354', 'انگور قرمز، انبه، آلبالو و رزبری', 'Red grapes, mango, sour cherry and raspberry', 'n'], ['پرشین نگرونی', 'Persian negroni', '384', 'پرتقال، آناناس، دارچین، رز و تمشک', 'Orange, pineapple, cinnamon, rose and raspberry', 'n'], ['فلامینگو ویو', 'Flamingo view', '381', 'انار، پرتقال، زنجبیل، کدوحلوایی و دارچین', 'Pomegranate, orange, ginger, pumpkin and cinnamon', 'n'], ['فیگ اسموک', 'Fig smoke', '380', 'انجیر، پرتقال، دارچین و رزماری', 'Fig, orange, cinnamon and rosemary', 'n'], ['مانیا', 'Mania', '300', 'پرتقال، آناناس، آلوئه‌ورا، دارچین و زنجبیل', 'Orange, pineapple, aloe vera, cinnamon and ginger', 'n'],
    ]),
  },
]

export const translate = (text: [string, string], language: Language) => text[language === 'fa' ? 0 : 1]
export const displayPrice = (price: string | null, language: Language) => {
  if (!price) return language === 'fa' ? 'از مهماندار بپرسید' : 'Ask your host'
  return language === 'fa' ? price.replace(/\d/g, digit => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]).replace('.', '٫') : price
}
export const mapLink = 'https://www.google.com/maps/search/?api=1&query=Bagro+Bistro+Shiraz'
