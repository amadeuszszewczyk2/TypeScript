import React from "react";
import "./index.css";

interface Task1Interface {
  taskName: string | null;
  taskId: number;
  doTask: (param: string) => string;
}

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

function greet(nameParam: string): string {
  return `Hello ${nameParam}`;
}

function processString(strParam?: string): string {
  if (!strParam) {
    return "Nie podano argumentu";
  }

  const lengthOfString = strParam.length;
  const isEvenNumber = isEven(lengthOfString);
  const message = getParityMessage(isEvenNumber);
  return `${strParam} - Liczba znaków: ${lengthOfString}. ${message}`;
}

export const Task1: React.FC<Task1Interface> = ({
  taskName,
  taskId,
  doTask,
}) => {
  const getSum = (param1: number, param2: number): number => param1 + param2;
  const jakisParametr = "Testowy parametr";
  const result = doTask(jakisParametr);
  const name = "Maciej";

  return (
    <div className="container--typescript-task1">
      <span>Task Name: {taskName} </span>
      <br />
      <span>Task ID: {taskId} </span>
      <br />
      <span>doTask: {result} </span>
      <br />
      <span>{greet(name)}</span>
      <br />
      <span>{getSum(1, 2)}</span>
      <br />
      <span>
        Jaka jest liczba liter w słowie "Maciej"? {getCountCharacters(name)}
      </span>
      <br />
      <span>Czy liczba 2 jest parzysta? {isEven(2) ? "Tak" : "Nie"}</span>
      <br />
      <span>{processString(name)}</span>
      <br />
      <span>Test</span>
      <br />
      <span>dog</span>
    </div>
  );
};
