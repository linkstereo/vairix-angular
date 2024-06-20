import {Component, OnInit} from '@angular/core';
import {RestApiClientService} from "../rest-api-clien-service/rest-api-client.service";
import {RequestInfo} from "../dto/requestinfo";

@Component({
  selector: 'app-request-info-details',
  standalone: true,
  imports: [],
  templateUrl: './request-info-details.component.html',
  styleUrl: './request-info-details.component.css'
})
export class RequestInfoDetailsComponent implements OnInit{

  requestInfos: RequestInfo[] = [];

  constructor(private restApiClient: RestApiClientService) {
  }
  ngOnInit(): void {
    this.restApiClient.getRequestsInfo()
        .subscribe( (data) => {
          this.requestInfos = data;
          console.log(data);
        });
  }

}
