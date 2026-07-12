# 🚀 Guía Rápida de Ejecución

## Requisitos Previos

✅ Node.js v18+  
✅ npm o yarn  
✅ Expo CLI (recomendado)  

## 1️⃣ Instalar Dependencias

```bash
cd TP8Efsi_Turquie
npm install
```

**Si hay conflictos de versiones:**
```bash
npm install --legacy-peer-deps
```

## 2️⃣ Ejecutar la Aplicación

### Opción A: Con Tunnel (Recomendado)
```bash
npx expo start --tunnel
```

Luego:
- Escanear QR con **Expo Go** en el teléfono
- O presionar `a` para Android emulador
- O presionar `i` para iOS simulador

### Opción B: Sin Tunnel
```bash
npx expo start
```

### Opción C: Comandos Específicos
```bash
npm start          # Inicia Expo
npm run android    # Abre en Android
npm run ios        # Abre en iOS
npm run web        # Abre en web (navegador)
```

## 3️⃣ Desarrollo

Mientras está corriendo el servidor:
- **`r`**: Recargar la aplicación
- **`m`**: Mostrar menú
- **`j`**: Abrir debugger
- **`o`**: Abrir código en el editor
- **`Ctrl+C`**: Detener el servidor

---

## ✅ CHECKLIST DE VERIFICACIÓN

Después de ejecutar `npx expo start --tunnel`, verifica:

### Estructura de Carpetas
- ✅ `app/components/` con PostCard.js, Header.js, Story.js
- ✅ `app/screens/` con Home.js, PostDetail.js, Profile.js
- ✅ `app/services/` con api.js
- ✅ `app/navigation/` con AppNavigator.js
- ✅ `app/styles/` con colors.js

### Dependencias Instaladas
```bash
npm list react-navigation axios expo-splash-screen
```

Debería ver:
- `@react-navigation/native`
- `@react-navigation/stack`
- `axios`
- `expo-splash-screen`

### Pruebas en la Aplicación

1. **Home Screen**
   - ✅ Se cargan 15+ publicaciones
   - ✅ Historias (Stories) visibles en la parte superior
   - ✅ FlatList funciona (sin .map())
   - ✅ Pull-to-refresh disponible

2. **Interacciones**
   - ✅ Presionar post → Abre PostDetail
   - ✅ Like funciona (❤️ → 🤍)
   - ✅ Contador de likes aumenta/disminuye

3. **PostDetail Screen**
   - ✅ Imagen en alta resolución
   - ✅ Avatar del usuario presionable
   - ✅ Comentarios listados
   - ✅ Botón "Seguir" funcional
   - ✅ Etiquetas visibles

4. **Profile Screen**
   - ✅ Avatar, bio, estadísticas
   - ✅ Galería con numColumns={3}
   - ✅ Fotos presionables (-> PostDetail)
   - ✅ Botones "Editar perfil" y "Seguir"

5. **Navegación**
   - ✅ Home → PostDetail (mediante post)
   - ✅ PostDetail → Profile (mediante avatar)
   - ✅ Profile → PostDetail (mediante foto)
   - ✅ Botón atrás funciona

---

## 🎨 Personalización

### Cambiar Colores
Edita `app/styles/colors.js`:
```javascript
export const COLORS = {
  primary: '#000000',  // Cambiar aquí
  liked: '#ED4956',    // Y aquí
  ...
};
```

### Cambiar Número de Posts
En `app/screens/Home.js`, línea ~50:
```javascript
const data = await getPosts(15);  // Cambiar 15 a otro número
```

### Cambiar API
Edita `app/services/api.js` para usar otra API de imágenes.

---

## 🐛 Solución de Problemas

### Error: "Cannot find module..."
```bash
npm install --legacy-peer-deps
rm -rf node_modules && npm install
```

### Expo Server No Inicia
```bash
npx expo doctor      # Diagnosticar problemas
npx expo prebuild    # Preparar para build
```

### Errores de Compilación
1. Revisar la consola de Expo
2. Buscar en `app/screens/` o `app/components/`
3. Verificar imports: `import { ... } from '../path'`

### La API No Trae Datos
- Verificar conexión a internet
- Comprobar en `app/services/api.js`
- Ver logs: Presionar `j` en Expo para debugger

---

## 📱 Dispositivos Soportados

✅ iPhone (iOS 13+)
✅ Android (5.0+)
✅ Navegador web (desarrollo)

---

## 📚 Documentación Completa

Ver [README.md](./README.md) para:
- Arquitectura detallada
- Props de componentes
- Flujo de datos
- Características implementadas
- Referencias a Figma

---

**¡La aplicación está lista para ejecutar! 🎉**
