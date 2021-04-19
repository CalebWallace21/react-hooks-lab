import React from 'react'
import Pokemon from './Pokemon'
import PokemonList from './PokemonList'
import {Switch, Route} from 'react-router-dom'

export default (
  <Switch>
    <Route exact path="/" component={PokemonList} />
    <Route path="/pokemon/:name" component={Pokemon} />
  </Switch>
)