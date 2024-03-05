<h1 align="center">
    Escuela Politécnica Nacional<br>
    Facultad de Ingeniería en Sistemas<br>
    Construcción y Evolución de Software<br>
</h1>

### Integrantes

Nardy Cachipuendo  
Cristofer Paucar  
Nathaly Simba  

## Descripción de Requerimientos - Incremento 1

### Requisitos Funcionales

- El sistema debe permitir al usuario registrar una nueva acción.
- Debe haber campos para ingresar la fecha de compra, el precio de compra por acción y la cantidad de acciones.
- Después de ingresar los datos de la transacción, el sistema debe calcular automáticamente el costo total de compra multiplicando el precio de compra por acción por la cantidad de acciones.
- La aplicación debe mostrar de manera clara y legible el costo total de compra calculado  después de ingresar los datos de la transacción.
- El sistema debe tener la capacidad de detectar valores no numéricos y valores negativos ingresados por el usuario.
- En caso de valores incorrectos, el sistema debe mostrar una notificación clara que indique el tipo de error y proporcione orientación sobre cómo corregirlo.

### Requisitos No Funcionales

- La interfaz de usuario debe ser clara y amigable.
- Se deben realizar validaciones en tiempo real buscando que todos los datos hayan sido ingresados.
- El cálculo automático del costo total debe ser preciso y reflejar la multiplicación correcta del precio de compra por acción y la cantidad de acciones, evitando errores de redondeo o imprecisiones.
- La  presentación  del  costo  total  debe  ocurrir  de  manera  rápida  después  de  ingresar  los datos de la transacción, proporcionando una experiencia de usuario eficiente.
- La  presentación  del  costo  total  debe  ser  legible  y  clara,  asegurando  que  los  usuarios puedan comprender fácilmente la información calculada.
- Las  notificaciones  de  error  deben  ser  comprensibles  y  orientadas  a  la  corrección, facilitando al usuario la identificación y resolución de problemas.
- La notificación de valores incorrectos debe ser instantánea, proporcionando retroalimentación inmediata al usuario.
