import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { transactions } from "../../data/Mockdata";

function PieChartComponent() {
  // Only expenses
  const expenseData = transactions.filter((t) => t.type === "expense");

  // Group by category
  const categoryMap = {};

  expenseData.forEach((t) => {
    if (!categoryMap[t.category]) {
      categoryMap[t.category] = 0;
    }
    categoryMap[t.category] += t.amount;
  });

  const data = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Spending Breakdown</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={index} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;