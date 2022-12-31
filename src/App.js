import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Row gutter={[24, 24]} style={{ padding: "24px" }}>
        {
          users.map(user => <Col xs={24} sm={12} md={8} lg={6} key={user.id}><ProfileCard user={user}></ProfileCard></Col>)
        }
      </Row>
    </>
  );
}

export default App;
