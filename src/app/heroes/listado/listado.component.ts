import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]=['Spiderman','IronMan','Hulk','Thor','Viuda Negra']
  heroeBorado: string='';

  borrarHeroe(){
    this.heroeBorado=this.heroes.shift() || '';
  }
}