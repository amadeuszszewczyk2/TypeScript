import React from "react";
import "./index.css";

interface AnalyzeResult {
  inputValue: string;
  charCount: number;
  isEven: boolean;
}

function processString(input: string): string {
  if (!input) return "Błąd: Brak danych wejściowych";
  return `Tekst: ${input}, Ilość znaków: ${input.length}, Parzysta: ${
    input.length % 2 === 0
  }`;
}

function analyzeString(input: string): AnalyzeResult | string {
  if (!input) return "Błąd: Brak danych wejściowych";

  return {
    inputValue: input,
    charCount: input.length,
    isEven: input.length % 2 === 0,
  };
}

function printAnalyzeResult(result: AnalyzeResult | string): string {
  if (typeof result === "string") return result;

  return `Tekst: ${result.inputValue}, Ilość znaków: ${result.charCount}, Parzysta: ${result.isEven}`;
}

export const Task2 = () => {
  const input = "Dane wejściowe";
  const analyzed = analyzeString(input);
  const printedResult = printAnalyzeResult(analyzed);

  return <div className="container--typescript-task2">{printedResult}</div>;
};
