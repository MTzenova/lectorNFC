import { router, Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Text, Image, Pressable } from 'react-native';
import { Ionicons} from '@expo/vector-icons'
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconSymbolName } from '../../components/ui/IconSymbol';
import { GlobalStyles } from '@/theme/GlobalStyles';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
        tabBarLabelStyle: GlobalStyles.fuenteFooter
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Volver',
            headerShown: true,
            tabBarIcon: ({ color }) => <Ionicons size={38} name="arrow-back" color={color}/>,
            headerTitle: () => (
              <Text style={GlobalStyles.textoTitulo}>Lector NFC</Text>
            ),
            headerRight: () => (
              <Image source={require('../../assets/images/logo.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
            ),
            headerStyle: GlobalStyles.seccionesHeader,
            headerTintColor: '#fff', //color texto e iconos de la barra
            tabBarStyle: { display: 'none' },
            
          }}/>

          <Tabs.Screen
          name="escribir/index"
          options={{
            title: 'Escribir',
            headerShown: true,
            tabBarIcon: ({ color }) => <Ionicons size={28} name="pencil" color={color}/>,
            headerTitle: () => (
              <Text style={GlobalStyles.textoTitulo}>Lector NFC</Text>
            ),
            headerRight: () => (
              <Image source={require('../../assets/images/logo.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
            ),
            headerStyle: GlobalStyles.seccionesHeader,
            headerTintColor: '#fff', //color texto e iconos de la barra
            tabBarStyle: GlobalStyles.seccionesFooter,
          }}/>

          <Tabs.Screen
          name="bbdd/index"
          options={{
            title: 'BBDD',
            headerShown: true,
            tabBarIcon: ({ color }) => <Ionicons size={28} name="server" color={color}/>,
            headerTitle: () => (
              <Text style={GlobalStyles.textoTitulo}>Lector NFC</Text>
            ),
            headerRight: () => (
              <Image source={require('../../assets/images/logo.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
            ),
            headerStyle: GlobalStyles.seccionesHeader,
            headerTintColor: '#fff', //color texto e iconos de la barra
            tabBarStyle: GlobalStyles.seccionesFooter,
          }}/>

        <Tabs.Screen
            name="salir/index"
            options={{
            title: 'Salir',
            headerShown: true,
            tabBarIcon: ({ color }) => <Ionicons size={28} name="log-out" color={color}/>,
            headerTitle: () => (
              <Text style={GlobalStyles.textoTitulo}>Lector NFC</Text>
            ),
            headerRight: () => (
              <Image source={require('../../assets/images/logo.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
            ),
            headerStyle: GlobalStyles.seccionesHeader,
            headerTintColor: '#fff', //color texto e iconos de la barra
            tabBarStyle: GlobalStyles.seccionesFooter,
          }}/>
    </Tabs>
  );
}
