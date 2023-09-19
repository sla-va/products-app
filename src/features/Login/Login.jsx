import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import React from 'react';
import './Login.less';

function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let password = formData.get('password');
    auth.login({ username, password });
    navigate(from, { replace: true });
  };
  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='login--form'>
        <label>Username</label>
        <input required type='text' name='username' placeholder='Username' />

        <label>Password</label>
        <input required type='password' name='password' placeholder='Password' />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
