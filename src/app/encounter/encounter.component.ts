import { Component, OnInit } from '@angular/core';
import { EncounterService } from './encounter.service';
import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {
  Pokemons: Pokemon[];

  constructor(private encounterService: EncounterService) { }

  ngOnInit() {
    this.Pokemons = this.encounterService.GetPokemons();
  }

}
