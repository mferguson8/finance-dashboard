document.addEventListener("DOMContentLoaded", function () {
  // Calculate and display the total income, expenses, and net income
  // Replace these values with your actual logic to fetch and calculate the data
  const totalIncome = 5000;
  const totalExpenses = 3000;
  const netIncome = totalIncome - totalExpenses;

  document.getElementById("total-income").textContent =
    "$" + totalIncome.toFixed(2);
  document.getElementById("total-expenses").textContent =
    "$" + totalExpenses.toFixed(2);
  document.getElementById("net-income").textContent =
    "$" + netIncome.toFixed(2);

  // Update the remaining budget when the user clicks the "Update" button
  document
    .getElementById("update-budget")
    .addEventListener("click", function () {
      const budgetInput = document.getElementById("budget-input");
      const remainingBudget = budgetInput.value - totalExpenses;
      document.getElementById("remaining-budget").textContent =
        "$" + remainingBudget.toFixed(2);
    });

  // Add a financial goal to the list when the user clicks the "Add" button
  document.getElementById("add-goal").addEventListener("click", function () {
    const goalInput = document.getElementById("goal-input");
    const goal = goalInput.value;
    const goalsList = document.getElementById("goals-list");
    const goalItem = document.createElement("li");
    goalItem.textContent = "$" + goal.toFixed(2);
    goalsList.appendChild(goalItem);
    goalInput.value = "";
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
