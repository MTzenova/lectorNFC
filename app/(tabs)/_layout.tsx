import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Text, Image } from 'react-native';
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
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Escribir',
          headerShown: true,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="server" color={color} />,
          headerTitle: () => (
            <View style={GlobalStyles.seccionesHeader}>
              <Text style={GlobalStyles.textoTitulo}>Lector NFC</Text>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{ width: 30, height: 30 }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="escribir/index"
        options={{
          title: 'Escribir',
          headerShown: true,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="server" color={color} />,
          
        }}
      />
      
    </Tabs>
  );
}
