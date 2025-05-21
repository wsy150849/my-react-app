import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
	const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values) => {
        try {
            setLoading(true);
            console.log(values);
            navigate('/home/index')
            
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 5 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size="large"
            autoComplete="off"
        >
            <Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
                <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
                <Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item className="login-btn">
                <Button
                    onClick={() => {
                        form.resetFields();
                    }}
                    icon={<CloseCircleOutlined />}
                >
                    重置
                </Button>
                <Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;