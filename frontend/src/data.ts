import { Product } from "./types/Product";

export const sampleProducts: Product[] = [
  {
    name: "Nike Slim shirt",
    slug: "nike-slim-shirt",
    category: "Shirts",
    image: "../images/p1.png",
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    description: "high quality shirt"
  },
  {
    name: "Adidas Fit Shirt",
    slug: "adidas-fit-shirt",
    category: "Shirts",
    image: "../images/p2.png",
    price: 100,
    countInStock: 20,
    brand: "Adidas",
    rating: 4.0,
    numReviews: 10,
    description: "high quality product by Adidas"
  },
  {
    name: "Lacoste Free Pants",
    slug: "lacoste-free-pants",
    category: "Pants",
    image: "../images/p3.png",
    price: 220,
    countInStock: 0,
    brand: "Lacoste",
    rating: 4.9,
    numReviews: 17,
    description: "high quality product by Lacoste"
  },
  {
    name: "Nike Slim Pant",
    slug: "nike-slim-pant",
    category: "Pants",
    image: "../images/p4.png",
    price: 70,
    countInStock: 15,
    brand: "Nike",
    rating: 4.5,
    numReviews: 14,
    description: "high quality product by Nike"
  }
]
