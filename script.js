function Phone(brand, price, color, ram, amount) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.ram = ram;
  this.amount = amount;
}

Phone.prototype.printInfo = function () {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + "$  and RAM is " + this.ram + "GB.");
};
Phone.prototype.displayInfoAvailable = function () {
  if (this.amount > 0) {
    console.log("We send this product (" + this.brand + ", color: " + this.color + ") today after 4 p.m.");
  } else {
    console.log("We're sorry but this product " + this.brand + " is not available.");
  }
};
Phone.prototype.applyDiscount = function (priceOffIn) {
  if (this.amount > 0) {
    this.price -= priceOffIn;
    return this.price;
  } else {
    console.log("This product is not available.");
  }
};

var iphone6 = new Phone("iPhone 6s", 1400, "white", 2, 233);
var samsungGa = new Phone("Samsung Galaxy S6", 800, "blue", 2, 0);
var onPlus = new Phone("OnePlus One", 350, "red", 1, 1298);

iphone6.printInfo();
iphone6.displayInfoAvailable();
samsungGa.printInfo();
samsungGa.displayInfoAvailable();
onPlus.printInfo();
onPlus.displayInfoAvailable();

iphone6.applyDiscount(400);
iphone6.printInfo();

samsungGa.applyDiscount(200);
samsungGa.printInfo();