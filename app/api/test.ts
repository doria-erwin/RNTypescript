import { EXTERNAL_API_REQUEST } from './api';

export const testApi = async () => {
    return await EXTERNAL_API_REQUEST('https://api.genderize.io', '/?name=luc');
};
