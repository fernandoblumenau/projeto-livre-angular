import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from 'src/app/models/paises';
import { ApiIbgePaisesService } from 'src/app/services/api-ibge-paises.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  paises$ = new Observable<Paises[]>();

  constructor(private ibgeService: ApiIbgePaisesService) { }

  ngOnInit(): void {
  this.loadPaises();
  }

  loadPaises(){
      this.paises$ = this.ibgeService.getPaises();
      // this.ibgeService
      //     .getPaises()
      //     .subscribe(
      //      (response) => {
      //        console.log(response);
      //      }
      //    );

  }
}
