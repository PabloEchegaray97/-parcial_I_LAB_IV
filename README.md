# Parcial_I_LAB_IV - Echegaray Pablo leg: 51526


Para inciar el proyecto primero clonar el repositorio, renombrar el archivo .env.example ubicado en la carpeta principal del proyecto y renombrarlo a -> .env y colocar las variables de entorno necesarias.
Luego ejecutar los siguientes comandos:

```
npm install
```
Y luego:
```
npm run dev
```

Para utilizar Postman los endpoints usar este archivo guardar el siguiente texto en un archivo .json

```
{
	"info": {
		"_postman_id": "7986afb4-49c4-4cb8-8058-b6fd331630fa",
		"name": "Parcial LAB 4",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "26413084"
	},
	"item": [
		{
			"name": "Authors",
			"item": [
				{
					"name": "get all authors",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/api/authors"
					},
					"response": []
				},
				{
					"name": "get author por id",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/api/authors/6818a5cba81f7dffc40d96c9"
					},
					"response": []
				},
				{
					"name": "delete author por id",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/authors/6818b3cce57a31cc8b438403"
					},
					"response": []
				},
				{
					"name": "put author por id",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": " {\n        \"name\": \"Alan Moore\",\n        \"bio\": \"Escritor britanico.\",\n        \"birthDate\": \"1927-03-06T00:00:00.000Z\",\n        \"nationality\": \"Reino Unido\",\n        \"books\": [\n            \"6818b458e57a31cc8b438406\",\n            \"6818b505e57a31cc8b438411\"\n        ]\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/authors/6818d111c07f6a8881fa8eeb"
					},
					"response": []
				},
				{
					"name": "create author",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": " {\n        \"name\": \"Alan Moore\",\n        \"bio\": \"Escritor britanico.\",\n        \"birthDate\": \"1927-03-06T00:00:00.000Z\",\n        \"nationality\": \"Reino Unido\",\n        \"books\": [\n            \"6818b458e57a31cc8b438406\",\n            \"6818b505e57a31cc8b438411\"\n        ]\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/authors"
					},
					"response": []
				},
				{
					"name": "put agregar book a author",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": " {\n        \"name\": \"Alan Moore\",\n        \"bio\": \"Escritor britanico.\",\n        \"birthDate\": \"1927-03-06T00:00:00.000Z\",\n        \"nationality\": \"Reino Unido\",\n        \"books\": [\n            \"6818b458e57a31cc8b438406\",\n            \"6818b505e57a31cc8b438411\"\n        ]\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/authors/6818cb4b16b17c31ed4fc99e/addBook/6818aca6e3915ca51328f912"
					},
					"response": []
				}
			]
		},
		{
			"name": "Books",
			"item": [
				{
					"name": "get all books",
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/api/books"
					},
					"response": []
				},
				{
					"name": "get book por id",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/api/books/6818acb5e3915ca51328f914"
					},
					"response": []
				},
				{
					"name": "delete book por id",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "DELETE",
						"header": [],
						"url": "http://localhost:3000/api/books/6818aca6e3915ca51328f912"
					},
					"response": []
				},
				{
					"name": "mod book por id",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"available\": true,\n    \"titulo\": \"Cien años de soledad\",\n    \"resumen\": \"Una historia sobre la familia Buendía.\",\n    \"genero\": \"Novela\",\n    \"publicacion\": \"1967-05-30T00:00:00.000Z\",\n    \"disponible\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/books/6818acb5e3915ca51328f914"
					},
					"response": []
				},
				{
					"name": "crear book ",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"available\": true,\n    \"title\": \"100 años de soledad - TEST\",\n    \"summary\": \"Una historia sobre la familia Buendía. TEST\",\n    \"genre\": \"Novela - Sangre - Mucha sangre\",\n    \"publication\": \"1967-05-30T00:00:00.000Z\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/books"
					},
					"response": []
				}
			]
		}
	]
}
```

