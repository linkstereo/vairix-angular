import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RestApiClientService} from "../rest-api-clien-service/rest-api-client.service";
import {Character} from "../dto/character";

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})
export class ListaPersonajesComponent implements OnInit {
    characters: Character[] = [];

    //@Input() verDetailsInput: string;
    @Output() verDetailsOutput = new EventEmitter<string>();

  constructor(private restApiClient: RestApiClientService) {
  }


  ngOnInit(): void {
      var characters = this.restApiClient.getCharacters()
        .subscribe( (data) => {
          this.characters = data;
        });
  }

    showCharacterDetails(id: any) {
      this.verDetailsOutput.emit(id);
    }

}
