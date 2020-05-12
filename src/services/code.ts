import { decrypt, encrypt, hash } from './cryptography';

type CodeValidation = {
  isValid: boolean,
  nextLevel?: string
}

export const getCodeValidation = (code: string, encryptedLevel: string): CodeValidation => {
  const level = decrypt(encryptedLevel);

  const map = new Map()
    .set('1', 'U2FsdGVkX1+ucU+qtvAYSlaLoe7b0HPeSAh1oG1D9DhvXbPr705zrxagtjnncii2oYnf3Ugx1+DiczkpurjCJQ==')
    .set('2', 'U2FsdGVkX19Ll15dSQzauEyVBzN2B1D1RGajErxZY+mAKfCay1RyGnBJ2rqTR7/FqTHJtWNxYAIF7qUXnb4SaQ==');

  if (map.has(level)) {
    if (hash(code.toLowerCase()) === decrypt(map.get(level))) {
      const nextLevel = parseInt(level, 10) + 1;
      return { isValid: true, nextLevel: encrypt(nextLevel.toString()) };
    }
  }

  return { isValid: false };
};
