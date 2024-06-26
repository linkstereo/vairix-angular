import {Component, Input, OnInit} from '@angular/core';
import {RestApiClientService} from "../rest-api-clien-service/rest-api-client.service";
import {Character} from "../dto/character";

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit  {

  @Input() currentCharacter: any;

  character: any;

  constructor(private restApiClient: RestApiClientService) {
  }

  ngOnInit(): void {
    var characters = this.restApiClient.getCharacter(this.currentCharacter)
        .subscribe( (data) => {
          this.character = data;
          console.log(data);
        });
  }



}
