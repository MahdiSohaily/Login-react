import { useState, useEffect } from 'react';
import https from '../../services/https';
// import { useAuthDispatch } from '../../context/auth/auth-context';
import './style.css';

const fetchToken = async ({ username, password }) => {
  const response = https.post('login', {
    username,
    password,
  });

  response
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(
        `Something went wrong while fetching data - (check the provided URL)${
          error}`,
      );
    });
};

const fetchUserData = async (token) => {
  const response = https.get('users/me', {
    headers: {
      authorization: token,
    },
  });

  return response.data;
};

export default function Login() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [token, setToken] = useState(null);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchToken(input).then((response) => {
      const { data, success } = response;
      if (success) {
        setToken(data);
      }
    });
  };

  useEffect(() => {
    if (token) {
      fetchUserData(token).then((response) => console.log(response));
    }
  }, [token]);

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post" onSubmit={handleLogin}>
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
