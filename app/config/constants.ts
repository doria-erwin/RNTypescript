/* eslint-disable radix */
import env from 'react-native-config';

// env config
export const config = {
    apiUrl: env.API_HOST, // TODO Set this in .env
    apiTimeOut: parseInt(env.API_TIMEOUT),
    oAuthService: 'oauth2-service/',
    userService: 'user-service/',
    clientCredentialInternal: '',
    clientCredentialMobile: '',
    // clientCredentialInternal: env.CLIENT_CREDENTIALS_INTERNAL
};

export const storageKey = {
    accessToken: 'accessToken',
};

export const grantType = {
    CLIENT_CREDENTIALS: 'client_credentials',
    REFRESH_TOKEN: 'refresh_token',
    PASSWORD: 'password',
};

export const isStoryBook = env.IS_STORYBOOK === 'true';
