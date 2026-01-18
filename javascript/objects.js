for (let value of vehicles) {
  if (value?.address?.city === "Pune") {
    value.address.city = "Mumbai";
  }
}

console.log(vehicles);
