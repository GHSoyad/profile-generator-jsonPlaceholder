import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      {
        users.map(user => <p key={user.id}>{user.name}</p>)
      }
    </div>
  );
}

export default App;
