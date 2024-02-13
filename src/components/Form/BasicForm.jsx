import { useState } from 'react';
import { StyledForm, Input, TextArea, Button, Notification } from './BasicForm.styled';
import { Modal } from 'antd';
import { THANKS_MESSAGE } from '../../constants';

const BasicForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const onSubmit = (e) => {
        if (!isAnyFieldEmpty()) {
            e.preventDefault();
            setIsModalOpen(true);
        }
    }
    const handleModalCancel = () => {
        setIsModalOpen(false);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const isAnyFieldEmpty = () => {
        return Object.values(formValues).some(value => value.trim() === "");
    };

    return (
        <>
            <StyledForm>
                <Input
                    type='text'
                    placeholder='Name*'
                    required
                    onChange={handleChange}
                    value={formValues.name}
                    name='name'
                />
                <Input
                    type='text'
                    placeholder='Email*'
                    required
                    onChange={handleChange}
                    value={formValues.email}
                    name='email'
                  />
                <TextArea
                    placeholder='Message*'
                    required
                    onChange={handleChange}
                    value={formValues.message}
                    name='message'
                 />
                <Button onClick={onSubmit}>Shoot us a message</Button>
                <Modal
                    open={isModalOpen}
                    onCancel={handleModalCancel}
                    footer={[]}
                >
                    <Notification>{THANKS_MESSAGE}</Notification>
                </Modal>
            </StyledForm>

      </>
    )
}

export {
    BasicForm
}
