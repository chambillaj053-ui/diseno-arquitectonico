# 🏛️ Galería de Diseño Arquitectónico

Galería virtual de trabajos estudiantiles de la especialidad de **Diseño Arquitectónico** — Nivel Secundario.

## 📋 Descripción

Este sitio web permite compartir y exhibir los proyectos realizados por los estudiantes a lo largo de los cinco grados de la especialidad de Diseño Arquitectónico. Cada grado presenta una selección de trabajos destacados organizados por categorías y competencias desarrolladas.

## 🏗️ Estructura del Sitio

| Sección | Contenido |
|---------|-----------|
| **Carátula** | Presentación, misión, visión y recorrido formativo |
| **1° Grado** | Fundamentos del dibujo técnico y croquis |
| **2° Grado** | Planos arquitectónicos completos |
| **3° Grado** | Maquetas y representación tridimensional |
| **4° Grado** | Diseño habitacional integral |
| **5° Grado** | Proyectos de grado y urbanismo |

## 🛠️ Tecnologías

- **Framework**: [Next.js 16](https://nextjs.org/) con App Router
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **Componentes**: shadcn/ui
- **Iconos**: Lucide React

## 🚀 Despliegue en Vercel

1. Sube este repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com) y regístrate con GitHub
3. Haz clic en "Add New Project" y selecciona este repositorio
4. Vercel detecta Next.js automáticamente → clic en "Deploy"
5. Tu sitio estará en línea en `https://tu-proyecto.vercel.app`

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## 📝 Personalización

Para agregar o modificar proyectos estudiantiles, edita el array `gradesData` en el archivo `src/app/page.tsx`. Cada proyecto tiene esta estructura:

```typescript
{
  id: "identificador-unico",
  title: "Título del Proyecto",
  student: "Nombre del Estudiante",
  description: "Descripción detallada del proyecto",
  image: "/nombre-imagen.png",
  category: "Categoría del proyecto",
  tags: ["Etiqueta1", "Etiqueta2", "Etiqueta3"],
}
```

Las imágenes de proyectos se colocan en la carpeta `public/`.

## 📄 Licencia

Proyecto educativo de uso libre.
