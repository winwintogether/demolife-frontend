import axios from 'axios';
import { aws4Interceptor } from 'aws4-axios';
import config from '../config';

const http = axios.create({ baseURL: config.serverUrl });

const interceptor = aws4Interceptor(
  {
    region: config.awsRegion,
    service: config.serviceName,
  },
  {
    accessKeyId: config.accessKey,
    secretAccessKey: config.secretKey,
  }
);

http.interceptors.request.use(interceptor);

function get(url: string, headers = {}, params = {}) {
  return http.get(url, {
    params,
    headers,
  });
}

function post(url: string, data: any, headers = {}, options = {}) {
  return http.post(url, data, {
    ...options,
    headers,
  });
}

export default {
  http,
  get,
  post,
};
