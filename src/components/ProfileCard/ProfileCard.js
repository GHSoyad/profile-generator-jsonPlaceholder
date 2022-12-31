import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { BankOutlined, DeleteFilled, EditOutlined, GlobalOutlined, HeartFilled, HeartOutlined, HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './ProfileCard.css';
import { useDispatch } from 'react-redux';
import { deleteUser, likeUser } from '../../redux/usersSlice';
import ModalForm from '../ModalForm/ModalForm';

const ProfileCard = ({ user }) => {

    const { id, name, email, phone, address, website, company, liked } = user;
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Card
                cover={<div className='card-image' style={{ display: 'flex' }}><img style={{ width: 200, height: 200, objectFit: "cover", borderRadius: 0 }} alt={name} src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}></img></div>}
                actions={[
                    <Button onClick={() => dispatch(likeUser(id))} type='link' className='card-btn' style={{ color: "red" }}>{liked ? <HeartFilled></HeartFilled> : <HeartOutlined></HeartOutlined>}</Button>,
                    <Button onClick={showModal} type='link' className='card-btn'><EditOutlined></EditOutlined></Button>,
                    <Button onClick={() => dispatch(deleteUser(id))} type='link' className='card-btn'><DeleteFilled></DeleteFilled></Button>
                ]}
                style={{ margin: "12px" }}
            >
                <h3 className='card-name'>{name}</h3>
                <div className='card-icon'>
                    <MailOutlined className='icon'></MailOutlined>
                    <p>{email}</p>
                </div>
                <div className='card-icon'>
                    <PhoneOutlined className='icon'></PhoneOutlined>
                    <p>{phone}</p>
                </div>
                <div className='card-icon'>
                    <HomeOutlined className='icon'></HomeOutlined>
                    <p>{address.city}</p>
                </div>
                <div className='card-icon'>
                    <GlobalOutlined className='icon'></GlobalOutlined>
                    <p>{website}</p>
                </div>
                <div className='card-icon'>
                    <BankOutlined className='icon'></BankOutlined>
                    <p>{company.name}</p>
                </div>
            </Card>
            <ModalForm user={user} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            </ModalForm>
        </>
    );
};

export default ProfileCard;