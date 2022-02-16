// @flow
import React from 'react';
import { View } from 'react-native';
import Button from '~/components/base/Button/Button';
import Typography from '~/components/base/Typography/Typography';
import withScreenWrapper from '~/components/modules/withScreenWrapper';
import styles from './loginStyles';

type Props = {
    handleOnChange: (key: string, value: string) => void;
    handleLogin: () => void;
    loginForm: {
        username: string;
        password: string;
    };
    errorForm: any;
    isProcessing: boolean;
};

const LoginScreen: React.FC<any> = ({ handleLogin, isProcessing }: Props) => {
    return (
        <View style={styles.container}>
            <Typography>Login</Typography>

            {/* <View style={styles.loginForm}>
                <Input
                    placeholder='Username'
                    value={loginForm.username}
                    onChangeText={(value: string) => handleOnChange('username', value)}
                    isInvalid={!!errorForm.username}
                    feedbackMessage={errorForm.username ? errorForm.username.message : ''} />

                <Input
                    placeholder='Password'
                    value={loginForm.password}
                    onChangeText={(value: string) => handleOnChange('password', value)}
                    isInvalid={!!errorForm.password}
                    feedbackMessage={errorForm.password ? errorForm.password.message : ''}
                    secureTextEntry={true} />

                <Button onPress={handleLogin} label='SUBMIT' isProcessing={isProcessing} />
            </View> */}
            <Button
                onPress={handleLogin}
                label="SUBMIT"
                isProcessing={isProcessing}
            />
        </View>
    );
};

const Login: any = withScreenWrapper<Props>(LoginScreen);

export default Login;
