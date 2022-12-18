# Buscador de Gifs
Sencilla aplicación para realizar una búsqueda de gifs que devuelve los 10 primeros resultados de la búsqueda. 

Puedes probar la aplicación en el siguiente enlace: [Buscador de Gifs](https://buscador-de-gifs-cherokidev.netlify.app/)

## Puntos a destacar
- Uso de la api pública de [giphy](https://developers.giphy.com/) para realizar la búsqueda de gifs
- Uso de custom hooks para la gestión de la búsqueda de gifs
- Separación de responsabilidades en componentes
- Estructura de carpetas por tipo de fichero (file type)

## Tecnologías utilizadas
- React
- Javascript
- Vite

## Instalación
Clonar el repositorio y ejecutar el siguiente comando para instalar las dependencias necesarias
```bash
npm install
```

## Ejecución
Lanzar el siguiente comando para ejecutar la aplicación
```bash
npm run dev
```

## CI/CD
La aplicación se encuentra desplegada en [Netlify](https://www.netlify.com/)  y se ejecuta un pipeline de CI/CD cada vez que se realiza un push en el repositorio a la rama master.