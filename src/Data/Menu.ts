export type MenuItem = {
    id: number,
    name: string,
    price: number | null,
    category: string,
    description: string,
    ingredients: string[],
    images: string[],
    isNewItem: boolean,
    isSpicy: boolean
}

const BREAKFAST_ID: string = "breakfast";
const CAT_BREAKFAST: string = "Breakfast";
const CAT_BREAKFAST_EXP: string = "8:30 am - 12 pm";
const CAFE_ID: string = "cofe";
const CAT_COFE: string = "Cofe";
const CAT_COFE_EXP: string = "لاین قهوه در باگرو 20/80 سرو می‌شود";
const DESSERT_ID: string = "dessert";
const CAT_DESSERT: string = "Dessert";
const CAT_DESSERT_EXP: string = "شیرینی‌های باگرو  با رسپی‌های اصیل با کره مرغوب و بدون هرگونه مارگارین به صورت روزانه تهیه و تولید می‌شوند";
const APPETIZER_ID: string = "appetizer";
const CAT_APPETIZER: string = "Appetizer";
const CAT_APPETIZER_EXP: string = "";
const POTATO_ID: string = "potato";
const CAT_POTATO: string = "Potato";
const CAT_POTATO_EXP: string = "";
const SOUP_ID: string = "soup";
const CAT_SOUP: string = "Soup";
const CAT_SOUP_EXP: string = "";
const SALAD_ID: string = "salad";
const CAT_SALAD: string = "Salad";
const CAT_SALAD_EXP: string = "";
const PLATES_ID: string = "plates";
const CAT_PLATES: string = "Plates";
const CAT_PLATES_EXP: string = "";
const ITALIAN_PIZZA_ID: string = "italian_pizza";
const CAT_ITALIAN_PIZZA: string = "Italian Pizza";
const CAT_ITALIAN_PIZZA_EXP: string = "";
const AMERICAN_PIZZA_ID: string = "american_pizza";
const CAT_AMERICAN_PIZZA: string = "American Pizza";
const CAT_AMERICAN_PIZZA_EXP: string = "";
const BURGER_SANDWICH_ID: string = "burger_sandwich";
const CAT_BURGER_SANDWICH: string = "Burger & Sandwich";
const CAT_BURGER_SANDWICH_EXP: string = "";
const HOTDOG_ID: string = "hotdog";
const CAT_HOTDOG: string = "Hotdog";
const CAT_HOTDOG_EXP: string = "";
const LASAGNA_ID: string = "lasagna";
const CAT_LASAGNA: string = "Lasagna";
const CAT_LASAGNA_EXP: string = "";
const PASTA_ID: string = "pasta";
const CAT_PASTA: string = "Pasta";
const CAT_PASTA_EXP: string = "";
const SOFT_DRINKS_ID: string = "soft_drinks";
const CAT_SOFT_DRINKS: string = "Soft Drinks";
const CAT_SOFT_DRINKS_EXP: string = "";


