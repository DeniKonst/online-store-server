import { Button, Form, Input } from "antd";
import Reakt from "react";

interface AuthFormProps {
  isRegistration: boolean;
  handleSubmit: (values: { email: string; password: string }) => void;
}

export const AuthForm = ({ isRegistration, handleSubmit }: AuthFormProps) => {
  return (
    <div>
      <Form
        onFinish={handleSubmit}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            {isRegistration ? "Registration" : "Login"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
