import { Form, Input, Button, message, Alert } from 'antd';
import './App,css';
import 'antd/dist/antd.css';
import { useState } from 'react';

export default function FormComponent() {
  const [showAlert, setShowAlert] = useState(false);
  const onsubmit = (e) => {
    console.log(e);
    setTimeout(() => {
      setShowAlert(true);
      message.success('Login success'); // will have a pop up on top of windows
      // message.error('Login failed'); // will have a pop up on top of windows
      // message.warning('Login failed'); // will have a pop up on top of windows
    }, 1000);
  };

  return (
    <div>
      {showAlert && (
        <Alert
          type="error"
          message="Error"
          description="Error during login"
          collapsible // able to close the error
        />
      )}
      <Form onSubmit={onsubmit}>
        <Form.Item label="User Name" name="username" />
        <Input
          placeholder="User Name"
          required // popup "please fill in this field" will be shown
        />
      </Form>
      <Form>
        <Form.Item label="Password" name="Password" />
        <Input.Password placeholder="Password" required />
      </Form>
      <Form>
        <Button
          block // the Login button will span across the whole box
          type="primary"
          htmlType="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
