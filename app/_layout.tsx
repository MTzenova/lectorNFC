import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View , Text, Image} from 'react-native';
import { GlobalStyles } from '@/theme/GlobalStyles';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: () => (
              <View style={GlobalStyles.seccionesHeader}>
                <Text style={GlobalStyles.textoTitulo}>Lector NFC</Text>
                <Image
                  source={require('../assets/images/logo.png')}
                  style={{ width: 40, height: 40 }}
                />
              </View>
            ),
          }}
        />
      </Stack>
      <StatusBar style="auto"/>
    </ThemeProvider>
  );
}