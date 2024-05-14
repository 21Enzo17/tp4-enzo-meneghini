import { Component } from '@angular/core';

@Component({
  
  selector: 'app-punto2',
  standalone: true,
  imports: [],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {

  palabras: string[] = ['hola', 'adios', 'computadora', 'cabeza', 'estudiar', 'leon', 'poesía', 'raíz', 'huevo', 'sueño'];
  listaPalabras: string[] = [];
  respuestas: number[] = [];
  iteracionPalabra = 0;
  opcionElegida = 0;
  aciertos = 0;
  errores = 0;
  fin = false;

  iniciarJuego() {
    this.iteracionPalabra = 0;
    this.opcionElegida = 0;
    this.aciertos = 0;
    this.errores = 0;
    this.listaPalabras = this.desordenarPalabras();
    this.fin=false;
  }


  generarRespuestasAleatorias(palabra: string, opcion: number){
    let respuestaAleatoria;
    this.opcionElegida = opcion;
    this.respuestas.push(this.respuestaCorrectaPorOpcion(opcion, palabra));
    
    while (this.respuestas.length < 4) {
      respuestaAleatoria = Math.floor(Math.random() * (this.respuestas[0] + 3)) + 1;
      if (!this.respuestas.includes(respuestaAleatoria)) {
        this.respuestas.push(respuestaAleatoria);
      }
    }

    for (let i = this.respuestas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.respuestas[i], this.respuestas[j]] = [this.respuestas[j], this.respuestas[i]];
    }
  
  }

  desordenarArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  desordenarPalabras() {
    const palabrasDesordenadas = this.desordenarArray(this.palabras);
    return palabrasDesordenadas.slice(0, 8);
  }

  finalizarJuego() {
    this.iteracionPalabra = 0;
    this.opcionElegida = 0;
    this.listaPalabras = [];
    this.respuestas = [];
    this.fin = true;
    console.log(this.fin);
  }

  verificarRespuesta(opcionElegida: number, opcion: number) {
    let respuestaCorrecta = this.respuestaCorrectaPorOpcion(opcion,this.listaPalabras[this.iteracionPalabra]);
    if (respuestaCorrecta === opcionElegida) {
      this.aciertos++;
    } else {
      this.errores++;
    }
    this.opcionElegida = 0;
    this.iteracionPalabra++;
    this.respuestas = [];
      if (this.iteracionPalabra >= this.listaPalabras.length) {
        // El juego ha terminado
        this.finalizarJuego(); // Reiniciar el juego
      }
  }

  respuestaCorrectaPorOpcion(opcionElegida: number, palabra: string): number {
    if (opcionElegida === 1) {
      return this.contarVocales(palabra);
    }
    if (opcionElegida === 2) {
      return this.contarConsonantes(palabra);
    }
    if (opcionElegida === 3) {
      return palabra.length;
    }else{
      return this.contarSilabas(palabra);
    }
  }

  contarVocales(palabra: string) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    return [...palabra].filter(letra => vocales.includes(letra.toLowerCase())).length;
  }

  contarConsonantes(palabra: string) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    return [...palabra].filter(letra => !vocales.includes(letra.toLowerCase())).length;
  }

  contarSilabas(palabra: string) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    const diptongos = ['ai', 'au', 'ei', 'eu', 'oi', 'ou', 'ia', 'ie', 'io', 'ua', 'ue', 'uo'];
    const triptongos = ['iai', 'iei', 'uai', 'uei', 'uau', 'ueu', 'iái', 'iéi', 'uái', 'uéi'];
    const hiatos = ['í', 'ú'];
    let count = 0;
  
    for (let i = 0; i < palabra.length; i++) {
      if (vocales.includes(palabra[i].toLowerCase())) {
        count++;
        if (i < palabra.length - 2 && triptongos.includes((palabra[i] + palabra[i + 1] + palabra[i + 2]).toLowerCase())) {
          count--;
        } else if (i < palabra.length - 1 && diptongos.includes((palabra[i] + palabra[i + 1]).toLowerCase())) {
          if (!hiatos.includes(palabra[i].toLowerCase()) && !hiatos.includes(palabra[i + 1].toLowerCase())) {
            count--;
          }
        }
      }
    }
  
    return count;
  }

}
