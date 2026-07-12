# Estilos Globales

Documentación de la configuración centralizada de estilos.

## colors.js

**Responsabilidad**: Definir paleta de colores, tipografía, espaciado y constantes globales.

### Paleta de Colores (COLORS)

```javascript
{
  primary: '#000000',           // Negro (texto, UI principal)
  white: '#FFFFFF',             // Blanco (fondos)
  lightGray: '#F5F5F5',        // Gris muy claro (fondos secundarios)
  borderGray: '#DBDBDB',       // Gris bordes (divisores)
  textGray: '#8A8A8A',         // Gris texto (texto secundario)
  darkGray: '#262626',         // Gris oscuro (alternativo)
  liked: '#ED4956',            // Rojo (botón like)
  links: '#0095F6',            // Azul (links, menciones)
  success: '#31A24C'           // Verde (acciones exitosas)
}
```

### Tamaños de Fuente (FONTS)

```javascript
{
  small: 12,    // Texto pequeño, timestamps
  medium: 14,   // Texto normal
  large: 16,    // Títulos
  title: 20,    // Títulos principales
  heading: 24   // Encabezados grandes
}
```

### Espaciado (SPACING)

```javascript
{
  xs: 4,        // 4px - muy pequeño
  sm: 8,        // 8px - pequeño
  md: 12,       // 12px - medio
  lg: 16,       // 16px - grande
  xl: 20,       // 20px - extra grande
  xxl: 24       // 24px - doble extra grande
}
```

### Sombras (SHADOW)

```javascript
{
  small: { elevation: 2, ... },   // Sombras ligeras
  medium: { elevation: 4, ... }   // Sombras normales
}
```

### Uso en Componentes

**Importación**:
```javascript
import { COLORS, FONTS, SPACING, SHADOW } from '../styles/colors';
```

**En StyleSheet**:
```javascript
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,    // 12px
    backgroundColor: COLORS.white,
    fontSize: FONTS.medium,           // 14
  },
  title: {
    fontSize: FONTS.title,            // 20
    color: COLORS.primary,            // Negro
  },
  divider: {
    borderColor: COLORS.borderGray,   // #DBDBDB
  }
});
```

### Ventajas de esta Estructura

✅ **Consistencia**: Mismos colores en toda la app
✅ **Mantenibilidad**: Cambiar un color es editar un solo archivo
✅ **Escabilidad**: Fácil agregar nuevos estilos
✅ **Legibilidad**: Nombres descriptivos y claros
✅ **Profesionalismo**: Sigue estándares de Instagram

### Valores por Defecto Recomendados

- **Padding**: `SPACING.md` (12px) en pantallas, `SPACING.sm` (8px) en elementos
- **Margen entre elementos**: `SPACING.lg` (16px)
- **Font primaria**: `FONTS.medium` (14px)
- **Fondo general**: `COLORS.white`
- **Texto principal**: `COLORS.primary` (negro)
- **Texto secundario**: `COLORS.textGray`
- **Bordes**: `COLORS.borderGray`
