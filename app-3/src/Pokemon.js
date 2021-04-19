import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Pokemon = (prop) => {
  const {name} = prop.match.params
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((e) => {
      setPokemon(e.data)
    })
  }, [name])

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites?.front_default} />
    </div>
  )
}

export default Pokemon