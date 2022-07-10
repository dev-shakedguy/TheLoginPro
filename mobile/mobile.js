import express from 'express';
const mobileApi = express();
import mobileLoginRoute from './routes/mobileLoginRoute.js';

mobileApi.use('/mobile/login', mobileLoginRoute);

export default mobileApi;
