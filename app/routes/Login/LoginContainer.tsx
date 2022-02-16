import React, { useState } from 'react';
import LoginScreen from './LoginScreen';

const LoginContainer: React.FC<any> = () => {
    const [loginForm, setLoginForm] = useState<any>({
        username: '',
        password: '',
    });

    const handleOnChange = (key: string, value: string) => {
        setLoginForm({
            ...loginForm,
            [key]: value,
        });
    };

    const handleLogin = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json));
    };

    return (
        <LoginScreen
            loginForm={loginForm}
            handleOnChange={handleOnChange}
            handleLogin={handleLogin}
        />
    );
};

export default LoginContainer;
