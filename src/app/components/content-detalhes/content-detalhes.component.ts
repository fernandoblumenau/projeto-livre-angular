import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from 'src/app/models/paises';
import { ApiIbgePaisesService } from 'src/app/services/api-ibge-paises.service';


@Component({
  selector: 'app-content-detalhes',
  templateUrl: './content-detalhes.component.html',
  styleUrls: ['./content-detalhes.component.scss']
})
export class ContentDetalhesComponent implements OnInit {

  constructor(private ibgeService: ApiIbgePaisesService) { }

  ngOnInit(): void {

  }

  paises$ = new Observable<Paises[]>();

  loadPaisesBySigla(event: any) {
    const paises = (event.target as HTMLSelectElement)?.value;
    if(paises){
      this.paises$ = this.ibgeService.getPaisesBySigla(paises);
      this.ibgeService
          .getPaisesBySigla(paises)
          .subscribe(
           (response) => {
             console.log(response);
           }
         );
    }
  }


}
