import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() Pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
    console.log(this.Pokemon);
  }

}
