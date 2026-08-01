import espresso from "../assets/images/products/espresso.png";
import latte from "../assets/images/products/latte.png";
import cappuccino from "../assets/images/products/cappuccino.png";
import coldbrew from "../assets/images/products/coldbrew.png";
import mocha from "../assets/images/products/mocha.png";
import caramel from "../assets/images/products/caramel.png";
import brownie from "../assets/images/products/brownie.png";

const products = [
  {
    id: 1,
    idStr: "1",
    title: "Signature Espresso",
    name: "Signature Espresso",
    price: "$12",
    rating: 4.9,
    image: espresso,
    category: "Hot Coffee",
    description: "Rich, concentrated shot of premium dark roasted arabica coffee with velvety crema.",
  },
  {
    id: 2,
    idStr: "2",
    title: "Velvet Latte",
    name: "Velvet Latte",
    price: "$15",
    rating: 4.8,
    image: latte,
    category: "Milk Coffee",
    description: "Smooth steamed milk poured over rich espresso for a harmonious creamy balance.",
  },
  {
    id: 3,
    idStr: "3",
    title: "Artisanal Cappuccino",
    name: "Artisanal Cappuccino",
    price: "$14",
    rating: 4.7,
    image: cappuccino,
    category: "Classic",
    description: "Equal parts espresso, steamed milk, and dense airy foam dusted with dark cocoa.",
  },
  {
    id: 4,
    idStr: "4",
    title: "Nitro Cold Brew",
    name: "Nitro Cold Brew",
    price: "$18",
    rating: 4.9,
    image: coldbrew,
    category: "Cold Coffee",
    description: "Steeped for 24 hours and infused with nitrogen for a naturally sweet, cascading microfoam texture.",
  },
  {
    id: 5,
    idStr: "5",
    title: "Dark Chocolate Mocha",
    name: "Dark Chocolate Mocha",
    price: "$16",
    rating: 4.9,
    image: mocha,
    category: "Special Drinks",
    description: "Decadent Dutch cocoa blended with fresh espresso shots and topped with vanilla bean whip.",
  },
  {
    id: 6,
    idStr: "6",
    title: "Caramel Macchiato",
    name: "Caramel Macchiato",
    price: "$20",
    rating: 4.8,
    image: caramel,
    category: "Special Drinks",
    description: "Freshly steamed milk with vanilla syrup, marked with espresso and finished with caramel drizzle.",
  },
  {
    id: 7,
    idStr: "7",
    title: "Double Chocolate Brownie",
    name: "Double Chocolate Brownie",
    price: "$10",
    rating: 4.8,
    image: brownie,
    category: "Desserts",
    description: "Fudgey cocoa brownie baked with chocolate chunks, served warm alongside your brew.",
  }
];

export default products;