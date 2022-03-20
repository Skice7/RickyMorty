import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { characters } from '../models/character.model';


@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})

export class CharacterInfoComponent implements OnInit {

    id:any;
    character: characters = {
    name: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }

  constructor(private CharactersService: CharactersService, private _route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');

    this.CharactersService.get(this.id).subscribe(result => {
      this.character = result;
    },
    error => {
      console.log("Errores");
    });
  }

  updateStatus(status: boolean): void {
    const data = {
      name: this.character.name,
      gender: this.character.gender,
      species: this.character.species,
      origin: this.character.origin,
      image: this.character.image,
      status: status
    };

    this.CharactersService.update(this.character.id, data).subscribe (response => {
      this.character.status = status;
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

  deleteCharacter(): void {
    this.CharactersService.delete(this.character.id).subscribe (response => {
      console.log(response);
      this.router.navigate(['/characters']);
    },
    error => {
      console.log(error);
    });
  }

}
