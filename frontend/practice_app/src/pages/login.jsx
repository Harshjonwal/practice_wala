import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    const res = await fetch("https://practice-wala.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful");

      window.location.reload(); // ✅ important
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input placeholder="Email"
        onChange={(e) => setForm({...form, email: e.target.value})} />

      <input type="password" placeholder="Password"
        onChange={(e) => setForm({...form, password: e.target.value})} />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;