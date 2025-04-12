import { Component, OnInit } from '@angular/core';
import { TotalumService } from '../../totalum.service';


@Component({
  selector: 'app-pedidos',
  standalone: false,
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})

export class PedidosComponent implements OnInit {
  pedidos: any[] = [];  // Aquí guardamos todos los pedidos
  filteredPedidos: any[] = [];  // Aquí guardamos los pedidos filtrados
  paginatedPedidos: any[] = [];  // Aquí guardamos los pedidos para la paginación
  searchTerm: string = '';  // Para el filtro de búsqueda
  page: number = 1;  // Página actual
  itemsPerPage: number = 5;  // Número de pedidos por página
  totalPages: number = 1;  // Total de páginas

  constructor(private totalumService: TotalumService) {}

  ngOnInit() {
    this.totalumService.getPedidos().subscribe(
      (pedidos: any[]) => {
        this.pedidos = pedidos;  // Asigna todos los pedidos
        this.filteredPedidos = pedidos;  // Inicializa los pedidos filtrados
        this.totalPages = Math.ceil(this.pedidos.length / this.itemsPerPage); // Calcula las páginas
        this.paginate();  // Aplica la paginación inicial
      },
      (error) => {
        console.error('Error al cargar pedidos:', error);
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

  // Filtra pedidos
  onSearchChange() {
    // Filtrar los pedidos
    this.filteredPedidos = this.pedidos.filter(pedido =>
      pedido.nombre_cliente.toLowerCase().includes(this.searchTerm.toLowerCase())  // Filtra por cliente
    );
    // Recalcular el número de páginas según los pedidos filtrados
    this.totalPages = Math.ceil(this.filteredPedidos.length / this.itemsPerPage);
    this.page = 1;  // Resetear a la primera página
    this.paginate();  // Aplicar la paginación a los pedidos filtrados
  }

  // Aplica la paginación a los pedidos (filtrados o no)
  paginate() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPedidos = this.filteredPedidos.slice(startIndex, endIndex);
  }
}