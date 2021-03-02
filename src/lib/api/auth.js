import client from './client';

export const login = () => client.post();

export const register = () => client.post();

export const check = () => client.get();
