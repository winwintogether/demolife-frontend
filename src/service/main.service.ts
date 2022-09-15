import httpService from './http.service';
import { Premium, Lead } from '../types/api';

const quickPremium = (data: Premium) => httpService
  .post('/quick-premium', data)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const leadStart = (data: Lead) => httpService
  .post('/lead-start', data)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

export default {
  quickPremium,
  leadStart
};