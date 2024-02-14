import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const [first, setFirst] = useState({ Name: '', Password: '', Email: '' });
  const [users, setusers] = useState([]);

  const User = (e) => {
    e.preventDefault();
    setFirst({ ...first, Name: e.target.value });
  };

  const UserPass = (e) => {
    setFirst({ ...first, Password: e.target.value });
    e.preventDefault();
  };

  const UserE = (e) => {
    e.preventDefault();
    setFirst({ ...first, Email: e.target.value });
  };

  const getUser = async () => {
    const response = await fetch('http://localhost:7325/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(first),
    });
    const data = await response.json();

    console.log(data);
  };

  const displayUser = async () => {
    const response = await fetch('http://localhost:7325/submit', {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data);
    setusers(data);
  };

  const deleteUser = async () => {
    const response = await fetch('http://localhost:7325/submit', {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    alert('Deleted Successfully!');
  };

  return (
    <div>
      <Navbar />
      <div className="all flex flex-col justify-center items-center space-y-5 h-auto w-screen pb-48 flex-shrink">
        <h1 className="text-black text-6xl m-3 mb-7">LOGIN FORM</h1>
        <label className="text-2xl">UserName:</label>
        <input
          className="border-black border-t-4 border-b-4 border-l-4 border-r-4 h-10 rounded-md"
          type="text"
          placeholder="Enter the UserName"
          onChange={User}
        />
        <br />
        <label className="text-2xl">Password:</label>
        <input
          className="border-black border-t-4 border-b-4 border-l-4 border-r-4 h-10 rounded-md"
          type="Password"
          placeholder="Enter the Password"
          onChange={UserPass}
        />
        <br />
        <label className="text-2xl">Email: (optional)</label>
        <input
          className="border-black border-t-4 border-b-4 border-l-4 border-r-4 h-10 w-64 rounded-md"
          type="text"
          placeholder="Email"
          onChange={UserE}
        />
        <br />
        <div className="space-x-3">
          <button
            className="text-white bg-green-800 rounded-xl p-4 hover:bg-green-700"
            onClick={() => {
              getUser();
            }}
          >
            ADD
          </button>
          <button
            className="text-white bg-neutral-400 rounded-xl p-4 hover:bg-neutral-300"
            onClick={displayUser}
          >
            Display
          </button>
          <button
            className="text-white bg-red-500 rounded-xl p-4 hover:bg-red-400"
            onClick={deleteUser}
          >
            Delete
          </button>
        </div>
        <h1>Our Customers : </h1>
        <ul>
          {users.map((uss) => {
            return (
              <div>
                <li key={uss.id}>
                  {' '}
                  <strong>{uss.name} </strong>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
