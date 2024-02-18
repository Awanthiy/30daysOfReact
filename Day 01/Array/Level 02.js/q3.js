/*
  
In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/

//Adding Items:

//Meat:
JavaScript
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
//Sugar:
JavaScript
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
//removing Items:

//Honey:
//JavaScript
if (shoppingCart.includes('Honey')) {
    const honeyIndex = shoppingCart.indexOf('Honey');
    shoppingCart.splice(honeyIndex, 1);
}
Use code with caution.
//Modifying Items:

//Tea to Green Tea:
JavaScript
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
} else {
    console.log("Warning: Tea not found in the shopping cart.");
}
