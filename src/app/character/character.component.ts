import { Component, OnInit } from '@angular/core';
import { characters } from '../models/character.model';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character?: characters[];

  constructor(private CharactersService: CharactersService) { }

  ngOnInit(): void {
    this.CharactersService.getAll().subscribe( result => {
      this.character = result;
    },
    error => {
      console.log("Errores");
    });
  }

}
