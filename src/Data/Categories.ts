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
