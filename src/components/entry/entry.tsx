import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/actions";
import styles from "./entry.styles.module.css";

interface IShowEntry {
  isShowEntry: boolean;
}

export const Entry = ({ isShowEntry }: IShowEntry) => {
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(login(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  if (isShowEntry == true) {
    return (
      <div className={styles.container}>
        <Form
          className={styles.entryForm}
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            className={styles.username}
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
            className={styles.password}
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

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  } else return null;
};

// ReactDOM.render(<Demo />, mountNode);
