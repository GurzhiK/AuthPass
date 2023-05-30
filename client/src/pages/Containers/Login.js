import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return navigate('/');
  }
  return (
    <div className="container px-[10vh] py-[8vh] min-h-[90vh] justify-around flex-wrap rounded-lg lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center text-white">
      <h1>Sign in</h1>
      <p>Sign into your account</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 w-[40%]  text-gray-700 my-3"
            type='email'
            placeholder='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 w-[40%]  text-gray-700 my-3"
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
            required
          />
        </div>
        <button className="btn btn-primary bg-main p-4 rounded-lg text-white hover:font-bold duration-300" type='submit'>Login</button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to='/signup' className="text-gray-400">Sign up</Link>
      </p>
      <p className="mt-3">
        Forgot your password? <Link to='/reset-password' className="text-gray-400">Reset Password</Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
