import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Hardcoded valid users
const validUsers = [
  { email: "test@example.com", password: "Password1!" },
  { email: "admin@example.com", password: "Admin123#" }
];

const passwordCriteria = [
  { id: "length", label: "8-16 characters" },
  { id: "uppercase", label: "At least one uppercase letter" },
  { id: "lowercase", label: "At least one lowercase letter" },
  { id: "number", label: "At least one number" },
  { id: "symbol", label: "At least one symbol" }
];

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(""); // toast message
  const [showToast, setShowToast] = useState(false);
  const [showCriteria, setShowCriteria] = useState(false);

  // Check password criteria
  const criteriaStatus = {
    length: password.length >= 8 && password.length <= 16,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    symbol: /[\W_]/.test(password)
  };
  const passwordValid = Object.values(criteriaStatus).every(Boolean);

  // Toast handler
  const triggerToast = (message) => {
    setToast(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setShowCriteria(true);

    if (!email) {
      setError("Email cannot be empty.");
      return;
    }

    const user = validUsers.find((u) => u.email === email);
    if (!user) {
      setError("Email does not exist.");
      return;
    }

    if (!passwordValid) {
      setError("Password does not meet all criteria.");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password.");
      return;
    }

    setIsLoggedIn(true);
    triggerToast("Login successful!!");
  };

  const handleLogout = () => {
    setEmail("");
    setPassword("");
    setError("");
    setIsLoggedIn(false);
    setShowCriteria(false);
    triggerToast("Logged out successfully.");
  };

  const handleForgotPassword = () => {
    triggerToast(
      "Forgot Password clicked! (Demo mode — no backend available)"
    );
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>

          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Password criteria feedback */}
            {showCriteria && (
            <ul className="criteria-list">
                {passwordCriteria.map((c) => (
                <li
                    key={c.id}
                    className={criteriaStatus[c.id] ? "met" : "unmet"}
                >
                    {c.label}
                </li>
                ))}
            </ul>
            )}

          <button type="submit">Login</button>

          {/* Error Message */}
          <div className="error">{error}</div>

          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot password?
          </p>
        </form>
      ) : (
        <div className="welcome-container">
          <h2>Welcome, {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default LoginPage;
