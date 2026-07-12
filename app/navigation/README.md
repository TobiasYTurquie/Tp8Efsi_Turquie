# Navegación

Documentación de la configuración de navegación centralizada.

## AppNavigator.js

**Responsabilidad**: Centralizar y configurar toda la navegación de la aplicación.

**Stack Implementado**: Stack Navigator de React Navigation

### Estructura de Navegación

```
Home (gestures: false)
  ↓
PostDetail (animate)
  ↓
Profile (animate)
```

### Pantallas

#### 1. Home
- Ruta: `Home`
- Componente: `HomeScreen`
- Gestures: Deshabilitados
- HeaderShown: false

#### 2. PostDetail
- Ruta: `PostDetail`
- Componente: `PostDetailScreen`
- Parámetro: `post: Object`

#### 3. Profile
- Ruta: `Profile`
- Componente: `ProfileScreen`
- Parámetro: `username: string`

### Navegación Básica

**Navegar a PostDetail**:
```javascript
navigation.navigate('PostDetail', { post: postData });
```

**Navegar a Profile**:
```javascript
navigation.navigate('Profile', { username: 'luna.photography' });
```

**Volver atrás**:
```javascript
navigation.goBack();
```

### Configuración Global

```javascript
screenOptions={{
  headerShown: false,          // Todos sin header personalizado
  cardStyle: { backgroundColor: '#FFFFFF' },
  animationEnabled: true,      // Transiciones animadas
}}
```

### Transiciones

Todas las pantallas tienen transiciones suaves (300ms) para:
- Apertura (open animation)
- Cierre (close animation)

### Integración en App.js

```javascript
import { AppNavigator } from './app/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}
```

### Context de Navegación

Disponible en cualquier componente:
```javascript
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const navigation = useNavigation();
  
  return (
    <Button 
      title="Ir a detalles"
      onPress={() => navigation.navigate('PostDetail', { post })}
    />
  );
};
```
