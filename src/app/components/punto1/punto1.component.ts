
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  // Lista de productos disponibles
  productos: { nombre: string, descripcion: string, imagen: string, precio: number }[] = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1', imagen: 'notebook13l.png', precio: 50 },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2', imagen: 'notebook13l.png', precio: 100 },
    { nombre: 'Producto 3', descripcion: 'Descripción del producto 3', imagen: 'notebook13l.png', precio: 150 },
    { nombre: 'Producto 4', descripcion: 'Descripción del producto 4', imagen: 'notebook13l.png', precio: 200 },
    { nombre: 'Producto 5', descripcion: 'Descripción del producto 5', imagen: 'notebook13l.png', precio: 250 },
    { nombre: 'Producto 6', descripcion: 'Descripción del producto 6', imagen: 'notebook13l.png', precio: 300 }
  ];

  // Carrito de compras y su estado

  carrito: { producto: { nombre: string, descripcion: string, imagen: string, precio: number }, cantidad: number }[] = [];

  total = 0;
  

  // Método para agregar un producto al carrito
  agregarAlCarrito(producto: { nombre: string, descripcion: string, imagen: string, precio: number }) {
    let item = this.carrito.find(item => item.producto === producto);
    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ producto: producto, cantidad: 1 });
    }
  
    this.total += producto.precio;
  }

  

  // Método para eliminar un producto del carrito
  eliminarDelCarrito(producto: { nombre: string, descripcion: string, imagen: string, precio: number }) {
    let item = this.carrito.find(item => item.producto === producto);
    if (item) {
      if (item.cantidad > 1) {
        item.cantidad--;
        this.total -= producto.precio;
      } else {
        this.carrito = this.carrito.filter(item => item.producto !== producto);
        this.total -= producto.precio;
      }
    }
  }

  contarElementosDelCarrito(){
    return this.carrito.reduce((total, item) => total + item.cantidad, 0);
  }
}