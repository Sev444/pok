interface PokemonProps {
  name: string;
  color: string;
}

export const Pokemon = ({ name, color }: PokemonProps) => {
  console.log(name, "name console");

  return (
    <div className="p-2 bg-black/30 rounded" style={{ color: color }}>
      Hello, Im {name}
    </div>
  )
}