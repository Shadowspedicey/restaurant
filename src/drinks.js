let drinks = [];

const Drink = (name, price) =>
{
  const _drink = { name, price}

  drinks.push(_drink);

  return _drink;
}
Drink("Iced Cappuccino", 23);
Drink("Iced Latte", 24);
Drink("Iced American Coffee", 24);
Drink("Iced Mocha", 25);
Drink("Iced Mocha Nutella", 29);
Drink("Iced Nescafe", 23);
Drink("Iced Nutella", 30);
Drink("Iced Milk", 18);

export default drinks;