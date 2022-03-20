import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharacterAddComponent } from './character-add/character-add.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { CharacterComponent } from './character/character.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'character',
    component:CharacterComponent
  },
  {
    path:'character/add',
    component:CharacterAddComponent
  },

  {
    path:'characters/:id',
    component:CharacterInfoComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
