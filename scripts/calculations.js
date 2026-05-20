let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
  console.log("Valor total de los gastos: " + totalExpensesValue);
}

console.log("Gastos totales:", totalExpensesValue);

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    console.log("No hay gastos");
    return 0;
  }

  let average = totalExpensesValue / expenseEntries.length;
  console.log("Gasto promedio:", average);
  return average;
}

let averageExpense = calculateAverageExpense();
console.log("Valor del gasto promedio:", averageExpense);

function calculateBalance() {
  let saldo = budgetValue - totalExpensesValue;
  console.log("Saldo calculado:", saldo);
  return saldo;
}

let saldoCalculado = calculateBalance();
console.log("Valor del saldo:", saldoCalculado);

function updateBalanceColor() {
  let saldo = calculateBalance();

  if (saldo < 0) {
    balanceColor = "red";
    console.log("Saldo negativo: red");
  } else if (budgetValue > 0 && saldo < budgetValue * 0.25) {
    balanceColor = "orange";
    console.log("Saldo < 25% presupuesto: orange");
  } else {
    balanceColor = "green";
    console.log("Saldo normal: green");
  }

  console.log("Color actualizado:", balanceColor);
  return balanceColor;
}

function calculateCategoryExpenses(categoria) {
  let totalCategoria = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === categoria) {
      totalCategoria += expenseEntries[i][1];
      console.log(`Estadistica por categoria: ${expenseEntries[i][1]}`);
    }
  }

  console.log(`Total para "${categoria}": ${totalCategoria}`);
  return totalCategoria;
}

function calculateLargestCategory() {
  let categoriasUnicas = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let categoriesData = [];
  let mayorGasto = 0;
  let categoriaMayor = "";

  for (let i = 0; i < categoriasUnicas.length; i++) {
    let categoria = categoriasUnicas[i];
    let totalCategoria = calculateCategoryExpenses(categoria);

    categoriesData.push([categoria, totalCategoria]);

    if (totalCategoria > mayorGasto) {
      mayorGasto = totalCategoria;
      categoriaMayor = categoria;
      console.log(`Nueva categoría mayor: ${categoria} con ${totalCategoria}`);
    }
  }

  console.log("Datos completos de categorías:", categoriesData);
  console.log("Categoría más grande:", categoriaMayor, "con", mayorGasto);
  return categoriaMayor;
}

function addExpenseEntry(nuevoGasto) {
  expenseEntries.push(nuevoGasto);
  totalExpensesValue += nuevoGasto[1];

  console.log(`Gasto añadido: ${nuevoGasto[0]} - ${nuevoGasto[1]}`);
  console.log(`Total actual: ${totalExpensesValue}`);
  return nuevoGasto;
}
