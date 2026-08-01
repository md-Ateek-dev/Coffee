import latte from "../assets/images/products/latte.png";
import espresso from "../assets/images/products/espresso.png";
import mocha from "../assets/images/products/mocha.png";
import coldbrew from "../assets/images/products/coldbrew.png";

const BestSellers = [
  {
    id: 1,
    title: "Signature Latte",
    image: latte,
    price: "$18",
    rating: "★★★★★",
    description:
      "Creamy milk blended with rich espresso for the perfect balance.",
  },
  {
    id: 2,
    title: "Espresso",
    image: espresso,
    price: "$12",
  },
  {
    id: 3,
    title: "Mocha",
    image: mocha,
    price: "$15",
  },
  {
    id: 4,
    title: "Cold Brew",
    image: coldbrew,
    price: "$16",
  },
];

export default BestSellers;