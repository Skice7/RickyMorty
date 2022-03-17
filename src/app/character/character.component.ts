import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters:any = null;

  constructor(private CharactersService: CharactersService) { }

  ngOnInit(): void {
    this.CharactersService.retornar()
    .subscribe( result => this.characters = result)
  }

}
