import "./Dashboard.css"
import {transactions} from "../../data/Mockdata"
import LineChartComponent from "../../components/Dashboard/Linechart";
import PieChartComponent from "../../components/Dashboard/Piechart";


function Dashboard(){
 const income=transactions.filter(t=>t.type==="income").reduce((acc,cur)=>acc+cur.amount,0);
 const expense=transactions.filter(t => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);
    const balance=income-expense;
     return(
      <div className="dashboard">
       <h2>Dashboard</h2>
       <div className="cards-container">
        <div className="card">
          <h4>Total Balance</h4>
          <p className="balance">₹{balance}</p>
        </div>
        <div className="card">
          <h4>Total Income</h4>
          <p className="income">₹{income}</p>
        </div>
        <div className="card">
          <h4>Total Expenses</h4>
          <p className="expense">₹{expense}</p>
        </div>

      </div>
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div style={{ flex: 1 }}>
          <LineChartComponent />
        </div>

        <div style={{ flex: 1 }}>
          <PieChartComponent />
        </div>
      </div>
    </div>
    

 )
}
export default Dashboard;