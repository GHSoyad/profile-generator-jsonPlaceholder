import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Loader from './Loader/Loader';
import { getUsers, loadingUsers } from './redux/usersSlice';

function App() {

  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.users.users);
  // const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingUsers(true))
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => dispatch(getUsers(data)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [dispatch])

  return (
    <>
      {
        loading ? <Loader></Loader> :
          <Row style={{ padding: "8px" }}>
            {
              users.map(user => <Col xs={24} sm={12} lg={8} xl={6} key={user.id}><ProfileCard user={user}></ProfileCard></Col>)
            }
          </Row>
      }
    </>
  );
}

export default App;
