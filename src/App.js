import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Loader from './Loader/Loader';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const handleEdit = () => {

  }

  const handleDelete = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }

  return (
    <>
      {
        loading ? <Loader></Loader> :
          <Row gutter={[24, 24]} style={{ padding: "24px" }}>
            {
              users.map(user => <Col xs={24} sm={12} md={8} lg={6} key={user.id}><ProfileCard user={user} handleDelete={handleDelete}></ProfileCard></Col>)
            }
          </Row>
      }
    </>
  );
}

export default App;
