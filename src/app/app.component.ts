import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaPersonajesComponent} from "./lista-personajes/lista-personajes.component";
import {RequestInfoDetailsComponent} from "./request-info-details/request-info-details.component";
import {NgIf} from "@angular/common";
import {RestApiClientService} from "./rest-api-clien-service/rest-api-client.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaPersonajesComponent, RequestInfoDetailsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'vairix-angular';

  verListaDePersonajes = true;
  verInfoRequests = false;

  constructor(private restApiClient: RestApiClientService) {
  }

  updateView(value: string) {
    if (value === 'personajes') {
      this.verListaDePersonajes = true;
      this.verInfoRequests = false;
    } else if (value === 'requests') {
      this.verListaDePersonajes = false;
      this.verInfoRequests = true;
    }
  }

  ngOnInit(): void {
    this.restApiClient.register().subscribe( (token) => {
      localStorage.setItem("auth-token",token.accessToken);
    });

  }
}
