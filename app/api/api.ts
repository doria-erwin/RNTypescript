import axios from 'axios';
import { config } from '~/config/constants';
import { API_METHOD, API_DATA, CONTENT_TYPE } from '~/types';
const { apiUrl, apiTimeOut, clientCredentialMobile } = config;
import { store } from '~/redux/store';
import { AuthenticationState } from '~/redux/modules/authentication';

const APP_JSON = 'application/json';
const APP_URL_ENCODED = 'application/x-www-form-urlencoded';
const APP_PDF = 'application/pdf';

const API = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': APP_JSON,
    },
    timeout: apiTimeOut,
});

const serialize = (data: Object) => {
    return Object.keys(data)
        .map((k, i) => {
            const value = Object.values(data)[i];
            return `${encodeURIComponent(k)}=${
                value ? encodeURIComponent(value) : ''
            }`;
        })
        .join('&');
};

export default async function API_REQUEST(
    endpoint: string,
    method: API_METHOD,
    data?: API_DATA,
    contentType: CONTENT_TYPE = APP_JSON,
) {
    const { userToken }: AuthenticationState = store.getState().authentication;

    const isAuth = endpoint.includes('oauth');
    const isConvertToPdf = endpoint.includes('convert-to-pdf');

    const CntntTyp = isAuth ? APP_URL_ENCODED : contentType;

    const tokenType = isAuth ? 'Basic' : 'Bearer';
    const token = isAuth ? clientCredentialMobile : userToken;

    const Authorization = `${tokenType} ${token}`;

    const formattedData = data ? (isAuth ? serialize(data) : data) : '';

    const request = {
        url: endpoint,
        method,
        data: formattedData,
        headers: {
            Authorization,
            'Content-Type': CntntTyp,
            Accept: APP_JSON,
            responseType: 'json',
        },
    };

    if (isConvertToPdf) {
        request.headers = {
            ...request.headers,
            Accept: APP_PDF,
            responseType: 'blob',
        };
    }

    const response = await API(request);

    if (response.status === 200) {
        return response.data;
    } else {
        const error = new Error(response.statusText);
        throw { ...error, response };
    }
}

export async function EXTERNAL_API_REQUEST(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    apiUrl: string,
    endpoint: string,
    data?: API_DATA,
) {
    const url = `${apiUrl}${endpoint}${data ? `?${serialize(data)}` : ''}`;
    const response = await fetch(url);

    if (response.status === 200) {
        return await response.json();
    } else {
        const error = new Error(response.statusText);
        throw { ...error, response };
    }
}
