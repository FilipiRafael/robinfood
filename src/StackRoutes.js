import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppRoutes from './Routes';
import CompraFinalizada from './telas/CompraFinalizada';

import CarProductsProvider from './contexts/carproducts';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <CarProductsProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='ServicosScreen' component={AppRoutes} />
          <Stack.Screen name='CompraFinalizada' component={CompraFinalizada} />
        </Stack.Navigator>
      </NavigationContainer>
    </CarProductsProvider>
  )
}