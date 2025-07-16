export type MenuItem = {
    id: number,
    name: string,
    price: number,
    category: string,
    description: string,
    ingredients: string[],
    images: string[]
}

const BREAKFAST_ID: string = "breakfast";
const CAT_BREAKFAST: string = "Breakfast";
const CAT_BREAKFAST_EXP: string = "8:30 am - 12 pm";
const CAFE_ID: string = "cofe";
const CAT_COFE: string = "Cofe";
const CAT_COFE_EXP: string = "لاین قهوه در باگرو 20/80 سرو می‌شود";


const Menu: MenuItem[] = [
    {
        id: 1,
        name: "برانچ باگرو",
        price: 483,
        category: BREAKFAST_ID,
        description: "none",
        ingredients: ["سوسیس روده‌ای", "پوره سیب زمینی", "تخم مرغ نیمرو", "نان تهیه شده در آشپزخانه باگرو"],
        images: ["/branch1.jpg", "pancake.jpg"]
    },
    {
        id: 2,
        name: "اسپرسو Esspresso",
        price: 119,
        category: CAFE_ID,
        description: "none",
        ingredients: [],
        images: []
    }
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
    }
]


export default Menu;