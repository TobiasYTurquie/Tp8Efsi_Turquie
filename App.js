/**
 * App.js
 * Punto de entrada principal de la aplicación Instagram Clone
 * 
 * Configuración global:
 * - Navegación integrada con React Navigation
 * - StatusBar personalizada
 * - SafeAreaView para compatibilidad con notches
 */

import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { AppNavigator } from './app/navigation/AppNavigator';
import { COLORS } from './app/styles/colors';


// Mantener el splash screen visible hasta que esté listo
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    // Simular carga de recursos (en producción: cargar fuentes, imágenes, etc.)
    const prepare = async () => {
      try {
        // Aquí irían cargas de recursos reales
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        // Ocultar splash screen
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return (

    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor={COLORS.white}
        translucent={false}
      />
      <AppNavigator />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
