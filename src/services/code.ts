import { decrypt, encrypt, hash } from './cryptography';

type CodeValidation = {
  isValid: boolean,
  nextLevel?: string
}

export const getCodeValidation = (code: string, encryptedLevel: string): CodeValidation => {
  const level = decrypt(encryptedLevel);

  const map = new Map()
    .set('1', 'U2FsdGVkX1/FmRvcW/yMB5KCai+/S0i5hGp2hmJA0UlFnMrmNKHHNQMlgJBqQOGigKOzvq0V9t0Ll0NqjHqbsg==')
    .set('2', 'U2FsdGVkX1+TE4kmj+79HTGUs34EEscWkgAOElxg9m710/RDfusxdTK1BgsEft0pDFfCP2IogqkR7oVaHHdeqw==');

  if (map.has(level)) {
    if (hash(code.toLowerCase()) === decrypt(map.get(level))) {
      const nextLevel = parseInt(level, 10) + 1;
      return { isValid: true, nextLevel: encrypt(nextLevel.toString()) };
    }
  }

  return { isValid: false };
};
