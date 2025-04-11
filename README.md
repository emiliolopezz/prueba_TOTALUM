 <h2 align="center">EMILIO LOPEZ LEON</h2>
 <h2 align="center">PRUEBA TECNICA</h2>
 
## DOCUMENTACION

Esta prueba técnica tiene como objetivo desarrollar una aplicación en Angular que consuma datos de la API de Totalum, mostrando información sobre productos, pedidos y clientes en tablas con funcionalidad de filtro, paginación y búsqueda. Para ello, se utiliza un backend que interactúa con la API y devuelve la información en formato JSON.

📌1-Instrucciones de instalación y configuración <br>
📌2-Explicación de la estructura del código <br>
📌3-Breve manual de uso <br>
📌4-Tecnologias Usadas <br>


## 📌 Requisitos

- Frontend: Angular 19.2.7
- Backend: Node.js con el SDK de Totalum


## 1-Instrucciones de instalación y configuración

1. Clonar el repositorio y extraer el zip (donde se encuentra el backend y frontend):<br>
   ```
   git clone https://github.com/emiliolopezz/prueba_TOTALUM.git
   ```
2. Iniciar Backend (dentro de api-server):<br>
	```
	node index.js
	```
3. Iniciar Frontend (dentro de emilioPrueba):<br>
	```
	ng serve
	```
4. Visita la aplicacion en tu navegador con la ruta que te da angular<br>
	

## 2-Explicación de la estructura del código

- api-server → Backend para manejar la api, ya que angular es un framework que solo funciona en el navegador y no se puede implementar en el la api.
- emilioPrueba → Frontend, se encuentra aqui todos los componentes de angular.

## 3-Breve manual de uso

- Iniciar el Backend<br>
Asegúrate de que el servidor Node.js esté corriendo y sirviendo las rutas adecuadas.
- Iniciar el Frontend<br>
iniciar la aplicación Angular con el comando "ng serve".
- Interacción<br>
Navega entre las pestañas de Productos, Pedidos y Clientes.<br>
Utiliza el filtro de búsqueda para encontrar elementos específicos y navega entre las páginas usando la paginación.


## 4-Tecnologias Usadas

- Angular: Framework frontend utilizado para la creación de la interfaz de usuario y la lógica del cliente.

- Node.js: Backend utilizado para interactuar con la API de Totalum.

- Totalum SDK: Conjunto de herramientas que permite realizar peticiones a la API de Totalum desde el backend.

- CSS: Para personalización adicional del diseño y tablas.
