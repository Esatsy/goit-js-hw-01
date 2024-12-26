function getShipppingMessage(country,price,deliveryFee){
const totalPrice = price+deliveryFee;
return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShipppingMessage("Australia", 120, 50));
console.log(getShipppingMessage("Australia", 80, 20));
console.log(getShipppingMessage("Sweden", 100, 20));
