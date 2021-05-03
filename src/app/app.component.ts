import { Component } from '@angular/core';
import array from "../utils/words";
import country from "../utils/country";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words: string = '';
  randomCountries = '';
  limit: number = 10;
  num: number = 0;

  silder = (slideLimit: number)=>{
    this.limit = slideLimit;
  }

  generate = ()=>{
    this.words = array.slice(0, this.limit).join(' ');
  }

  randCountry = ()=>{
    this.num = Math.floor(Math.random() * (10 - 1) + 1);
    this.randomCountries = country.slice(0, this.num).join(' ');
  }

  reset = ()=>{
    this.words = '';
    this.randomCountries = '';
  }

}
