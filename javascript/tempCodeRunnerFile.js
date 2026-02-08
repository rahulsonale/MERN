
// for (let i = 0; i < products.length; i++) {
//   if (products[i].rating >= 4.2) {
//     console.log(products[i].name);
//   }
// }

console.log(
  products
    .filter((p) => p.rating >= 4.2)
    .map((p) => {
      return {
        name: p.name,
        rating: p.rating,
      };
    }),
);

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