import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { PokedexService } from './pokedex.service';
@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  Pokemons: Pokemon[];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.Pokemons = this.pokedexService.GetPokedex();
  }
}
