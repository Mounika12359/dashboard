import "./Sidebar.css";
function Sidebar({ setPage }){
 return(
  <div className="sidebar">
   <h3>Finance App</h3>
   <p onClick={() => setPage("dashboard")}>Dashboard</p>
      <p onClick={() => setPage("transactions")}>Transactions</p>
      <p onClick={() => setPage("insights")}>Insights</p>
  </div>
 )
}
export default Sidebar;