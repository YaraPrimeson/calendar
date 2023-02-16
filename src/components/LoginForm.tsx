import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useHistory} from "react-router";
import {RouteNames} from "../router";

const LoginForm: FC = () => {
    const {isLoading, error} = useTypedSelector(state => state.auth);
    const router = useHistory();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {login} = useActions();
    const submit = () => {
        login(username, password);
        router.push(RouteNames.EVENT);
    }
    return (
        <Form onFinish={submit}>
            {error && <div style={{color: 'red'}}>
                {error}
            </div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required("Пожалуйста введите имя пользователя!")]}
            >
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required("Пожалуйста введите пароль")]}
            >
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={"password"}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
