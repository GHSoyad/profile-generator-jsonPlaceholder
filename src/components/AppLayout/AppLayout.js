import React from 'react';
import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from '../ProfileCard/ProfileCard';
import Loader from '../Loader/Loader';
import { getUsers, loadingUsers } from '../../redux/usersSlice';

const AppLayout = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const expire = useSelector(state => state.users.expire);

    useEffect(() => {
        const expireTime = Math.round((Date.now() - expire) / 1000);

        if (!users.length || expireTime > 3600) {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(data => dispatch(getUsers(data)))
                .catch(error => console.log(error))
                .finally(() => dispatch(loadingUsers(false)))
        }
    }, [dispatch, users.length, expire])

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
};

export default AppLayout;