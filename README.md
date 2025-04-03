# �⚽🏈 MultiSports App

Aplicación web que muestra información sobre equipos y jugadores de diferentes deportes (NBA, EPL, NFL) utilizando APIs externas.

## 🚀 Características Principales

- **Consulta de APIs deportivas** en tiempo real
- **Sistema de clases** para equipos y jugadores
- **Interfaz dinámica** generada con JavaScript
- **Sistema de favoritos** persistente con `localStorage`
- **Diseño responsive** y moderno

## 📦 Tecnologías Utilizadas

- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
- ![API](https://img.shields.io/badge/-API-FF6B6B)
- ![LocalStorage](https://img.shields.io/badge/-LocalStorage-5A29E4)

## ⭐ Sistema de Favoritos

La aplicación implementa un completo sistema de favoritos que:
- Permite marcar/desmarcar jugadores y equipos como favoritos
- Almacena los favoritos en `localStorage` para persistencia entre sesiones
- Muestra todos los favoritos en una sección especial
- Incluye opción para eliminar favoritos individualmente

## 🔑 Configuración de API Key

Para que la aplicación funcione correctamente, necesitarás:

1. Obtener una API Key gratuita registrándote en:
   [https://www.balldontlie.io](https://www.balldontlie.io)

2. Crear un archivo `config.js` en la raíz del proyecto con:
   ```javascript
   const API_KEY = 'tu_api_key_aquí';