import constants from '../constants/constants';
import MyshkaDress from '../assets/women/myshka_dress.jpg';
import BlueDress from '../assets/women/blue_dress.jpeg';
import Gown from '../assets/women/gown.jpg';
import UnFDress from '../assets/women/UnF_dress.jpg';
import RedDress from '../assets/women/red_dress.jpg';

import BlueCheckShirt from '../assets/men/blue_check_shirt.jpg';
import CheckShirt from '../assets/men/check_shirt.jpeg';
import YellowShirt from '../assets/men/yellow_shirt.jpg';
import OrangeShirt from '../assets/men/orange_shirt.jpg';
import PinkShirt from '../assets/men/pink_shirt.jpg';

const initialState = {
    products: [{
        id: 1,
        brand: 'Tokyo Talkies',
        description: 'Navy Flower Printed Dress',
        price: 1199,
        discount: 20,
        mrpPrice: 1499,
        gender: 'female',
        url: MyshkaDress
    },
    {
        id: 2,
        brand: 'Belle Fille',
        description: 'Knee Length Gown',
        price: 1189,
        discount: 30,
        mrpPrice: 1699,
        gender: 'female',
        url: BlueDress
    },
    {
        id: 3,
        brand: 'Miss Chase',
        gender: 'female',
        description: 'Knee length blue coloured dress',
        price: 1800,
        discount: 10,
        mrpPrice: 2000,
        url: Gown
    },
    {
        id: 4,
        gender: 'male',
        brand: 'Wrogn',
        description: 'Blue checked shirt',
        price: 425,
        discount: 15,
        mrpPrice: 499,
        url: BlueCheckShirt
    },
    {
        id: 5,
        gender: 'male',
        brand: 'Mango',
        description: 'Pink line shirt',
        price: 742,
        discount: 1,
        mrpPrice: 749,
        url: CheckShirt
    },
    {
        id: 6,
        brand: 'FabAlley',
        gender: 'female',
        description: 'Party wear black dress',
        price: 1349,
        discount: 10,
        mrpPrice: 1499,
        url: UnFDress
    },
    {
        id: 7,
        brand: 'Vero Moda',
        description: 'Formal pink shirt',
        gender: 'male',
        price: 425,
        discount: 15,
        mrpPrice: 499,
        url: PinkShirt
    },
    {
        id: 8,
        brand: 'Miss Chase',
        gender: 'female',
        description: 'Party wear red dress',
        price: 1424,
        discount: 25,
        mrpPrice: 1899,
        url: RedDress
    },
    {
        id: 9,
        brand: 'Vero Moda',
        description: 'Formal yellow shirt',
        gender: 'male',
        price: 679,
        discount: 15,
        mrpPrice: 799,
        url: YellowShirt
    },
    {
        id: 10,
        brand: 'Roadster',
        description: 'Casual Checked multicolour shirt',
        price: 1274,
        discount: 15,
        mrpPrice: 1499,
        url: OrangeShirt
    }],
    appliedFilters: [],
    originalItems: []
};

// This reducer contains details of products and filters
export default function homePageReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FILTER_PRODUCTS:
            const items = [...initialState.products];
            const { price, gender } = action.filters;
            const result = [];
            const out = [];
            if (gender !== 'all') {
                out.push(...items.filter((ele) => ele.gender === gender));
            }
            if (gender === 'all' && price.length === 0) {
                return { ...state, products: items };
            }

            if (price.length > 0) {
                const finalItems = out.length > 0 ? out : items;
                if (price.indexOf("lessThan500") !== -1) {
                    result.push(...finalItems.filter((ele) => ele.price === 500 || ele.price < 500));
                }
                if (price.indexOf("lessThan1000") !== -1) {
                    result.push(...finalItems.filter((ele) => ele.price === 1000 || (ele.price < 1000 && ele.price > 500)));
                }
                if (price.indexOf("moreThan1000") !== -1) {
                    result.push(...finalItems.filter((ele) => ele.price > 1000));
                }
                return { ...state, products: result }
            } else {
                return { ...state, products: out }
            }
        case constants.APPLIED_FILTERS:
            return { ...state, appliedFilters: action.filters }
        case constants.RESET_PRODUCTS:
            return initialState;
        case constants.SET_ORIGINAL_ITEMS:
            return { ...state, originalItems: initialState.products }
        default:
            return state;
    }
}
