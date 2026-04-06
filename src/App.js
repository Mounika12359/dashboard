
import './App.css';
import { useState, useEffect } from "react";
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Transactions from './Pages/Transactions/Transactions';
import Insights from "./Pages/Insights/Insights";
function App() {
  const [theme, setTheme] = useState("light");
   const [page, setPage] = useState("dashboard");
    const [role, setRole] = useState("viewer");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar setPage={setPage} />
     <div>
        <div className="topbar">
          <button 
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙" : "🌞"}
          </button>
          <select
            className="role-switch"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
          </div>
          </div>
          
          
         
        <div style={{flex:1}}>
        {page === "dashboard" && <Dashboard />}
        {page === "transactions" && <Transactions  role={role}/>}
        {page === "insights" && <Insights />}
      
      </div>
    
    </div>
  )
}

export default App;
