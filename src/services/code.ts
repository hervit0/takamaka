type CodeValidation = {
  isValid: boolean,
  nextLevel?: string
}

export const getCodeValidation = (code: string, level: string | number | undefined | 0 | 1 | 2 | 3): CodeValidation => {
  return { isValid: true, nextLevel: 'level2' };
};