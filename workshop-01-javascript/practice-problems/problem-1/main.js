let shoppingList = [];

void addItem(item);{
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
    console.log(`${item} added to your shopping list.`);
  } else {
    console.log(`${item} is already in your shopping list.`);
  }
};

g
