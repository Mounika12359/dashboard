import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { transactions } from "../../data/Mockdata";

function LineChartComponent() {
  // Convert transactions into chart data
  const data = transactions.map((t) => ({
    date: t.date,
    amount: t.type === "income" ? t.amount : -t.amount,
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Balance Trend</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;