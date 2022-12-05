/* eslint-disable comma-dangle */
import { useState, useEffect, useLayoutEffect } from 'react';
import { useAuthDispatch, useAuthState } from '../../context/auth/auth-context';
import {
  loginError,
  loginRequest,
  loginSuccess,
} from '../../context/auth/reducer';
import { fetchToken, fetchUserData } from './actions';
import './style.css';

export default function Login() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [token, setToken] = useState(null);
  const [failed, setFailed] = useState(false);
  const dispatch = useAuthDispatch();
  const { loading } = useAuthState();

  const handleChange = (e) => {
    setFailed(false);
    const { name } = e.target;
    const { value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    fetchToken(input).then(({ data, success }) => {
      if (success) {
        setToken(data);
      } else {
        setFailed(true);
        dispatch(loginError);
      }
    });
  };

  useLayoutEffect(() => {
    if (token) {
      console.log('hi');
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchUserData(token).then(({ success, data }) => {
        if (success) {
          dispatch(
            loginSuccess({
              ...data,
              token,
            })
          );
        } else {
          setFailed(true);
        }
      });
    }
  }, [dispatch, token]);

  return (
    <div className="login">
      <h1>Login</h1>
      {failed && (
        <p className="error">* Either username or password are wrong.</p>
      )}
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
        <button
          type="submit"
          className="btn btn-primary btn-block btn-large"
          disabled={loading}
        >
          Let me in.
        </button>
      </form>
    </div>
  );
}
