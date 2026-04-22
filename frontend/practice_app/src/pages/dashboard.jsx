import { useEffect, useState } from "react";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await fetch("https://practice-wala.onrender.com/expenses", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        const data = await res.json();
        console.log(data);

        if (Array.isArray(data)) {
          setExpenses(data);
        } else {
          setExpenses([]);
        }
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="card">
      <h2>My Expenses</h2>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        Logout
      </button>

      {expenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        expenses.map((e) => (
          <div className="expense" key={e._id}>
            {e.title} - ₹{e.amount}
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;