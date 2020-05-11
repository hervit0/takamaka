import { createHash } from 'crypto';
import { AES, enc } from 'crypto-ts';

export const hash = (data: string) => {
  return createHash('md5').update(data).digest('hex');
};

export const securedHash = (data: string) => {
  encrypt(hash(data));
};

export const decrypt = (cookieLevel: string) => {
  return AES.decrypt(cookieLevel, process.env.REACT_APP_SALT as string).toString(enc.Utf8);
};

export const encrypt = (cookieLevel: string) => {
  // Rotation
  return AES.encrypt(cookieLevel, process.env.REACT_APP_SALT as string).toString();
};

