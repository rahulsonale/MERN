const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    category: "Electronics",
    rating: 4.3,
    inStock: false,
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    category: "Accessories",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 4,
    name: "Backpack",
    price: 1800,
    category: "Fashion",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 12000,
    category: "Wearables",
    rating: 4.4,
    inStock: false,
  },
];

// for (let i = 0; i < products.length; i++) {
//   if (products[i].rating >= 4.2) {
//     console.log(products[i].name);
//   }
// }

// console.log(
//   products
//     .filter((p) => p.rating >= 4.2)
//     .map((p) => {
//       return {
//         name: p.name,
//         rating: p.rating,
//       };
//     }),
// );

let names = products
  .filter((p) => {
    return p.rating >= 4.2;
  })
  .map((n) => {
    return {
      name: n.name,
      rating: n.rating,
    };
  });

console.log(names);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.filter((n) => n > 3));

let obj = {
  a: 2,
  b: 3,
  c: 4,
};

console.log(Object.values(obj));
let value = Object.values(obj);
let sum = 0;
for (let i = 0; i < value.length; i++) {
  sum += value[i];
}
console.log(sum);

const a = 7 && 50 && 32;
console.log(a);

let duplicate = [2, 3, 2, 4, 4, 3, 6, 8];
let set = new Set();

let unique = [...new Set(duplicate)];
console.log(unique);
