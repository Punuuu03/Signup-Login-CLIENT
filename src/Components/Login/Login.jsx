import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://signup-login-server.vercel.app/api/login', {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert(`Logged in successfully! JWT Token: ${token}`);
    } catch (err) {
      console.error(err);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white p-8 rounded shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Log In
        </button>
      </form>
      <p className="text-center mt-4 text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-500 hover:underline">
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default Login;
