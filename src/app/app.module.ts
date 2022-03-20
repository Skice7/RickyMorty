import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { AboutComponent } from './about/about.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterAddComponent } from './character-add/character-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    AboutComponent,
    CharacterInfoComponent,
    CharacterAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
