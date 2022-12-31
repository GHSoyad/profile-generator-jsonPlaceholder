import { Button, Card, Modal } from 'antd';
import React, { useState } from 'react';
import { BankOutlined, DeleteFilled, EditOutlined, GlobalOutlined, HeartOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './ProfileCard.css';

const ProfileCard = ({ user, handleEdit, handleDelete }) => {

    const { id, name, email, phone, website, company } = user;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Card
                cover={<div className='card-image' style={{ display: 'flex' }}><img style={{ width: 200, height: 200, objectFit: "cover", borderRadius: 0 }} alt={name} src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}></img></div>}
                actions={[
                    <Button type='link' className='card-btn' style={{ color: "red" }}><HeartOutlined></HeartOutlined></Button>,
                    <Button onClick={showModal} type='link' className='card-btn'><EditOutlined></EditOutlined></Button>,
                    <Button onClick={() => handleDelete(id)} type='link' className='card-btn'><DeleteFilled></DeleteFilled></Button>
                ]}
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
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default ProfileCard;