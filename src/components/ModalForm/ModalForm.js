import React from 'react';
import { Form, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/usersSlice';

const ModalForm = ({ user, isModalOpen, setIsModalOpen }) => {
    const { id, name, email, phone, address, website, company } = user;
    const dispatch = useDispatch();

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [form] = Form.useForm();
    const onCreate = (values) => {
        dispatch(updateUser({ id, values }))
        setIsModalOpen(false);
        // form.resetFields();
    }

    return (
        <Modal title="Update user modal" open={isModalOpen}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }} onCancel={handleCancel} okText='Update'>

            <Form title="Update user form" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ padding: "12px 8px 0" }}
                initialValues={{ name, email, phone, address: address.city, website, company: company.name }} form={form}
            >
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="Address" name="address" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="Website" name="website" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="Company" name="company" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input ></Input>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalForm;