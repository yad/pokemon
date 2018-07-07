import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import Pokedex from "./Pokedex.json";

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  Pokemons: Pokemon[];

  constructor() { }

  ngOnInit() {
    this.Pokemons = Pokedex.filter((value, index) => index < 151).map((value, index) => new Pokemon(index + 1, value));
  }
}
