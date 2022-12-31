import { Card } from 'antd';
import React from 'react';
import { BankOutlined, GlobalOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {

    const { name, email, phone, website, company } = user;

    return (
        <>
            <Card
                cover={<div className='card-image' style={{ display: 'flex' }}><img style={{ width: 200, height: 200, objectFit: "cover", borderRadius: 0 }} alt={name} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'></img></div>}
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
                    <GlobalOutlined className='icon'></GlobalOutlined>
                    <p>{website}</p>
                </div>
                <div className='card-icon'>
                    <BankOutlined className='icon'></BankOutlined>
                    <p>{company.name}</p>
                </div>
            </Card>
        </>
    );
};

export default ProfileCard;