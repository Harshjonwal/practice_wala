import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
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