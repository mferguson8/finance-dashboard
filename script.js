document.addEventListener("DOMContentLoaded", function () {
  // Initialize the total income, expenses, net income, and remaining budget
  let totalIncome = 0;
  let totalExpenses = 0;
  let netIncome = 0;
  let remainingBudget = 0;

  // Calculate and display the total income, expenses, and net income
  function calculateSummary() {
    document.getElementById("total-income").textContent =
      "$" + totalIncome.toFixed(2);
    document.getElementById("total-expenses").textContent =
      "$" + totalExpenses.toFixed(2);
    document.getElementById("net-income").textContent =
      "$" + netIncome.toFixed(2);
  }

  // Update the remaining budget
  function updateRemainingBudget() {
    const budgetInput = document.getElementById("budget-input");
    remainingBudget = budgetInput.value - totalExpenses;
    document.getElementById("remaining-budget").textContent =
      "$" + remainingBudget.toFixed(2);
  }

  // Update the summary and remaining budget when the user clicks the "Update" button
  document
    .getElementById("update-budget")
    .addEventListener("click", function () {
      const budgetInput = document.getElementById("budget-input");
      totalIncome = Number(budgetInput.value);
      netIncome = totalIncome - totalExpenses;
      updateRemainingBudget();
      calculateSummary();
    });

  // Add a financial goal to the list when the user clicks the "Add" button
  document.getElementById("add-goal").addEventListener("click", function () {
    const goalInput = document.getElementById("goal-input");
    const goal = Number(goalInput.value);
    const goalsList = document.getElementById("goals-list");
    const goalItem = document.createElement("li");
    goalItem.textContent = "$" + goal.toFixed(2);
    goalsList.appendChild(goalItem);
    goalInput.value = "";
  });

  // Add a purchase and update the summary when the user clicks the "Add" button
  document
    .getElementById("add-purchase-btn")
    .addEventListener("click", function () {
      const purchaseAmountInput = document.getElementById("purchase-amount");
      const purchaseAmount = Number(purchaseAmountInput.value);
      totalExpenses += purchaseAmount;
      netIncome = totalIncome - totalExpenses;
      updateRemainingBudget();
      calculateSummary();
      purchaseAmountInput.value = "";
    });

  // Create a sample spending habits chart using Chart.js
  // Replace this code with your actual chart logic and data
  const ctx = document.getElementById("spending-chart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Food", "Shopping", "Rent", "Transportation"],
      datasets: [
        {
          data: [30, 25, 20, 15],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    },
  });
});
