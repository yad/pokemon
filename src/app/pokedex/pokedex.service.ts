import { Injectable } from '@angular/core';
import Pokedex from './Pokedex.json';
import { Pokemon } from '../pokemon/pokemon';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  public GetPokedex(): Pokemon[] {
    return Pokedex
      .filter(({id}) => id < 151)
      .map((pokemon) => Object.assign(new Pokemon(), {
        Index: pokemon.id,
        Name: _.get(pokemon, 'species.value.names', []).find(({language}) => language.name === 'fr').name,
        Type1: _.get(pokemon, 'types', []).find(({slot}) => slot === 1).type.name,
        Type2: _.get(_.get(pokemon, 'types', []).find(({slot}) => slot === 2), 'type.name')
      }));
  }
}
