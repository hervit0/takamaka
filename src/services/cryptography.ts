import { createHash } from 'crypto';
import { AES, enc } from 'crypto-ts';

export const hash = (data: string) => {
  return createHash('md5').update(data).digest('hex');
};

export const securedHash = (data: string) => {
  encryptLevelCookie(hash(data));
};
// U2FsdGVkX1/FmRvcW/yMB5KCai+/S0i5hGp2hmJA0UlFnMrmNKHHNQMlgJBqQOGigKOzvq0V9t0Ll0NqjHqbsg==
// U2FsdGVkX1+TE4kmj+79HTGUs34EEscWkgAOElxg9m710/RDfusxdTK1BgsEft0pDFfCP2IogqkR7oVaHHdeqw==

export const decryptLevelCookie = (cookieLevel: string) => {
  return AES.decrypt(cookieLevel, process.env.REACT_APP_SALT as string).toString(enc.Utf8);
};

export const encryptLevelCookie = (cookieLevel: string) => {
  // Rotation
  return AES.encrypt(cookieLevel, process.env.REACT_APP_SALT as string).toString();
};

