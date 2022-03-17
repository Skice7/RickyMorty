import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  characters:any = null;
  id:any = this.route.snapshot.paramMap.get('id');

  constructor(private CharactersService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.CharactersService.getById(this.id)
    .subscribe( result => this.characters = result)
  }

}
