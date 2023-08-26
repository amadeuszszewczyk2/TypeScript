import React from "react";
import "./index.css";

type NumerArrayType = number[];

interface ItemInteface {
  id: number;
  name: string;
  surname?: string;
}

export const Task3 = () => {
  const myArray: NumerArrayType = [1, 2, 3, 4, 5];

  const sumAll = (numbers: NumerArrayType): number =>
    numbers.reduce((acc, current) => acc + current, 0);

  const items: ItemInteface[] = [
    { id: 1, name: "John", surname: "Doe" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Mike" },
  ];

  return (
    <>
      <div className="container--typescript-task3">{myArray}</div>
      <br></br>
      <div>Suma elementów tablicy: {sumAll(myArray)}</div> <br></br>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.surname}
          </li>
        ))}
      </ul>
    </>
  );
};