const Menu: MenuItem[] = [
    {
        id: 1,
        name: "برانچ باگرو",
        price: 483,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: ["سوسیس روده‌ای", "پوره سیب زمینی", "تخم مرغ نیمرو", "نان تهیه شده در آشپزخانه باگرو"],
        images: ["/Branch1.jpg", "/pancake.jpg"],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 2,
        name: "کروک مادام",
        price: 425,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: ["سینه مرغ طعم‌دار", "تخم‌مرغ نیمرو", "بادمجان گریل", "برگه گوجه خشک دست‌ساز", "کاهو فرانسوی", "سس بشامل", "پنیر خامه‌ای", "نان تهیه شده در آشزخانه باگرو"],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 3,
        name: "املت مدیسون",
        price: 224,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: ["بادمجان رست شده", "گوجه خشک دست‌ساز", "پنیر موتزارلا دست‌ساز باگرو", "زیتون سیاه", "ساید سبزیجات و نان روگن دست‌ساز باگرو"],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    {
        id: 4,
        name: "املت اسپانیش",
        price: 407,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: ["فیله مرغ طعم‌دارشده", "فلفل دلمه", "سیب زمینی", "گوجه گیلاسی", "جعفری", "فلفل پولبیبر", "ساید سبزیجات تازه و پوره‌ی سیب‌زمینی", "نان دست‌ساز"],
        images: ["", ""],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 5,
        name: "املت باگرو",
        price: 410,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: ["اسفناج بلانش", "قارچ", "پنیر پارمیزان", "ساید سبزیجات تازه", "پوره سیب زمینی", "نان دست‌ساز باگرو"],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 6,
        name: "املت ایزابلان",
        price: 459,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: ["پیرونی", "قارچ", "فلفل دلمه", "گوجه فرنگی", "پنیر رودهای", "ساید سبزیجات تازه", "پوره سیب زمینی", "نان دست‌ساز باگرو"],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 7,
        name: "املت ایرانی",
        price: 294,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: ["گوجه فرنگی", "پیاز", "فلفل دلمه", "پیاز قرمز", "تربچه", "ریحان", "نان دست‌ساز باگرو"],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 8,
        name: "پنکیک شکلات و توت فرنگی",
        price: 351,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
        },
        {
        id: 9,
        name: "پنکیک موز و کره بادام زمینی",
        price: 420,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 10,
        name: "پنکیک کره و عسل",
        price: 343,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 11,
        name: "آب پرتقال تازه",
        price: 134,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 12,
        name: "اسپرسو Esspresso",
        price: 119,
        category: CAFE_ID,
        description: "لاین قهوه در باگرو 20/80 سرو می‌شود",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 13,
        name: "آمریکانو Americano",
        price: 119,
        category: CAFE_ID,
        description: "لاین قهوه در باگرو 20/80 سرو می‌شود",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 14,
        name: "لته Latte",
        price: 189,
        category: CAFE_ID,
        description: "لاین قهوه در باگرو 20/80 سرو می‌شود",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 15,
        name: "کاپوچینو Cuppuccino",
        price: 189,
        category: CAFE_ID,
        description: "لاین قهوه در باگرو 20/80 سرو می‌شود",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 16,
        name: "کورتادو Cortado",
        price: 198,
        category: CAFE_ID,
        description: "لاین قهوه در باگرو 20/80 سرو می‌شود",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 17,
        name: "ماكياتو Macchiato",
        price: 199,
        category: CAFE_ID,
        description: "لاین قهوه در باگرو 20/80 سرو می‌شود",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 18,
        name: "موكا Mocha",
        price: 195,
        category: CAFE_ID,
        description: "لاین قهوه در باگرو 20/80 سرو می‌شود",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 19,
        name: "آفوگاتو Affogato",
        price: 180,
        category: CAFE_ID,
        description: "لاین قهوه در باگرو 20/80 سرو می‌شود",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 20,
        name: "آیس لته Iced Latte",
        price: 192,
        category: CAFE_ID,
        description: "لاین قهوه در باگرو 20/80 سرو می‌شود",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 21,
        name: "شیک شکلات و بری",
        price: 175,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    {
        id: 22,
        name: "شیک شکلات و کوکی",
        price: 172,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    {
        id: 23,
        name: "شیک بیسکویت و قهوه",
        price: 263,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 24,
        name: "شیک فندق",
        price: 244,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 25,
        name: "هات چاکلت کلاسیک",
        price: 157,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    {
        id: 26,
        name: "هات چاکلت بادام زمینی",
        price: 165,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    {
        id: 27,
        name: "هات چاکلت فندق",
        price: 165,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    {
        id: 28,
        name: "چای زعفران",
        price: 95,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 29,
        name: "چای دارچین",
        price: 93,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 30,
        name: "آیس آمریکانو ed Americano",
        price: 170,
        category: CAFE_ID,
        description: "احتمالاً اشتباه تایپی دارد",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 31,
        name: "چای کرک",
        price: 160,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 32,
        name: "چای ماسالا",
        price: 110,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    {
        id: 33,
        name: "دمنوش پنیرک و لاوندر",
        price: 110,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 34,
        name: "دمنوش بابونه",
        price: 110,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 35,
        name: "آیس تی",
        price: 110,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 36,
        name: "چای به لیمو، لیمو، نعنا، سودا",
        price: 150,
        category: CAFE_ID,
        description: "none",
        ingredients: ["به لیمو", "لیمو", "نعنا", "سودا"],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 37,
        name: "شربت شیراز تخم شربتی، گلاب، زعفران",
        price: 150,
        category: CAFE_ID,
        description: "none",
        ingredients: ["تخم شربتی", "گلاب", "زعفران"],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 38,
        name: "تارت",
        price: null,
        category: DESSERT_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 39,
        name: "چیز کیک نیویورکی",
        price: null,
        category: DESSERT_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 40,
        name: "فلَن",
        price: null,
        category: DESSERT_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 41,
        name: "تیرامیسو",
        price: null,
        category: DESSERT_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 42,
        name: "دسر شیشه ای",
        price: null,
        category: DESSERT_ID,
        description: "none",
        ingredients: [],
        images: [],
        isNewItem: false,
        isSpicy: false
    },
    {
        id: 43,
        name: "حمص",
        price: 265,
        category: APPETIZER_ID,
        description: "نخود پخته شده، ارده، گارنیش خرما طعم دار شده، جعفری، پاپریکا",
        ingredients: ["نخود", "ارده", "خرما طعم‌دار", "جعفری", "پاپریکا"],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    {
        id: 44,
        name: "بابا قنوش",
        price: 234,
        category: APPETIZER_ID,
        description: "بادمجان رست شده، ارده سیر، ادویه میکس باگرو",
        ingredients: ["بادمجان", "ارده سیر", "ادویه باگرو"],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    {
        id: 45,
        name: "دیپ پنیر",
        price: 285,
        category: APPETIZER_ID,
        description: "پنیر، لبنه کنفی، گوجه گیلاسی و سیر، روغن زیتون آروماتیک",
        ingredients: ["پنیر", "لبنه کنفی", "گوجه گیلاسی", "سیر", "روغن زیتون آروماتیک"],
        images: [],
        isNewItem: true,
        isSpicy: false
    },
    
]


export type categories = {
    id: string,
    label: string,
    exp: string
}

export const categories: categories[] = [
    {
        id: BREAKFAST_ID,
        label: CAT_BREAKFAST,
        exp: CAT_BREAKFAST_EXP
    },
    {
        id: CAFE_ID,
        label: CAT_COFE,
        exp: CAT_COFE_EXP
    },
    {
        id: DESSERT_ID,
        label: CAT_DESSERT,
        exp: CAT_DESSERT_EXP
    },
    {
        id: APPETIZER_ID,
        label: CAT_APPETIZER,
        exp: CAT_APPETIZER_EXP
    },
    {
        id: POTATO_ID,
        label: CAT_POTATO,
        exp: CAT_POTATO_EXP
    },
    {
        id: SOUP_ID,
        label: CAT_SOUP,
        exp: CAT_SOUP_EXP
    },
    {
        id: SALAD_ID,
        label: CAT_SALAD,
        exp: CAT_SALAD_EXP
    },
    {
        id: PLATES_ID,
        label: CAT_PLATES,
        exp: CAT_PLATES_EXP
    },
    {
        id: ITALIAN_PIZZA_ID,
        label: CAT_ITALIAN_PIZZA,
        exp: CAT_ITALIAN_PIZZA_EXP
    },
    {
        id: AMERICAN_PIZZA_ID,
        label: CAT_AMERICAN_PIZZA,
        exp: CAT_AMERICAN_PIZZA_EXP
    },
    {
        id: BURGER_SANDWICH_ID,
        label: CAT_BURGER_SANDWICH,
        exp: CAT_BURGER_SANDWICH_EXP
    },
    {
        id: HOTDOG_ID,
        label: CAT_HOTDOG,
        exp: CAT_HOTDOG_EXP
    },
    {
        id: LASAGNA_ID,
        label: CAT_LASAGNA,
        exp: CAT_LASAGNA_EXP
    },
    {
        id: PASTA_ID,
        label: CAT_PASTA,
        exp: CAT_PASTA_EXP
    },
    {
        id: SOFT_DRINKS_ID,
        label: CAT_SOFT_DRINKS,
        exp: CAT_SOFT_DRINKS_EXP
    }
]


export default Menu;