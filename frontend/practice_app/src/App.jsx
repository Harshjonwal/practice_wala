import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      {!token ? (
        <>
          <Register />
          <Login />
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;