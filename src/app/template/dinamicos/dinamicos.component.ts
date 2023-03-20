import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number; 
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Felipe',
    favoritos: [
      { id: 1, nombre: 'Apex'},
      { id: 2, nombre: 'Rocket League'},
    ]
  }

  agregarJuego(){
    const addGame: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...addGame});
    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index,1);
  }

  guardar() {
    console.log('Formulario Posteado')
  }

}
