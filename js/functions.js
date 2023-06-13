// Функция проверки длины строки.

const getStringLength = (stringLength, maxLength) => stringLength.lenght <= maxLength;
getStringLength('I am happy', 10);

// Функция для проверки, является ли строка палиндромом.

const isPolindrome = (string) => {
  const stringWihtoutSpaces = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = stringWihtoutSpaces.length - 1; i >= 0; i--) {
    reversedString += stringWihtoutSpaces.at(i);
  }
  return stringWihtoutSpaces === reversedString;
};

isPolindrome('А роза упала на лапу Азора');
isPolindrome('Полиндром не полиндром');
