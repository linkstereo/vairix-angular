import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaPersonajesComponent} from "./lista-personajes/lista-personajes.component";
import {RequestInfoDetailsComponent} from "./request-info-details/request-info-details.component";
import {NgIf} from "@angular/common";
import {RestApiClientService} from "./rest-api-clien-service/rest-api-client.service";
import {CharacterDetailsComponent} from "./character-details/character-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ListaPersonajesComponent, RequestInfoDetailsComponent, NgIf, CharacterDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'vairix-angular';

  verListaDePersonajes = true;
  verInfoRequests = false;
  verCharacterDetails = false;

  currentCharacter: any;

  constructor(private restApiClient: RestApiClientService) {
  }

  updateView(value: string) {
    if (value === 'personajes') {
      this.verListaDePersonajes = true;
      this.verInfoRequests = false;
      this.verCharacterDetails = false;
    } else if (value === 'requests') {
      this.verListaDePersonajes = false;
      this.verInfoRequests = true;
      this.verCharacterDetails = false;
    } else if (value === 'details') {
      this.verListaDePersonajes = false;
      this.verInfoRequests = false;
      this.verCharacterDetails = true;
    }
  }

  ngOnInit(): void {
    this.restApiClient.register().subscribe( (token) => {
      localStorage.setItem("auth-token",token.accessToken);
    });

  }

  verDetails($event: string) {
    this.currentCharacter = $event;
    this.updateView('details');
  }
}
