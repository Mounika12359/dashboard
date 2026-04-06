import { useState } from "react";
import { transactions as initialData } from "../../data/Mockdata";
import "./Transactions.css";

function Transactions({ role }) {
  const [transactions, setTransactions] = useState(initialData);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [showModal, setShowModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add transaction
  const handleAddTransaction = () => {
    if (!formData.date || !formData.amount || !formData.category) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
    };

    setTransactions([newTransaction, ...transactions]);

    // Reset form
    setFormData({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });

    setShowModal(false);
  };

  // Filtering logic
  const filteredData = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="transactions">
      <h2>Transactions</h2>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {role === "admin" && (
          <button
            className="add-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Transaction
          </button>
        )}
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td>{t.type}</td>
                <td className={t.type === "income" ? "income" : "expense"}>
                  ₹{t.amount}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ✅ Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
            />

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <div className="modal-actions">
              <button onClick={handleAddTransaction}>Add</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transactions;