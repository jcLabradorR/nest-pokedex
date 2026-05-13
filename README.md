<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo

1. Clonar el repositorio
2. ejecutar con npm

````
npm install
````
3. tener nest Cli istalado

```
npm i -g @nestjs/cli
```
4.Levantar la base de datos con docker

```
docker-compose up -d
```
* Conectar Nest con mongo
* Descargar el paquete
* configurar mongo

````
npm i @nestjs/mongoose mongoose
````
5. Clonar el archivo __.env.template__

6. correr la aplicacion

````
npm run start:dev

````
7. reconstruir la bbdd con la semilla

````
http://localhost:3000/api/v2/seed

````

## Stack usado
* MongoDB
* Nest
