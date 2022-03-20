import { Component, OnInit } from '@angular/core';
import { characters } from '../models/character.model';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.css']
})
export class CharacterAddComponent implements OnInit {

    id: any;
    character: characters = {
    name: '',
    gender: '',
    species: '',
    origin: '',
    image: ''
  };
  submitted = false;
  constructor(private CharactersService: CharactersService) { }


  ngOnInit(): void {
  }
  saveCharacters(): void {
    const data = {
      name: this.character.name,
      gender: this.character.gender,
      species: this.character.species,
      origin: this.character.origin,
      image: this.character.image
  };

    this.CharactersService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });
  }

  newCharacter(): void{
    this.submitted = false;
    this.character = {
      name: '',
      gender: '',
      species: '',
      origin: '',
      image: ''
    }
  }
}
