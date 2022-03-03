import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useState } from 'react';
import LoginScreen from './LoginScreen';

type Props = {
    navigation: NavigationProp<ParamListBase>;
};

const LoginContainer: React.FC<Props> = ({ navigation }) => {
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
        navigation.navigate('Drawer');
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
