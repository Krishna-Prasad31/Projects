function generatePassword(length, includeLowerChars, includeUpperChars, includeNumbers, includeSymbols) {

  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersChars = "1234567890";
  const symbolChars = "!@#$%^&*()_+"

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerChars ? lowerCaseChars : "";
  allowedChars += includeUpperChars ? upperCaseChars : "";
  allowedChars += includeNumbers ? numbersChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if(length <= 0) {
    return `(Wrong Input)`;
  }
  if(allowedChars.length = 0) {
    return `(No space for characters)`
  }

  for(i =0 ; i<length; i++) {
    randomIndex = Math.floor(Math.random() * allowedChars.length -1);
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 12;
      includeLowerChars = true;
      includeUpperChars = true;
      includeNumbers = true;
      includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowerChars,
                                  includeUpperChars,
                                  includeNumbers,
                                  includeSymbols

)

console.log(password)