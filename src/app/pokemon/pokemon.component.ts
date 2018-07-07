import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './pokemon';
import PokemonColors from './pokemon.style.json';
@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() Pokemon: Pokemon;
  ColorType: string;

  constructor() { }

  ngOnInit() {
    this.ColorType = this.GetBackGroundColor();
  }

  GetBackGroundColor(): any {
    const colorType1 = this.GetColor(this.Pokemon.Type1);
    const colorType2 = this.GetColor(this.Pokemon.Type2);
    if (colorType2) {
      return {'background': 'linear-gradient(180deg, ' + colorType1 + ' 50%, ' + colorType2 + ' 50%)'};
    }

    return {'background-color': colorType1};
  }

  private GetColor(type: string): string {
    return PokemonColors[type];
  }
}
