import { createHash } from 'crypto';
import { AES, enc } from 'crypto-ts';

export const hash = (data: string) => {
  return createHash('md5').update(data).digest('hex');
};

export const encryptedHash = (data: string) => {
  encrypt(hash(data));
};

export const decrypt = (data: string) => {
  return AES.decrypt(data, process.env.REACT_APP_SALT as string).toString(enc.Utf8);
};

export const encrypt = (data: string) => {
  return AES.encrypt(data, process.env.REACT_APP_SALT as string).toString();
};

