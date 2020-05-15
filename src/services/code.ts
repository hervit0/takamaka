import { decrypt, encrypt, hash } from './cryptography';

type CodeValidation = {
  isValid: boolean,
  nextLevel?: string
}

export const getCodeValidation = (code: string, encryptedLevel: string): CodeValidation => {
  const level = decrypt(encryptedLevel);

  const map = new Map()
    .set('1', 'U2FsdGVkX1+ucU+qtvAYSlaLoe7b0HPeSAh1oG1D9DhvXbPr705zrxagtjnncii2oYnf3Ugx1+DiczkpurjCJQ==')
    .set('2', 'U2FsdGVkX19Ll15dSQzauEyVBzN2B1D1RGajErxZY+mAKfCay1RyGnBJ2rqTR7/FqTHJtWNxYAIF7qUXnb4SaQ==')
    .set('3', 'U2FsdGVkX19FMZaKPf8ZHrO+9nnCoqRgEoKqXSUlNs6eq2jRfLHceWLCV9vaHahCv6W2IUTFClOghlVw8V30eQ==')
    .set('4', 'U2FsdGVkX1+hJp/wOeWMdfIAXi+01Fl3aGbBqnZWmEKEuhjsga/oTWC+dtYlzpnPJ38mFDPof/PyBJaw/pBo0A==')
    .set('5', 'U2FsdGVkX1+y9xjzrdpYMHXVYsmCsjlR5niFQHWV4Obwj8QdR5mK0f2Y5q0ZRE+3quZgF7uA1BfJXMe0vMgWKA==')
    .set('6', 'U2FsdGVkX19fbbzEXLlqcjsc21x0xLzzdS+goC9cnauBhyzRxLuZazxP46ifPNK4JKWjqooH5A4x+d4pxocMvg==')
    .set('7', 'U2FsdGVkX19u4NXlzenkAcUq53IEl+i9B5M9PPpvdxDhxNJfrnPInYhd1lVTcbOvg90JcmeK8Crow0ZA3SrdaQ==')
    .set('8', 'U2FsdGVkX1+65RjJnFd41UaO925fC0gbyhNDCMwgO7xAElldg0rvrCOUvXiyft4UUPmzp4sk9jrJ/CsRFfgk/w==');

  if (map.has(level)) {
    if (hash(code.toLowerCase()) === decrypt(map.get(level))) {
      const nextLevel = parseInt(level, 10) + 1;
      return { isValid: true, nextLevel: encrypt(nextLevel.toString()) };
    }
  }

  return { isValid: false };
};
