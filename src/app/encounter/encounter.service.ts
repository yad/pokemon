import { Injectable } from '@angular/core';
import rand from 'random-seed';
import moment from 'moment/src/moment';
import { PokedexService } from '../pokedex/pokedex.service';
import { Pokemon } from '../pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {
  private rand: rand;
  private maxPokemon: number;

  constructor(private pokedexService: PokedexService) {
    this.rand = rand.create();
    this.maxPokemon = 10;
  }

  public GetPokemons(): Pokemon[] {
    const seed = moment().format('X');
    this.rand.seed(Math.round(seed / 10));
    const pokemons: Pokemon[] = [];
    for (let i = 0; i < this.maxPokemon; i++) {
      const index = this.rand.intBetween(1, 151);
      pokemons.push(this.pokedexService.GetPokedex().find(({Index}) => Index === index));
    }

    return pokemons;
  }
}
