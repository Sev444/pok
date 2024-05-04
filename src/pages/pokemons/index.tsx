import { Pokemon } from "~/components/Pokemon/Pokemon";
import { useEffect, useState } from "react";
import { Button } from "~/components/Button/Button";

const pokemons = [
    {
      name: "Bulbazaur",
      color: "red",
    },
    {
      name: "Bulbazaur",
      color: "yellow",
    },
    {
      name: "Bulbazaur",
      color: "blue",
    }
  ]

export default function Pokemons() {
  const [pokemonsApiData, setPokemonsApiData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(data => {
        setPokemonsApiData(data.results)
      })
  }, [])

  return (
    <>
      <div className="flex flex-col gap-3 p-2">
        {pokemonsApiData.map(({ name }) => {
          return (
            <div>
              <p>name is {name}</p>
              <Pokemon name={name} color="red" />
              <a href={`/pokemons/${name}`}>смотреть покемона</a>
            </div>
          )
        })}
        <Pokemon name={"Artem"} color={"white"}/>
      </div>
    </>
  );
}
