import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
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
export class DinamicosComponent implements OnInit {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Nicolas',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear'
      },
      {
        id: 2,
        nombre: 'Crash Bash'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregarJuego() {
    const id: number = this.persona.favoritos[0]
                       ? this.persona.favoritos[this.persona.favoritos.length - 1].id + 1
                       : 1;
    const nuevoFavorito: Favorito = {
      id,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFavorito })
    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {
    console.log('Formulario posteado')
  }

}
