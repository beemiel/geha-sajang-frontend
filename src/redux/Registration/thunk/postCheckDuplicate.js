import axios from 'axios';
import { createPromiseThunk } from '@/common/lib/util/asyncUtils';
import { CHECK_EMAIL, CHECK_NAME } from '@/redux/Registration/type/registerType';
import { API_URL } from '@/common/config';

export const postCheckEmailRequest = async (payload) => {
  const postData = { email: payload };
  const response = await axios.post(API_URL.postCheckMail, postData);
  return response;
};

export const postCheckEmail = createPromiseThunk(CHECK_EMAIL, postCheckEmailRequest);

export const postCheckNameRequest = async (payload) => {
  const postData = { nickname: payload };
  const response = await axios.post(API_URL.postCheckName, postData);
  return response;
};

export const postCheckName = createPromiseThunk(CHECK_NAME, postCheckNameRequest);
