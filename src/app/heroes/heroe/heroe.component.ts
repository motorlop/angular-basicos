import { Component } from "@angular/core";

@Component({
    selector:'app-heore',
    templateUrl:'heroe.component.html'
})
export class HeoreComponent{
    nombre: string='Iron Man';
    edad: number=33;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
        //return this.nombre+' - '+this.edad.toString();
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }

    cambiarEdad():void{
        this.edad=22;
    }
}