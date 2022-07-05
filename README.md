# Test

Test realizado en **ReactJS**

**Objetivo**:
1. Agregar un campo de entrada que se pueda usar para editar los títulos de los productos (los títulos deben cambiar
mientras se escribe).
1. Agregar un selector de rango para editar el tamaño de fuente de los títulos de los productos.
1. Fuera de la sección, se muestra la suma total de las cantidades de productos que provienen de la
entradas de cada producto.


1. **Componentes**
		Navbar: muestra el número total de productos que se seleccionan para agregar al carrito.
		Product:
			Product.js: Lógica para agregar productos al carrito, controlar tamaño de fuente con input tipo range y controlar texto del título.
			ProductHeader.js: componente con imágen del producto y títutlo.
			ProductBody.js: componente con precio, input para seleccionar cantidad de productos y parrafo con descripción del producto.
			ProductFooter.js: componente con botón para agregar productos al carrito.
1. **Hooks**:
		UseState: para controlar los estados de componentes.
		UseEffect: para controlar el renderizado de funciones sobre el componente.
		UseForm: Custom Hook para controlar el contenido de los inputs tipo "text".
1. **React Redux** para manejar el estado del contador global de productos agregados al carrito y estado del loader de productos (se realizo un pequeño ejercicio como si estuviera cargando los productos desde una API).
1. **PropTypes ** en los componentes para verificar que reciben los tipos de datos correctos para cada uno.

------------

### Estilos
Uso de Grid Layout, Flexbox para maquetado responsive.
CSS sin uso de algún tipo de libreria o framework.

[![Desktop](https://res.cloudinary.com/dttvufb2d/image/upload/v1656981624/Portfolio/Test%20Dango/Capture_t7dey2.png "Desktop")](https://res.cloudinary.com/dttvufb2d/image/upload/v1656981624/Portfolio/Test%20Dango/Capture_t7dey2.png "Desktop")

[========]

[![Mobile](https://res.cloudinary.com/dttvufb2d/image/upload/v1656981659/Portfolio/Test%20Dango/capture_mobile_tthtix.png "Mobile")](https://res.cloudinary.com/dttvufb2d/image/upload/v1656981659/Portfolio/Test%20Dango/capture_mobile_tthtix.png "Mobile")


[========]

### Aplicación:
**git clone https://github.com/CarlosSalg/test-dango.git**
Ejecuta para clonar repositorio.

**npm install**
Instala la dependencias del proyecto.

**npm start**
Ejecuta el proyecto en tu navegador.