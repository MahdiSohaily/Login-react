import { useState } from 'react';
import './style.css';

export default function Login() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post">
        <input
          name="username"
          type="text"
          placeholder="Username"
          required="required"
          value={input.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required="required"
          value={input.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
    </div>
  );
}
