import { transactions } from "../../data/Mockdata";
import "./Insights.css";

function Insights() {
  // Filter expenses
  const expenses = transactions.filter(t => t.type === "expense");
  

  // 🔹 Highest Spending Category
  const categoryMap = {};

  expenses.forEach(t => {
    if (!categoryMap[t.category]) {
      categoryMap[t.category] = 0;
    }
    categoryMap[t.category] += t.amount;
  });

  let highestCategory = "";
  let highestAmount = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > highestAmount) {
      highestAmount = categoryMap[key];
      highestCategory = key;
    }
  }

  // 🔹 Income & Expense
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  const savings = income - expense;
  const monthlyExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const expensePercent = income ? ((expense / income) * 100).toFixed(1) : 0;
  const avgExpense = expenses.length
  ? (expense / expenses.length).toFixed(0)
  : 0;

  return (
    <div className="insight-cards">

  <div className="insight-card card-1">
    <h4>Top Spending Category</h4>
    <p>{highestCategory} (₹{highestAmount})</p>
  </div>

  <div className="insight-card card-2">
    <h4>Total Savings</h4>
    <p>₹{savings}</p>
  </div>

  <div className="insight-card card-3">
    <h4>Observation</h4>
    <p>
      {highestCategory
        ? `${highestCategory} takes most of your expenses. Try to reduce it.`
        : "No data available"}
    </p>
  </div>
  <div className="insight-card card-4">
    <h4>📅 Monthly Expense</h4>
    <p>₹{monthlyExpense}</p>
  </div>
  <div className="insight-card card-5">
    <h4>📉 Expense Ratio</h4>
    <p>{expensePercent}% of income</p>
  </div>
  
   <div className="insight-card card-7">
    <h4>💸 Avg Expense</h4>
    <p>₹{avgExpense}</p>
  </div>


</div>
  );
}

export default Insights;