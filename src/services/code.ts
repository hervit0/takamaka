type CodeValidation = {
  isValid: boolean,
  nextLevel?: string
}
export const getCodeValidation = (code: string): CodeValidation => {
  return { isValid: true, nextLevel: 'level2' };
};