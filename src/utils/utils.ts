function getCountCharacters(string: string): number {
  return string.length;
}

function isEven(number: number): boolean {
  return number % 4 === 0;
}

function getParityMessage(isEvenParam: boolean): string {
  return isEvenParam
    ? "Ta liczba jest parzysta."
    : "Ta liczba jest nieparzysta.";
}

export function processString(strParam?: string): string {
  if (!strParam) {
    return "Nie podano argumentu";
  }

  const lengthOfString = strParam.length;
  const isEvenNumber = isEven(lengthOfString);
  const message = getParityMessage(isEvenNumber);
  return `${strParam} - Liczba znaków: ${lengthOfString}. ${message}`;
}
