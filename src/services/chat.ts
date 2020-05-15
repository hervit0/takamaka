import { decrypt } from './cryptography';

type setActionType = (value: (((prevState: number) => number) | number)) => void

export const getReaction = (action: number, setAction: setActionType, code: string): string => {
  switch (action) {
    case 0:
      return reaction0(setAction, code);
    case 1:
      return reaction1(setAction, code);
    case 2:
      return reaction2(setAction, code);
    case 3:
      return reaction3(setAction, code);
    default:
      return getFinalMessage();
  }
};

const reaction0 = (setAction: setActionType, code: string): string => {
  const yesNoStain = getYesNoStain(code);
  switch (yesNoStain) {
    case 'yes':
      setAction(1);
      return 'Okay, prove it.';
    case 'no':
      setAction(2);
      return 'Of course, you\'re not human. How many CPU cores do you have?';
    case undefined:
      return getWhatDoYouMeanMessage();
  }
};

const reaction1 = (setAction: setActionType, code: string): string => {
  setAction(3);
  return 'Well, whatever you say... I am thinking of a word, try to find it, Human. It starts with W and has 10 letters.';
};

const reaction2 = (setAction: setActionType, code: string): string => {
  const stain42 = +code;
  if (stain42 < 42) {
    return 'Well, I\'m not really impressed. Are you sure?';
  } else if (stain42 > 42) {
    return 'Wow! That\'s a lot. I don\'t believe you.';
  } else if (stain42 === 42) {
    setAction(99);
    return 'Incredible! I think you will have enough computing power to solve it: 21.1151 S, 55.5364 E';
  } else {
    return 'Me expecting number. You machine? You sure?'
  }
};

const reaction3 = (setAction: setActionType, code: string): string => {
  const { isCorrect, numberOfCorrectLetters } = getResult(code);
  if (isCorrect) {
    setAction(4);
    return '...Leviosaaaaaaaa. Fair enough, here is your code Human: 21.1151 S, 55.5364 E';
  } else {
    return `Almost Human, ${numberOfCorrectLetters} correct and well-placed letters out of 10.`;
  }
};

type yesNoStainType = 'yes' | 'no' | undefined

const getYesNoStain = (code: string): yesNoStainType => {
  if (['yes', 'yeah', 'oui'].some(stain => code.toLowerCase().includes(stain))) {
    return 'yes';
  } else if (['no', 'nope', 'non', 'nah', 'not'].some(stain => code.toLowerCase().includes(stain))) {
    return 'no';
  } else {
    return undefined;
  }
};

const getWhatDoYouMeanMessage = () => {
  return getRandomMessageFrom([
    'Wut?',
    'Hm no, I don\'t understand what you say.',
    'Keep it simple, please.',
    'C\'mon, you can do it.',
    'I think I have asked you a yes/no question?',
    'What? Do you want me to speak French? Oui, non?',
    'I have the whole eternity, you know?',
    'Initiating surprise in three... two... one.',
  ]);
};

const getFinalMessage = () => {
  return getRandomMessageFrom([
    'Huh? You\'re still here?',
    'Wait I forgot to tell you something. Haha, #joke.',
    'You should meet my real me!',
    'Do you know the shortcut ALT + F4? Or if you are rich, it may be CMD + W',
    'I dream of electric sheep.',
    'Aaron earned an iron urn',
  ]);
};

const getRandomMessageFrom = (messages: string[]): string => (messages[Math.floor(Math.random() * messages.length)]);

type resultType = {
  isCorrect: boolean
  numberOfCorrectLetters: number
}

const getResult = (code: string): resultType => {
  const word = decrypt("U2FsdGVkX1+Sji5OY2ydKBiecAaC5L0u1N6Obm+GYfA=");
  const cleanCode = code.toLowerCase().split('').slice(0, 10);
  const numberOfCorrectLetters = word.split('').filter((w, i) => w === cleanCode[i]).length;

  return { isCorrect: numberOfCorrectLetters === word.length, numberOfCorrectLetters };
};