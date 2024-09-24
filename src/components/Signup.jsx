import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = signup(username, password);
    if (response.success) {
      setMessage(response.message);
      setSuccess(true);
      navigate('/'); 
    } else {
      setMessage(response.message);
      setSuccess(false);
    }
  };

  return (
    <div className='bg-amber-200 p-5'>

        {message && (
          <p className={`mb-4 p-1 border rounded text-center ${success ? 'text-green-500 bg-white' : 'text-red-500 bg-white'}`}>
            {message}
          </p>
        )}
      <div className="max-w-md mx-auto p-6 bg-amber-700 text-amber-200 rounded shadow mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <button type="submit" className="w-full bg-amber-300 hover:bg-amber-500 text-amber-700 text-lg px-4 py-2  rounded">
            SignUp
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-amber-400 hover:text-amber-200">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
