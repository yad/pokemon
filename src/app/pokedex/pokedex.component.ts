import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import Pokedex from "./Pokedex.json";

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  MaxPokemon: number;
  Pokemons: Pokemon[];

  constructor() { }

  ngOnInit() {
    this.MaxPokemon = 151;
    this.Pokemons = Pokedex.map((value, index) => new Pokemon(index + 1, value));
  }
}
