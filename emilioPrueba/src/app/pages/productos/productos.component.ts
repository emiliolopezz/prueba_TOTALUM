import { Component, OnInit } from '@angular/core';
import { TotalumService } from '../../totalum.service';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];  // Aquí guardamos todos los productos
  filteredProductos: any[] = [];  // Aquí guardamos los productos filtrados
  paginatedProductos: any[] = [];  // Aquí guardamos los productos para la paginación
  searchTerm: string = '';  // Para el filtro de búsqueda
  page: number = 1;  // Página actual
  itemsPerPage: number = 5;  // Número de productos por página
  totalPages: number = 1;  // Total de páginas

  constructor(private totalumService: TotalumService) {}

  ngOnInit() {
    this.totalumService.getProductos().subscribe(
      (productos: any[]) => {
        this.productos = productos;  // Asigna todos los productos
        this.filteredProductos = productos;  // Inicializa los productos filtrados
        this.totalPages = Math.ceil(this.productos.length / this.itemsPerPage); // Calcula las páginas
        this.paginate();  // Aplica la paginación inicial
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  // Método de paginación
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.page = page;
      this.paginate();
    }
  }

  // Filtra productos
  onSearchChange() {
    // Filtrar los productos
    this.filteredProductos = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    // Recalcular el número de páginas según los productos filtrados
    this.totalPages = Math.ceil(this.filteredProductos.length / this.itemsPerPage);
    this.page = 1;  // Resetear a la primera página
    this.paginate();  // Aplicar la paginación a los productos filtrados
  }

  // Aplica la paginación a los productos (filtrados o no)
  paginate() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProductos = this.filteredProductos.slice(startIndex, endIndex);
  }
}
