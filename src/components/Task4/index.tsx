import React, { useEffect, useState } from "react";
import "./index.css";

interface PlanetInterface {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

export const Task4 = () => {
  const [getCount, setCount] = useState<number>(0);

  const handleButtonClick = () => {
    setCount(getCount + 1);
  };

  const [getPlanets, setPlanets] = useState<PlanetInterface[]>([]);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const results = await fetch("https://swapi.dev/api/planets/?page=1");
        if (!results.ok) {
          throw new Error("Something went wrong");
        }
        const data = await results.json();
        const planetData = data.results as PlanetInterface[];
        setPlanets(planetData);
      } catch (error) {
        console.error("There was an error fetching the planets:", error);
      }
    }

    fetchPlanets();
  }, []);

  function addSum(a: number, b: number): number {
    return a + b;
  }

  const a = 3;
  const b = 5;

  return (
    <>
      <div>
        <button onClick={handleButtonClick}>Kliknij mnie</button>
        Liczba kliknięć: {getCount}
      </div>

      <br></br>
      <div>Suma: {addSum(a, b)}</div>
      <br></br>
      <ul>
        {getPlanets.map((planet) => (
          <li key={planet.name}>
            <h3>{planet.name}</h3>
            <p>Rotation Period: {planet.rotation_period}</p>
            <p>Orbital Period: {planet.orbital_period}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
