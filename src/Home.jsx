import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Home = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    setUsers(users);
    console.log(users)
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>


      {users.map(user => (
        <div className="card" key={user.id}>
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <Link to={`/user/${user.id}`}><button type="button">Harvest Data</button></Link>
          </div>
        </div>
      ))}


    </>
  )
}

export default Home;