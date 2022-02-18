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
        throw new Error('Test error');
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
