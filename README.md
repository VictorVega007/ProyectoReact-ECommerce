# Proyecto de E-Commerce en React 
## _Woodstock Shop_

Woodstock Shop es un proyecto de tienda online de instrumentos musicales. Está creado con React DOM y el objetivo es que el usuario pueda realizar compra de productos de la tienda y crear su orden correspondiente. 

## Inicializar la app

La App se inicia a través de la terminal con el comando 'npm start', luego de haber instalado las dependencias del node-module correspondiente. 

## Features

La App está organizada por los siguientes componentes:

| Componente | Función |
| ------ | ------ |
| Cart | Muestra el resumen de compra antes de pasar al Form de Checkout |
| CartWidget | Se ubica en el NavBar y muestra el total de items a comprar |
| Footer | Muestra la info de la tienda en el footer de la App |
| Form | Muestra el formulario de checkout |
| Item | Información del producto en el Home de la App |
| ItemCount | Contador para agregar o quitar items desde el ItemDetail del producto |
| ItemDetail | Es el componente del detalle del producto |
| ItemDetailContainer | Contenedor de los cards de detalle de los productos |
| ItemList | Recibe los productos para listarlos en el ItemListContainer |
| ItemListContainer | Muestra el listado de todos los productos en el Home |
| NavBar | Contiene la barra de navegación de la App |
| OrderResume | Muestra el resumen de la compra |

## Propiedades de los productos

Todos los productos tienen las mismas propiedades para mostrarlos en la UI: 

- Id
- Name
- Price
- Category
- Img
- Stock
- Description

## Rutas de Navegación de la App

En el documento 'App.js' se encuentra el BrowserRouter, Routes y Route para navegar a los distintos componentes del proyecto. 

- En el componente NavBar se configura el Link para la navegación al Home '/' y a cada categoría de productos '/category/cat.id'. Este componente se muestra durante todo el proceso de navegación en la App.

- El componente Item que contiene la información de cada producto contiene el Link para visualizar el detalle o componente ItemDetail que contiene una descripción más precisa de cada producto. 
- En el componente ItemDetail hay un render condicional en el cual se dan dos condiciones:
    + Si el producto tiene stock se renderiza el componente contador (ItemCount), una vez que el usuario elija la cantidad de productos se habilita el botón que apunta al componente del carrito (Cart), para que el usuario revise el resumen de compra y pase al checkout (Form). 
    + Si el producto no tiene stock se renderiza el botón que contiene el Link hacia el inicio o el Home de la App para que el usuario peuda elegir los productos que tienen stock. De lo contrario no se permite que el usuario agregue el producto sin stock en el carrito de compra. 
    
- En el componente Cart una vez realizada la elección de los productos a comprar, se encuentra el Link respectivo al Form para crear la orden de compra. En este componente se le da la opción al usuario de eliminar un producto o vaciar el carrito de compras completamente. 

- Por último, en el componente Form una vez ingresados todos los datos requeridos en cada input del formulario, se realiza la validación del mismo y si no hay campos con errores se habilita el botón para crear la orden. Al entregarse el mensaje de compra exitosa se le da al usuario su id de la orden y el total de la compra, se vacía el carrito y se renderiza el componente para volver al Home o Inicio de la App. 

## Funciones de la App
> Función para obtener productos de Firestore

Esta función se trata de un Custom Hook y se encuentra en la carpeta 'Hooks' para automatizar el código asíncrono que resuelve la obtención de los productos desde firestore y mostrarlos en el componente ItemListContainer. La llamada a esta función se realiza en el componente ItemListContainer en el UseEffect correspondiente.
> Función para crear la orden de compra

En el componente Form se encuentra la función 'createOrderDetail' la cual contiene la lógica que se encarga de crear la orden de compra de los productos elegidos por el usuario. Maneja las promesas correspondientes que permiten condicionar la creación de la orden si hay stock de productos o no. 
Igualmente, se encarga de crear el documento correspondiente a la orden para insentarlo en la base de datos de Firestore. 
> Función del Context 

En la carpeta 'CartContext' se encuentra la función del 'ContextProvider' que contiene todas las funciones correspondientes a agregar items al carrito, eliminar un items o todos los items del carrito, obtener el precio total de la orden y obtener la cantidad de productos seleccionados por el usuario. Esta función es la que provee o envuelve a toda la app en el archivo 'App.js'.

## Gif de navegación