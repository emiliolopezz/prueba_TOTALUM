import { Component, OnInit } from '@angular/core';
import { TotalumService } from '../../totalum.service';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})

export class ClientesComponent implements OnInit {
  clientes: any[] = [];  // Aquí guardamos todos los clientes
  filteredClientes: any[] = [];  // Aquí guardamos los clientes filtrados
  paginatedClientes: any[] = [];  // Aquí guardamos los clientes para la paginación
  searchTerm: string = '';  // Para el filtro de búsqueda
  page: number = 1;  // Página actual
  itemsPerPage: number = 5;  // Número de clientes por página
  totalPages: number = 1;  // Total de páginas

  constructor(private totalumService: TotalumService) {}

  ngOnInit() {
    this.totalumService.getClientes().subscribe(
      (clientes: any[]) => {
        this.clientes = clientes;  // Asigna todos los clientes
        this.filteredClientes = clientes;  // Inicializa los clientes filtrados
        this.totalPages = Math.ceil(this.clientes.length / this.itemsPerPage); // Calcula las páginas
        this.paginate();  // Aplica la paginación inicial
      },
      (error) => {
        console.error('Error al cargar clientes:', error);
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

  // Filtra clientes
  onSearchChange() {
    // Filtrar los clientes
    this.filteredClientes = this.clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      cliente.email.toLowerCase().includes(this.searchTerm.toLowerCase())  // Filtra por nombre o email
    );
    // Recalcular el número de páginas según los clientes filtrados
    this.totalPages = Math.ceil(this.filteredClientes.length / this.itemsPerPage);
    this.page = 1;  // Resetear a la primera página
    this.paginate();  // Aplicar la paginación a los clientes filtrados
  }

  // Aplica la paginación a los clientes (filtrados o no)
  paginate() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedClientes = this.filteredClientes.slice(startIndex, endIndex);
  }
}