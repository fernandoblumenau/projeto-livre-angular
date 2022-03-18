import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetalhesComponent } from './components/content-detalhes/content-detalhes.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {path: 'paises', component: ContentDetalhesComponent},
  {path: '', redirectTo: '/paises', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
