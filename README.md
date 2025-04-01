
# 🏀⚽🏈 MultiSports App

Aplicación web que muestra información sobre equipos y jugadores de diferentes deportes (NBA, EPL, NFL) utilizando APIs externas.

## 🚀 Características Principales

- **Consulta de APIs deportivas** en tiempo real
- **Sistema de clases** para equipos y jugadores
- **Interfaz dinámica** generada con JavaScript
- **Persistencia de datos** con localStorage
- **Diseño responsive** y moderno

## 📦 Tecnologías Utilizadas

- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
- ![API](https://img.shields.io/badge/-API-FF6B6B)

## 🛠️ Implementación Técnica

### 1. Estructura de Clases
```javascript
// Ejemplo de clase para equipos NBA
class classTeamsNba {
    constructor(conference, city, name, division) {
        this.conference = conference;
        this.city = city;
        this.name = name;
        this.division = division;
    }
}